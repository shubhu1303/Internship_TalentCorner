import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;

  useEffect(() => {
    const fetchData = async (page) => {
      const offset = (page - 1) * recordsPerPage;
      try {
        const response = await axios.get(`http://localhost:3001/api/details?offset=${offset}&limit=${recordsPerPage}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(currentPage);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleWhatsAppClick = (contactNo) => {
    window.open(`https://wa.me/${contactNo}`, '_blank');
  };

  const handleEmailClick = (emailId) => {
    window.location.href = `mailto:${emailId}`;
  };

  const handleCallClick = (contactNo) => {
    window.location.href = `tel:${contactNo}`;
  };

  const styles = {
    app: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    },
    tableContainer: {
      margin: '20px auto',
      width: '80%',
      maxHeight: '600px', // Fixed height for the container
      overflowY: 'auto', // Enable vertical scroll
      border: '1px solid #ddd', // Add border to the container
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    thTd: {
      border: '1px solid #ddd',
      padding: '8px',
      textAlign: 'left',
    },
    th: {
      backgroundColor: '#f2f2f2',
      width:'min-content'
    },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      margin: '20px 0',
    },
    button: {
      margin: '0 5px',
      padding: '10px 20px',
      border: 'none',
      backgroundColor: '#007bff',
      color: '#fff',
      cursor: 'pointer',
    },
    actionCell: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '20%',
    },
  };

  return (
    <div style={styles.app}>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.thTd, ...styles.th }}>Name</th>
              <th style={{ ...styles.thTd, ...styles.th }}>Role</th>
              <th style={{ ...styles.thTd, ...styles.th }}>Experience</th>
              <th style={{ ...styles.thTd, ...styles.th }}>Location</th>
              <th style={{ ...styles.thTd, ...styles.th }}>Department</th>
              <th style={{ ...styles.thTd, ...styles.th }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td style={styles.thTd}>
                  <i className="bi bi-person-circle" style={{ marginRight: '8px' }}></i>
                  {row.Name}
                </td>
                <td style={styles.thTd}>{row.Role}</td>
                <td style={styles.thTd}>{row.years_of_experience}</td>
                <td style={styles.thTd}>{row.current_location}</td>
                <td style={styles.thTd}>{row.Department}</td>
                <td style={{ ...styles.thTd, ...styles.actionCell }}>
                  <i 
                    className="bi bi-whatsapp" 
                    style={{ marginRight: '8px', cursor: 'pointer' }} 
                    onClick={() => handleWhatsAppClick(row.contact_no)}
                  ></i>
                  <i 
                    className="bi bi-envelope" 
                    style={{ marginRight: '8px', cursor: 'pointer' }} 
                    onClick={() => handleEmailClick(row.email_id)}
                  ></i>
                  <i 
                    className="bi bi-telephone" 
                    style={{ marginRight: '8px', cursor: 'pointer' }} 
                    onClick={() => handleCallClick(row.contact_no)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={styles.pagination}>
        <button style={styles.button} onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button style={styles.button} onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Log out successful
                navigate("/"); // Redirect to the home page
            })
            .catch((error) => {
                // An error happened
                console.error(error);
            });
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;

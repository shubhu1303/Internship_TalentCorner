import "../src/styles/main.scss";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Filter from "./pages/Filter";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { auth } from "./firebase";

function App() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUserName(user.displayName);
          setUserEmail(user.email);
          setIsAuthenticated(true);
        } else {
          setUserName("");
          setUserEmail("");
          setIsAuthenticated(false);
        }
      });
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
                </Routes>

                {isAuthenticated && <Sidebar name={userName} email={userEmail} />}

                {isAuthenticated && (
                  <Routes>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/users" element={<Users />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/filter" element={<Filter />} />
                      <Route path="/settings" element={<Settings />} />
                      <Route path="/logout" element={<Logout />} />
                  </Routes>
                )}
            </div>
        </Router>
    );
}

export default App;


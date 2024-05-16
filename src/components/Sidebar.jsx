import React, { useState } from "react";
import Talent from "../Images/talentlogo.png";
import Profile from "../Images/profile.png";
import Dashboard from "../Images/dashboard.svg";
import Transactions from "../Images/transactions.svg";
import Performance from "../Images/performance.svg";
import News from "../Images/news.svg";
import Settings from "../Images/settings.svg";
import Support from "../Images/support.svg";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Sidebar = (props) => {
    const navigate = useNavigate();

    const [closeMenu, setCloseMenu] = useState(false);

    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu);
    };

    const handleIconClick = () => {
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
        <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
            <div className={closeMenu === false ? "logoContainer" : "logoContainer active"}>
                <img src={Talent} alt="icon" className="logo" />
                
            </div>
            <div className={closeMenu === false ? "burgerContainer" : "burgerContainer active"}>
                <div
                    className="burgerTrigger"
                    onClick={() => {
                        handleCloseMenu();
                    }}
                ></div>
                <div className="burgerMenu"></div>
            </div>
            <div className={closeMenu ? "profileContainer active" : "profileContainer"}>
                <img src={Profile} alt="profile" className="profile" />

                {props.name && (
                    <div className={closeMenu ? "profileContents" : "profileContents show"}>
                        <p className="name">Hello, {props.name}👋</p>
                        <p>{props.email}</p>
                    </div>
                )}
            </div>

            <div className={closeMenu === false ? "contentsContainer" : "contentsContainer active"}>
                <ul>
                    <li>
                        <div onClick={() => navigate("/dashboard")}>
                            <img src={Dashboard} alt="dashboard" />
                            {!closeMenu && <span className="label">Dashboard</span>}
                            {closeMenu && <span className="text">Dashboard</span>}
                        </div>
                    </li>
                    <li>
                        <div onClick={() => navigate("/users")}>
                            <img src={Support} alt="users" />
                            {!closeMenu && <span className="label">Users</span>}
                            {closeMenu && <span className="text">Users</span>}
                        </div>
                    </li>
                    <li>
                        <div onClick={() => navigate("/profile")}>
                            <img src={News} alt="profile" />
                            {!closeMenu && <span className="label">Profile</span>}
                            {closeMenu && <span className="text">Profile</span>}
                        </div>
                    </li>
                    <li>
                        <div onClick={() => navigate("/filter")}>
                            <img src={Performance} alt="filter" />
                            {!closeMenu && <span className="label">Filters</span>}
                            {closeMenu && <span className="text">Filters</span>}
                        </div>
                    </li>
                    <li>
                        <div onClick={() => navigate("/settings")}>
                            <img src={Settings} alt="Settings" />
                            {!closeMenu && <span className="label">Settings</span>}
                            {closeMenu && <span className="text">Settings</span>}
                        </div>
                    </li>
                    <li>
                        <div onClick={handleIconClick}>
                            <img src={Transactions} alt="logout" />
                            {!closeMenu && <span className="label">Logout</span>}
                            {closeMenu && <span className="text">Logout</span>}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

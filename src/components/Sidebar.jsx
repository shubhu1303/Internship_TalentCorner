import React, { useState } from "react";
import Icon from "../Images/Icon.svg";
import Profile from "../Images/profile.png";
import Dashboard from "../Images/dashboard.svg";
import Transactions from "../Images/transactions.svg";
import Performance from "../Images/performance.svg";
import News from "../Images/news.svg";
import Settings from "../Images/settings.svg";
import Support from "../Images/support.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [closeMenu, setCloseMenu] = useState(false);

    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu);
    };

    const handleIconClick = (path) => {
        if (closeMenu || !closeMenu) {
            navigate(path);
        }
    };

    return (
        <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
            <div className={closeMenu === false ? "logoContainer" : "logoContainer active"}>
                <img src={Icon} alt="icon" className="logo" />
                <h2 className={closeMenu === false ? "title show" : "title"}>
                    TalentCorner.
                </h2>
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
            <div className={closeMenu === false ? "profileContainer" : "profileContainer active"}>
                <img src={Profile} alt="profile" className="profile" />
                <div className={closeMenu === false ? "profileContents show" : "profileContents"}>
                    <p className="name">Hello, admin👋</p>
                    <p>admin@gmail.com</p>
                </div>
            </div>
            <div className={closeMenu === false ? "contentsContainer" : "contentsContainer active"}>
                <ul>
                    <li className={location.pathname === "/" ? "active" : ""}>
                        <div onClick={() => handleIconClick("/")}>
                            <img src={Dashboard} alt="dashboard" />
                            {!closeMenu && <span className="label">Dashboard</span>}
                            {closeMenu && <span className="text">Dashboard</span>}
                        </div>
                    </li>
                    <li className={location.pathname === "/users" ? "active" : ""}>
                        <div onClick={() => handleIconClick("/users")}>
                            <img src={Support} alt="users" />
                            {!closeMenu && <span className="label">Users</span>}
                            {closeMenu && <span className="text">Users</span>}
                        </div>
                    </li>
                    <li className={location.pathname === "/profile" ? "active" : ""}>
                        <div onClick={() => handleIconClick("/profile")}>
                            <img src={News} alt="profile" />
                            {!closeMenu && <span className="label">Profile</span>}
                            {closeMenu && <span className="text">Profile</span>}
                        </div>
                    </li>
                    <li className={location.pathname === "/filter" ? "active" : ""}>
                        <div onClick={() => handleIconClick("/filter")}>
                            <img src={Performance} alt="filter" />
                            {!closeMenu && <span className="label">Filters</span>}
                            {closeMenu && <span className="text">Filters</span>}
                        </div>
                    </li>
                    <li className={location.pathname === "/settings" ? "active" : ""}>
                        <div onClick={() => handleIconClick("/settings")}>
                            <img src={Settings} alt="Settings" />
                            {!closeMenu && <span className="label">Settings</span>}
                            {closeMenu && <span className="text">Settings</span>}
                        </div>
                    </li>
                    <li className={location.pathname === "/logout" ? "active" : ""}>
                        <div onClick={() => handleIconClick("/logout")}>
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

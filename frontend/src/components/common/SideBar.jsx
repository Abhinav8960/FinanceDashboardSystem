import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaChartBar, FaDesktop, FaUserLock } from "react-icons/fa";
import { BsMortarboardFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { AuthContext } from "../auth/AuthContext";

const SideBar = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div className="sidebar-custom">
      <ul className="sidebar-list">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <FaChartBar className="sidebar-icon" />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/category"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <BsMortarboardFill className="sidebar-icon" />
            Category
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/financial-records"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <FaDesktop className="sidebar-icon" />
            Financial Records
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/user-management"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <FaUserLock className="sidebar-icon" />
            User Management
          </NavLink>
        </li>

        <li>
          <NavLink onClick={logout} className="sidebar-link logout">
            <MdLogout className="sidebar-icon" />
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

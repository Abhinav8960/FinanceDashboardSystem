import React from "react";
import SideBar from "../common/SideBar";
import { FaMoneyBillWave, FaTags, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import DashboardLayout from "../common/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* Content */}
      <div className="col-lg-9">
        <div className="row">
          {/* Financial Records */}
          <div className="col-md-4">
            <Link to="/financial-records" className="dashboard-tile">
              <FaMoneyBillWave className="tile-icon" />
              <h5>Financial Records</h5>
              <p>Manage transactions</p>
            </Link>
          </div>

          {/* Categories */}
          <div className="col-md-4">
            <Link to="/category" className="dashboard-tile">
              <FaTags className="tile-icon" />
              <h5>Categories</h5>
              <p>Manage categories</p>
            </Link>
          </div>

          {/* Users */}
          <div className="col-md-4">
            <Link to="/user-management" className="dashboard-tile">
              <FaUsers className="tile-icon" />
              <h5>Users</h5>
              <p>Manage users</p>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

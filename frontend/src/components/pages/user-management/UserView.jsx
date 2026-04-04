import React from "react";
import DashboardLayout from "../../common/DashboardLayout";

const UserView = () => {
  const user = {
    name: "Rahul Sharma",
    email: "rahul@example.com",
    role: "Admin",
    status: "Active",
    created_at: "01 Apr 2026",
  };

  return (
    <DashboardLayout>
      <div className="col-lg-9">
        <div className="content-card">
          <p className="card-eyebrow">User Management</p>
          <h3 className="card-heading mb-3">View User</h3>

          <div className="row g-3">
            {/* Name */}
            <div className="col-md-6">
              <div className="view-group">
                <label>Name</label>
                <p>{user.name}</p>
              </div>
            </div>

            {/* Email */}
            <div className="col-md-6">
              <div className="view-group">
                <label>Email</label>
                <p>{user.email}</p>
              </div>
            </div>

            {/* Role */}
            <div className="col-md-6">
              <div className="view-group">
                <label>Role</label>
                <p>{user.role}</p>
              </div>
            </div>

            {/* Status */}
            <div className="col-md-6">
              <div className="view-group">
                <label>Status</label>
                <p>{user.status}</p>
              </div>
            </div>
          </div>

          {/* Created At */}
          <div className="view-group mt-3">
            <label>Created At</label>
            <p>{user.created_at}</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserView;

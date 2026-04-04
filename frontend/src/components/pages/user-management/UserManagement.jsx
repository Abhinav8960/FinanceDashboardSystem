import React from "react";
import DashboardLayout from "../../common/DashboardLayout";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserManagement = () => {
  return (
    <>
      <DashboardLayout>
        {/* Content */}
        <div className="col-lg-9">
          <div className="content-card">
            <p className="card-eyebrow">User Management</p>
            <div className="table-responsive">
              <table className="table table-dark table-bordered align-middle custom-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Abhinav</td>
                    <td>@abhibnavgmail.com</td>
                    <td>Admin</td>
                    <td>Active</td>
                    <td className="d-flex gap-2">
                      <Link
                        to="/dashboard/user-management/view/1"
                        className="action-btn view"
                      >
                        <FaEye />
                      </Link>

                      <Link
                        to="/dashboard/user-management/update/1"
                        className="action-btn edit"
                      >
                        <FaEdit />
                      </Link>

                      <button className="action-btn delete">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>Ankit</td>
                    <td>ankit@gmail.com</td>
                    <td>Viewer</td>
                    <td>Active</td>
                    <td className="d-flex gap-2">
                      <button className="action-btn view">
                        <FaEye />
                      </button>

                      <button className="action-btn edit">
                        <FaEdit />
                      </button>

                      <button className="action-btn delete">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>Shubham</td>
                    <td>shubham@gmail.com</td>
                    <td>Analyst</td>
                    <td>Active</td>
                    <td className="d-flex gap-2">
                      <button className="action-btn view">
                        <FaEye />
                      </button>

                      <button className="action-btn edit">
                        <FaEdit />
                      </button>

                      <button className="action-btn delete">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default UserManagement;

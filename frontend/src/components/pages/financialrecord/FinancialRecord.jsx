import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import DashboardLayout from "../../common/DashboardLayout";
import { Link } from "react-router-dom";

const FinancialRecord = () => {
  return (
    <DashboardLayout>
      {/* Content */}
      <div className="col-lg-9">
        <div className="content-card">
          <p className="card-eyebrow">Financial Records</p>
          <div className="table-responsive">
            <table className="table table-dark table-bordered align-middle custom-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>Salary</td>
                  <td>₹50,000</td>
                  <td>Credit</td>
                  <td>01 Apr 2026</td>
                  <td className="d-flex gap-2">
                    <Link
                      to="/dashboard/financial-record/view/1"
                      className="action-btn view"
                    >
                      <FaEye />
                    </Link>

                    <Link
                      to="/dashboard/financial-record/update/1"
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
                  <td>Groceries</td>
                  <td>₹3,200</td>
                  <td>Debit</td>
                  <td>02 Apr 2026</td>
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
                  <td>Electric Bill</td>
                  <td>₹1,500</td>
                  <td>Debit</td>
                  <td>03 Apr 2026</td>
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
  );
};

export default FinancialRecord;

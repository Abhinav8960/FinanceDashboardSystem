import React from "react";
import DashboardLayout from "../../common/DashboardLayout";

const Category = () => {
  return (
    <>
      <DashboardLayout>
        {/* Content */}
        <div className="col-lg-9">
          <div className="content-card">
            <p className="card-eyebrow">Categories</p>
            <div className="table-responsive">
              <table className="table table-dark table-bordered align-middle custom-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>created At</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Salary</td>
                    <td>₹50,000</td>
                    <td>Credit</td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>Groceries</td>
                    <td>₹3,200</td>
                    <td>Debit</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Electric Bill</td>
                    <td>₹1,500</td>
                    <td>Debit</td>
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

export default Category;

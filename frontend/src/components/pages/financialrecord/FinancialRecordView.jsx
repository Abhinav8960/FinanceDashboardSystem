import React from "react";
import DashboardLayout from "../../common/DashboardLayout";

const FinancialRecordView = () => {
  // dummy data (baad me API se aayega)
  const record = {
    category: "Food",
    amount: "₹3,200",
    type: "Expense",
    date: "02 Apr 2026",
    description: "Grocery shopping",
    status: "Active",
  };

  return (
    <DashboardLayout>
      <div className="col-lg-9">
        <div className="content-card">
          <p className="card-eyebrow">Financial Records</p>
          <h3 className="card-heading mb-3">View Record</h3>

          <div className="row g-3">
            {/* Category */}
            <div className="col-md-6">
              <div className="view-group">
                <label>Category</label>
                <p>{record.category}</p>
              </div>
            </div>

            {/* Amount */}
            <div className="col-md-6">
              <div className="view-group">
                <label>Amount</label>
                <p>{record.amount}</p>
              </div>
            </div>

            {/* Type */}
            <div className="col-md-6">
              <div className="view-group">
                <label>Type</label>
                <p>{record.type}</p>
              </div>
            </div>

            {/* Date */}
            <div className="col-md-6">
              <div className="view-group">
                <label>Date</label>
                <p>{record.date}</p>
              </div>
            </div>

            {/* Status */}
            <div className="col-md-6">
              <div className="view-group">
                <label>Status</label>
                <p>{record.status}</p>
              </div>
            </div>
          </div>

          {/* Description full width */}
          <div className="view-group mt-3">
            <label>Description</label>
            <p>{record.description}</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FinancialRecordView;

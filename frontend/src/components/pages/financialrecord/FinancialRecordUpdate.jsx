import React, { useState } from "react";
import DashboardLayout from "../../common/DashboardLayout";

const FinancialRecordUpdate = () => {
  const [form, setForm] = useState({
    category_id: "",
    amount: "",
    type: "income",
    date: "",
    description: "",
    status: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <DashboardLayout>
      <div className="col-lg-9">
        <div className="content-card">
          <p className="card-eyebrow">Financial Records</p>
          <h3 className="card-heading mb-3">Edit Record</h3>

          <form onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-group-custom">
                  <label className="form-label-custom">Category</label>
                  <select
                    name="category_id"
                    className="input-custom"
                    value={form.category_id}
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>
                    <option value="1">Food</option>
                    <option value="2">Salary</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group-custom">
                  <label className="form-label-custom">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    className="input-custom"
                    placeholder="Enter amount"
                    value={form.amount}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-group-custom">
                  <label className="form-label-custom">Type</label>
                  <select
                    name="type"
                    className="input-custom"
                    value={form.type}
                    onChange={handleChange}
                  >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group-custom">
                  <label className="form-label-custom">Date</label>
                  <input
                    type="date"
                    name="date"
                    className="input-custom"
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-group-custom">
                  <label className="form-label-custom">Status</label>
                  <select
                    name="status"
                    className="input-custom"
                    value={form.status}
                    onChange={handleChange}
                  >
                    <option value={1}>Active</option>
                    <option value={0}>Inactive</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Description full width */}
            <div className="form-group-custom">
              <label className="form-label-custom">Description</label>
              <textarea
                name="description"
                className="input-custom"
                rows="3"
                placeholder="Optional..."
                value={form.description}
                onChange={handleChange}
              />
            </div>

            {/* Submit */}
            <button type="submit" className="btn-submit-custom w-100">
              Save Record
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FinancialRecordUpdate;

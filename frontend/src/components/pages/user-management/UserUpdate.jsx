import React, { useState } from "react";
import DashboardLayout from "../../common/DashboardLayout";

const UserUpdate = () => {
  const [form, setForm] = useState({
    name: "Rahul Sharma",
    email: "rahul@example.com",
    password: "",
    password_confirmation: "",
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
          <p className="card-eyebrow">User Management</p>
          <h3 className="card-heading mb-3">Update User</h3>

          <form onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-group-custom">
                  <label className="form-label-custom">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input-custom"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group-custom">
                  <label className="form-label-custom">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input-custom"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-group-custom">
                  <label className="form-label-custom">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input-custom"
                    placeholder="Leave blank to keep same"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group-custom">
                  <label className="form-label-custom">Confirm Password</label>
                  <input
                    type="password"
                    name="password_confirmation"
                    className="input-custom"
                    value={form.password_confirmation}
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

            {/* Submit */}
            <button type="submit" className="btn-submit-custom mt-3">
              Update User
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserUpdate;

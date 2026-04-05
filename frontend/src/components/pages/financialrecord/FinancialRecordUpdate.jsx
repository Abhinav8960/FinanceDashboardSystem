import React, { useEffect, useState } from "react";
import DashboardLayout from "../../common/DashboardLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiUrl, token } from "../../common/Config";
import toast from "react-hot-toast";
import Select from "react-select";

const FinancialRecordUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm();

  // ✅ dropdown options
  const userOptions = users.map((u) => ({
    value: u.id,
    label: u.name,
  }));

  const categoryOptions = categories.map((c) => ({
    value: c.id,
    label: c.name,
  }));

  // ✅ fetch all data (users + categories + record)
  const fetchData = async () => {
    try {
      const [userRes, catRes, recordRes] = await Promise.all([
        fetch(`${apiUrl}/user-management`, {
          headers: { Authorization: `Bearer ${token()}` },
        }),
        fetch(`${apiUrl}/categories`, {
          headers: { Authorization: `Bearer ${token()}` },
        }),
        fetch(`${apiUrl}/financial-records/${id}`, {
          headers: { Authorization: `Bearer ${token()}` },
        }),
      ]);

      const userData = await userRes.json();
      const catData = await catRes.json();
      const recordData = await recordRes.json();

      if (userData.status) setUsers(userData.data);
      if (catData.status) setCategories(catData.data);

      // ✅ set default values
      if (recordData.status) {
        const r = recordData.data;

        setValue("user_id", r.user_id);
        setValue("category_id", r.category_id);
        setValue("amount", r.amount);
        setValue("type", r.type);
        setValue("date", r.date);
        setValue("status", r.status);
        setValue("description", r.description);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();

    // register for react-select
    register("user_id", { required: "User is required" });
    register("category_id", { required: "Category is required" });
  }, []);

  // ✅ UPDATE API
  const onSubmit = async (data) => {
    try {
      const res = await fetch(`${apiUrl}/financial-records/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.status) {
        toast.success(result.message);
        navigate("/dashboard/financial-records");
      } else {
        if (result.errors) {
          Object.keys(result.errors).forEach((field) => {
            setError(field, {
              type: "server",
              message: result.errors[field][0],
            });
          });
        }

        toast.error(result.message || "Validation error");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="col-lg-9">
        <div className="content-card">
          <p className="card-eyebrow">Financial Records</p>
          <h3 className="card-heading mb-3">Edit Record</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-3">
              {/* USER */}
              <div className="col-md-6">
                <label className="form-label-custom">User</label>
                <Select
                  options={userOptions}
                  onChange={(val) => setValue("user_id", val.value)}
                />
                {errors.user_id && (
                  <p className="text-danger small">{errors.user_id.message}</p>
                )}
              </div>

              {/* CATEGORY */}
              <div className="col-md-6">
                <label className="form-label-custom">Category</label>
                <Select
                  options={categoryOptions}
                  onChange={(val) => setValue("category_id", val.value)}
                />
                {errors.category_id && (
                  <p className="text-danger small">
                    {errors.category_id.message}
                  </p>
                )}
              </div>

              {/* AMOUNT */}
              <div className="col-md-6">
                <label className="form-label-custom">Amount</label>
                <input
                  type="number"
                  {...register("amount", { required: "Amount is required" })}
                  className={`input-custom ${errors.amount && "is-invalid"}`}
                />
              </div>

              {/* TYPE */}
              <div className="col-md-6">
                <label className="form-label-custom">Type</label>
                <select {...register("type")} className="input-custom">
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>

              {/* DATE */}
              <div className="col-md-6">
                <label className="form-label-custom">Date</label>
                <input
                  type="date"
                  {...register("date")}
                  className="input-custom"
                />
              </div>

              {/* STATUS */}
              <div className="col-md-6">
                <label className="form-label-custom">Status</label>
                <select {...register("status")} className="input-custom">
                  <option value={1}>Active</option>
                  <option value={0}>Inactive</option>
                </select>
              </div>

              {/* DESCRIPTION */}
              <div className="col-md-12">
                <label className="form-label-custom">Description</label>
                <textarea
                  {...register("description")}
                  className="input-custom"
                />
              </div>
            </div>

            <button type="submit" className="btn-submit-custom w-100 mt-3">
              Update Record
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FinancialRecordUpdate;

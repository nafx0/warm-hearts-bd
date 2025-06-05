import React, { useState } from "react";
import { ArrowRight, CreditCard, User, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Donation = () => {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    method: "bkash",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation logic here (e.g., API call or redirect)
    toast.success(
      `Thank you, ${form.name || "Donor"}! You’ve donated ৳${form.amount}.`
    );
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="bg-[#fff9f3] min-h-screen py-16 px-6 md:px-20 mt-10">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-[#3b2f1f] mb-4">
          Make a Donation
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Your support brings warmth to families in need. Choose an amount, a
          method, and become a beacon of kindness this winter.
        </p>
      </div>

      {/* Donation Form */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <User className="inline w-4 h-4 mr-1" />
              Donor Name (optional)
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <DollarSign className="inline w-4 h-4 mr-1" />
              Donation Amount (in BDT)
            </label>
            <input
              type="number"
              name="amount"
              required
              value={form.amount}
              onChange={handleChange}
              placeholder="500"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <CreditCard className="inline w-4 h-4 mr-1" />
              Payment Method
            </label>
            <select
              name="method"
              value={form.method}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="bkash">bKash</option>
              <option value="nagad">Nagad</option>
              <option value="rocket">Rocket</option>
              <option value="bank">Bank Transfer</option>
              <option value="cash">Cash Drop-off</option>
            </select>
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Donate Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      {/* Info */}
      <div className="text-center text-sm text-gray-500 mt-10 max-w-xl mx-auto">
        We currently accept digital and offline donations. A confirmation
        message will be sent after successful payment via your chosen method.
      </div>
    </div>
  );
};

export default Donation;

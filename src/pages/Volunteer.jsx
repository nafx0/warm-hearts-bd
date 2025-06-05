import React, { useState } from "react";
import { UserPlus, CalendarDays, Mail, PhoneCall, CheckCircle } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Volunteer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    availability: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with your backend logic or email service.
    toast.success(`Thank you, ${form.name || "Volunteer"}! We'll contact you soon.`);
    setTimeout(() => navigate("/"), 1000)
  };

  return (
    <div className="bg-[#fff9f3] min-h-screen py-16 px-6 md:px-20 mt-15">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-serif text-[#3b2f1f] mb-4">
          Join as a Volunteer
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Your time and effort can change lives. Help us bring warmth and dignity
          to families across Bangladesh.
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <UserPlus className="inline w-4 h-4 mr-1" />
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Mail className="inline w-4 h-4 mr-1" />
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <PhoneCall className="inline w-4 h-4 mr-1" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="01XXXXXXXXX"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Interest */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <CheckCircle className="inline w-4 h-4 mr-1" />
              Area of Interest
            </label>
            <select
              name="interest"
              value={form.interest}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="">Select one</option>
              <option value="donation-sorting">Donation Sorting</option>
              <option value="distribution">Distribution Drives</option>
              <option value="pickup-coordination">Pickup Coordination</option>
              <option value="campaign-marketing">Campaign Promotion</option>
              <option value="logistics">Logistics & Packing</option>
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <CalendarDays className="inline w-4 h-4 mr-1" />
              Availability (Days / Hours)
            </label>
            <input
              type="text"
              name="availability"
              value={form.availability}
              onChange={handleChange}
              required
              placeholder="Weekends, 2-5 PM"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Sign Up to Volunteer
            </button>
          </div>
        </form>
      </div>

      {/* Note */}
      <div className="text-center text-sm text-gray-500 mt-10 max-w-xl mx-auto">
        We’ll get in touch shortly after reviewing your submission. Thank you for
        stepping up!
      </div>
    </div>
  );
};

export default Volunteer;

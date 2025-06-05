import React from "react";
import { NavLink, useLoaderData, useNavigate, useParams } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Target,
  Phone,
  Users,
  ClipboardList,
  Handshake,
} from "lucide-react";

const Campaign = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const campaignId = parseInt(id);
  const campaign = data.find((c) => c.id === campaignId);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "ongoing":
        return "bg-green-500";
      case "completed":
        return "bg-blue-500";
      case "urgent":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const navigate = useNavigate();

  if (!campaign) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-700">Campaign not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#fff9f3] min-h-screen px-6 md:px-20 py-20">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        {/* Image */}
        <div className="h-80 relative">
          <img
            src={campaign.image}
            alt={campaign.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span
              className={`${getStatusColor(
                campaign.status
              )} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md`}
            >
              {campaign.status}
            </span>
            <span className="bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-medium flex items-center">
              <MapPin className="w-3 h-3 text-blue-600 mr-1" />
              {campaign.division}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{campaign.title}</h1>
          <p className="text-gray-700 text-lg">{campaign.description}</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="flex items-start text-sm text-gray-700">
                <Target className="w-4 h-4 mr-2 text-blue-600 mt-0.5" />
                <span>{campaign.goal}</span>
              </div>

              <div className="flex items-center text-sm text-gray-700">
                <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                Last updated on {formatDate(campaign.lastUpdated)}
              </div>

              <div className="flex items-center text-sm text-gray-700">
                <Users className="w-4 h-4 mr-2 text-emerald-600" />
                {campaign.volunteerSupport}
              </div>

              <div className="flex items-center text-sm text-gray-700">
                <Phone className="w-4 h-4 mr-2 text-amber-600" />
                Contact: {campaign.contactInfo}
              </div>

              <div className="flex items-center text-sm text-gray-700">
                <Handshake className="w-4 h-4 mr-2 text-purple-600" />
                Initiated by: {campaign.initiatedBy}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Items Needed:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {campaign.itemsNeeded.map((item, index) => (
                    <span
                      key={index}
                      className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Pickup Points:
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {campaign.pickupPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button onClick={() => navigate("/donation")} className="flex-1 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold py-2 px-3 rounded-lg transition-colors cursor-pointer">
                Donate Now
              </button>
              <button onClick={() => navigate("/become-a-volunteer-today")} className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold py-2 px-3 rounded-lg transition-colors cursor-pointer">
                Volunteer
              </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;

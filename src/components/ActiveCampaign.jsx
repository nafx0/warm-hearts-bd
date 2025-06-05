import { MapPin, Target, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const ActiveCampaign = ({ campaign }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "ongoing":
        return "bg-emerald-600";
      case "completed":
        return "bg-rose-400";
      case "urgent":
        return "bg-red-600";
      default:
        return "bg-neutral-500";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 border border-rose-100 flex flex-col h-full">
      {/* Image with badges */}
      <NavLink to={`/campaigns/${campaign.id}`}>
        <div className="relative h-40 overflow-hidden">
          <img
            src={campaign.image}
            alt={campaign.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
          />

          <div className="absolute top-2 left-2 flex gap-2">
            <span
              className={`${getStatusColor(
                campaign.status
              )} text-white px-2 py-1 rounded-full text-xs font-semibold shadow-md`}
            >
              {campaign.status}
            </span>
            <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium flex items-center">
              <MapPin className="w-3 h-3 text-rose-600 mr-1" />
              {campaign.division}
            </span>
          </div>
        </div>
      </NavLink>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="font-bold text-[#5c1b1b] line-clamp-1 mb-2">
            {campaign.title}
          </h3>

          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center text-sm text-rose-700">
              <Calendar className="w-4 h-4 mr-1 text-rose-500" />
              {formatDate(campaign.lastUpdated)}
            </div>
            <div className="bg-rose-100 text-rose-700 px-2 py-1 rounded-full text-xs font-medium">
              {campaign.volunteerSupport} volunteers
            </div>
          </div>

          <div className="mb-3">
            <div className="flex items-start text-sm text-rose-900 mb-1">
              <Target className="w-4 h-4 mr-2 text-rose-600 flex-shrink-0 mt-0.5" />
              <span className="line-clamp-2">{campaign.goal}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-4">
            {campaign.itemsNeeded.slice(0, 3).map((item, index) => (
              <span
                key={index}
                className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium"
              >
                {item}
              </span>
            ))}
            {campaign.itemsNeeded.length > 3 && (
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                +{campaign.itemsNeeded.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2 mt-auto pt-3">
          <button
            onClick={() => navigate("/donation")}
            className="flex-1 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold py-2 px-3 rounded-lg transition-colors cursor-pointer"
          >
            Donate
          </button>
          <button
            onClick={() => navigate("/how-to-help")}
            className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold py-2 px-3 rounded-lg transition-colors cursor-pointer"
          >
            Help
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiveCampaign;

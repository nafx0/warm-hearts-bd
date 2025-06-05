import React, { useEffect, useState } from "react";
import ActiveCampaign from "../components/ActiveCampaign";
import { toast } from "react-toastify";

const ActiveCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch("/data/campaignData.json")
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
      })
      .catch((error) => toast.error("Error loading campaign data:", error));
  }, []);

  return (
    <div className="bg-[#fff5f5] py-12 px-6 md:px-16">
      <h1 className="text-4xl md:text-5xl font-serif text-[#7c1d1d] mb-10 text-center">
        Active Donation Campaigns
      </h1>

      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {campaigns.map((campaign) => (
          <ActiveCampaign key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
};

export default ActiveCampaigns;
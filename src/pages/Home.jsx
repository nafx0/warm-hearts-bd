import ActiveCampaigns from "./ActiveCampaigns";
import Campaigns from "./Campaigns";
import Faq from "./Faq";
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-red-50 to-white">
      <Hero></Hero>
      <Campaigns></Campaigns>
      <ActiveCampaigns></ActiveCampaigns>
      <Faq></Faq>
    </div>
  );
}

import React from "react";
import { HandHeart, Users, Gift, Megaphone, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const HowToHelp = () => {
  const waysToHelp = [
    {
      title: "Donate Clothing",
      icon: <Gift className="w-6 h-6 text-amber-600" />,
      description:
        "Contribute warm clothing—sweaters, blankets, socks, and more. We ensure direct delivery to families in need through local partners.",
    },
    {
      title: "Volunteer Your Time",
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      description:
        "Join our mission on the ground—help sort, pack, and distribute essentials. Every hour makes a difference.",
    },
    {
      title: "Become a Local Partner",
      icon: <HandHeart className="w-6 h-6 text-purple-600" />,
      description:
        "Are you part of a school, business, or organization? Collaborate with us to host donation drives or awareness events.",
    },
    {
      title: "Spread the Word",
      icon: <Megaphone className="w-6 h-6 text-blue-600" />,
      description:
        "Use your voice on social media or in your community to raise awareness. The more people know, the more help reaches those who need it.",
    },
  ];

  return (
    <div className="bg-[#fff9f3] min-h-screen px-6 md:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[#3b2f1f] mb-4">
            How You Can Help
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Whether it’s a warm blanket or a moment of your time, your
            contribution matters. Join us in spreading warmth and kindness this
            winter.
          </p>
        </div>

        {/* Help Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {waysToHelp.map((way, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-100 p-3 rounded-full">{way.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition">
                  {way.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">{way.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-[#3b2f1f] mb-4">
            Ready to take action?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 items-center">
            <NavLink to="/donation">
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-4.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[220px]">
                Donate Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </NavLink>

            <NavLink to="/become-a-volunteer-today">
              <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-50 font-semibold py-4 px-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 min-w-[220px]">
                Become a Volunteer
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;

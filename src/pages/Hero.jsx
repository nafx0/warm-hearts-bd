import React from "react";
import { HeartHandshake, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden mt-10 md:mt-0"
      style={{
        backgroundImage:
          "url(https://cdn.gamma.app/zp368851fb7imtr/generated-images/cFr9Fw84yaffSCSkCHc3S.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20 sm:py-28 max-w-6xl">
        {/* Badge */}
        <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-2 rounded-full mb-6 shadow-md">
          <HeartHandshake className="w-5 h-5 mr-2" />
          <span className="font-semibold tracking-wide">
            Compassion in Action
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
            Warm Hearts
          </span>{" "}
          in Bangladesh
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl font-normal block mt-4">
            Winter Clothing Donation
          </span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          Connecting compassionate donors with communities in need, ensuring
          warmth and dignity through the harsh Bangladeshi winters.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
            onClick={() => navigate("/donation")}
              className="cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-4 px-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 min-w-[220px]"
              aria-label="Donate Now"
            >
              Donate Now
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
            onClick={() => navigate("/about-us")}
              className="cursor-pointer flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 min-w-[220px]"
              aria-label="Learn More"
            >
              Learn More
            </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: "45K+", label: "Volunteers" },
            { value: "120+", label: "Communities" },
            { value: "15M+", label: "Items Donated" },
            { value: "8", label: "Years Active" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20"
            >
              <div className="text-3xl font-bold text-amber-400">
                {stat.value}
              </div>
              <div className="text-white/85">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
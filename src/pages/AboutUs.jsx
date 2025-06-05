import React from 'react';
import { Heart, Users, HandHeart, Globe, ShieldCheck, BarChart2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white mt-15 md:mt-0">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full mb-6">
              <Heart className="w-5 h-5 mr-2" />
              <span className="font-medium">Compassion in Action</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Connecting <span className="text-red-600">Hearts</span>, Changing <span className="text-red-600">Lives</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              Warm Hearts is a community-driven platform where compassion meets action. 
              We connect generous donors with communities in need, creating a ripple effect of kindness 
              that transforms lives and builds stronger, more resilient neighborhoods.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => navigate("/how-to-help")} className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center">
                Join Our Mission
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button onClick={() => navigate("/become-a-volunteer-today")} className="cursor-pointer bg-white border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center">
                <HandHeart className="mr-2 w-5 h-5" />
                Volunteer
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-red-600 rounded-3xl h-96 w-full overflow-hidden shadow-2xl">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-500">
                <img src="https://www.impactfoundationbd.org/img/slider/slider-smiling-min.jpg" alt="" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 w-64">
              <div className="flex items-center mb-3">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">45K+</p>
                  <p className="text-gray-600">Volunteers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey of Compassion</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
              <div className="text-5xl font-bold text-red-600 mb-4">2015</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Spark</h3>
              <p className="text-gray-700">
                Founded by a group of friends who wanted to make a difference after witnessing the struggles of families 
                in their community during winter.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
              <div className="text-5xl font-bold text-red-600 mb-4">2018</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Growth</h3>
              <p className="text-gray-700">
                Expanded to 5 cities with over 10,000 volunteers. Launched our first digital platform to connect donors 
                with recipients directly.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
              <div className="text-5xl font-bold text-red-600 mb-4">2023</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Nationwide Impact</h3>
              <p className="text-gray-700">
                Now serving communities in all 50 states. Our platform has facilitated over $15M in donations and 
                helped more than 500,000 families.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These principles guide every decision we make and every action we take at Warm Hearts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Heart className="w-10 h-10 text-red-600" />, 
                title: "Compassion First", 
                desc: "We approach every situation with empathy, understanding, and kindness." 
              },
              { 
                icon: <Globe className="w-10 h-10 text-red-600" />, 
                title: "Community Focus", 
                desc: "We believe in empowering communities to support their own members." 
              },
              { 
                icon: <ShieldCheck className="w-10 h-10 text-red-600" />, 
                title: "Transparency", 
                desc: "Every donation is tracked and reported so you see exactly where your support goes." 
              },
              { 
                icon: <BarChart2 className="w-10 h-10 text-red-600" />, 
                title: "Impact Driven", 
                desc: "We measure success by the tangible difference we make in people's lives." 
              },
              { 
                icon: <Users className="w-10 h-10 text-red-600" />, 
                title: "Inclusivity", 
                desc: "We serve everyone in need regardless of background, belief, or circumstance." 
              },
              { 
                icon: <HandHeart className="w-10 h-10 text-red-600" />, 
                title: "Sustainable Change", 
                desc: "We focus on long-term solutions that create lasting improvements." 
              },
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-red-50 rounded-2xl border border-red-100 p-8 transition-all duration-300 hover:shadow-lg"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The passionate individuals driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "Founder & CEO" },
              { name: "Michael Chen", role: "Director of Operations" },
              { name: "Elena Rodriguez", role: "Community Outreach Lead" },
              { name: "David Thompson", role: "Technology Director" },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-48 h-48 mb-6 flex items-center justify-center text-gray-500">
                  Team Member
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-red-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-700">
                  {index === 0 && "Founded Warm Hearts after volunteering at a homeless shelter."}
                  {index === 1 && "Brings 15 years of nonprofit management experience."}
                  {index === 2 && "Connects us with communities across the country."}
                  {index === 3 && "Built our donation platform from the ground up."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl shadow-2xl p-10 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Community of Changemakers</h2>
              <p className="text-xl text-red-100 mb-10">
                Whether you donate, volunteer, or simply spread the word - you help create a warmer world.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button onClick={() => navigate("/become-a-volunteer-today")} className="cursor-pointer bg-white text-red-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-red-50 transition-colors duration-300">
                  Become a Volunteer
                </button>
                <button onClick={() => navigate("/donation")} className="cursor-pointer bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-white/10 transition-colors duration-300">
                  Make a Donation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
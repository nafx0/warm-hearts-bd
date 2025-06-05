const Campaigns = () => {
  return (
    <div className="bg-[#fff5f5] py-12 px-6 md:px-16 flex flex-col-reverse lg:flex-row items-center gap-12">
      {/* Left: Text + Stats */}
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-serif text-[#7c1d1d] mb-10">
          Making a Difference Together
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Stat Box 1 */}
          <div className="bg-white rounded-xl p-6 shadow text-center border border-red-100">
            <h3 className="text-4xl font-bold text-red-700">1.2M</h3>
            <p className="text-lg font-medium text-red-800 mt-2">
              Donations Last Year
            </p>
            <p className="text-sm text-gray-600 mt-1">
              A testament to collective generosity.
            </p>
          </div>

          {/* Stat Box 2 */}
          <div className="bg-white rounded-xl p-6 shadow text-center border border-red-100">
            <h3 className="text-4xl font-bold text-red-700">500K</h3>
            <p className="text-lg font-medium text-red-800 mt-2">
              People Helped
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Providing warmth and comfort.
            </p>
          </div>

          {/* Stat Box 3 */}
          <div className="bg-white rounded-xl p-6 shadow text-center border border-red-100 md:col-span-2">
            <h3 className="text-4xl font-bold text-red-700">$3.5M</h3>
            <p className="text-lg font-medium text-red-800 mt-2">
              Total Value
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Impact of combined contributions.
            </p>
          </div>
        </div>

        <p className="text-red-900 text-base md:text-lg leading-relaxed">
          Our commitment ensures every donation reaches those most vulnerable to
          winter's chill. Join us in our mission to create a warmer Bangladesh.
        </p>
      </div>

      {/* Right: Image */}
      <div className="flex-1">
        <img
          src="https://cdn.gamma.app/zp368851fb7imtr/generated-images/k7692vyHoor2gYbxfi7qp.jpg"
          alt="Donor family illustration"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Campaigns;
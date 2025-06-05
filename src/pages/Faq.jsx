import React from "react";

const Faq = () => {
  return (
    <div className="bg-[#fff9f3] py-12 px-6 md:px-16">
      <h2 className="text-4xl md:text-5xl font-serif text-[#3b2f1f] mb-10">
        Beyond Monetary Donations
      </h2>

      <div className="space-y-4">
        {/* FAQ 1 */}
        <div className="collapse collapse-plus bg-white border border-rose-100 rounded-xl shadow-sm">
          <input type="radio" name="faq" defaultChecked />
          <div className="collapse-title font-semibold text-[#5c1b1b] text-base md:text-lg">
            Where can I drop off physical clothing donations?
          </div>
          <div className="collapse-content text-sm text-gray-700 leading-relaxed">
            Our main drop-off centers are located at:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Dhaka Central:</strong> 123 Mirpur Road, Dhaka. Open
                Mon-Sat, 9 AM – 5 PM.
              </li>
              <li>
                <strong>Chittagong North:</strong> 456 CDA Avenue, Chittagong.
                Open Tue-Sun, 10 AM – 4 PM.
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="collapse collapse-plus bg-white border border-rose-100 rounded-xl shadow-sm">
          <input type="radio" name="faq" />
          <div className="collapse-title font-semibold text-[#5c1b1b] text-base md:text-lg">
            What types of clothing are most needed?
          </div>
          <div className="collapse-content text-sm text-gray-700 leading-relaxed">
            <ul className="list-disc list-inside space-y-1">
              <li>
                New or gently used sweaters, jackets, and thermal wear for all
                ages.
              </li>
              <li>Warm blankets and quilts.</li>
              <li>Socks, gloves, and caps.</li>
              <li>Children’s winter wear is in high demand.</li>
            </ul>
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="collapse collapse-plus bg-white border border-rose-100 rounded-xl shadow-sm">
          <input type="radio" name="faq" />
          <div className="collapse-title font-semibold text-[#5c1b1b] text-base md:text-lg">
            How can I volunteer my time?
          </div>
          <div className="collapse-content text-sm text-gray-700 leading-relaxed">
            We welcome volunteers for sorting donations, packing kits, and
            distribution drives. <br />
            Please contact us at{" "}
            <a
              className="text-rose-600 font-medium underline"
              href="mailto:volunteer@warmhearts.org"
            >
              volunteer@warmhearts.org
            </a>{" "}
            or call{" "}
            <span className="text-rose-600 font-medium">+880-XXXX-XXXX</span>{" "}
            for opportunities.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
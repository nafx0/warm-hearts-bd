import { Mail, MapPin, Phone } from 'lucide-react';
import iconImg from '../assets/icons/titleIcon.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-800 to-red-600 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="p-2 mr-3">
                <img src={iconImg} alt="" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-red-100 hover:text-white transition-colors flex items-center"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-red-100 hover:text-white transition-colors flex items-center"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="campaigns"
                  className="text-red-100 hover:text-white transition-colors flex items-center"
                >
                  Campaigns
                </Link>
              </li>
              <li>
                <Link
                  to="success-stories"
                  className="text-red-100 hover:text-white transition-colors flex items-center"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/become-a-volunteer-today"
                  className="text-red-100 hover:text-white transition-colors flex items-center"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  to="contacts"
                  className="text-red-100 hover:text-white transition-colors flex items-center"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-red-200 mt-1 mr-3 flex-shrink-0" />
                <span className="text-red-100">
                  123 Mirpur Road, Dhaka.
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-red-200 mr-3" />
                <span className="text-red-100">+880-XXXX-XXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-red-200 mr-3" />
                <span className="text-red-100">volunteer@warmhearts.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">
              Stay Updated
            </h3>
            <p className="text-red-100 mb-4">
              Subscribe to our newsletter to receive updates on our latest
              campaigns and initiatives.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-white text-red-700 font-semibold py-3 px-6 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-red-100 text-sm">
            &copy; {new Date().getFullYear()} Warm Hearts Foundation. All rights
            reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-red-100 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-red-100 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-red-100 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              href="#"
              className="text-red-100 hover:text-white text-sm transition-colors"
            >
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useRouteError, Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8 md:p-12 flex flex-col items-center text-center">
          {/* Decorative elements */}
          <div className="relative mb-8">
            <div className="absolute -inset-4 bg-red-100 rounded-full opacity-60 animate-pulse"></div>
            <div className="relative w-24 h-24 rounded-full bg-red-500 flex items-center justify-center">
              <span className="text-5xl font-bold text-white">!</span>
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found.
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-md">
            It looks like you've ventured off the beaten path. The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mb-8"></div>
          
          {/* Home button */}
          <Link 
            to="/"
            className="group flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white font-semibold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Home className="w-5 h-5 group-hover:animate-bounce" />
            Go to Homepage
          </Link>
          
          {/* Error details (for developers) */}
          <div className="mt-12 p-4 bg-gray-50 rounded-lg w-full max-w-md text-left">
            <p className="text-sm text-gray-500 mb-2">Developer details:</p>
            <p className="text-red-500 font-mono text-sm">
              <i>{error.statusText || error.message}</i>
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>Need help? Contact our support team at support@example.com</p>
      </div>
    </div>
  );
}
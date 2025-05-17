
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "@/providers/ThemeProvider";

const NotFound = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className={`text-xl mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Oops! Page not found</p>
        <a href="/" className={`${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-700'} underline`}>
          Return to Home
        </a>
      </div>
      
      {/* Dark mode background effects */}
      {isDark && (
        <div className="fixed inset-0 -z-10 opacity-70 pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-[10%] right-[10%] w-64 h-64 rounded-full bg-blue-500/5 blur-3xl animate-float"></div>
        </div>
      )}
    </div>
  );
};

export default NotFound;

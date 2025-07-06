//() corrected)without logout
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { User, Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-lg">L</span>
//             </div>
//             <span className="text-xl font-bold text-gray-900">Local Service Market</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link 
//               to="/" 
//               className={`transition-colors ${isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
//             >
//               Home
//             </Link>
//             <Link 
//               to="/services" 
//               className={`transition-colors ${isActive('/services') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
//             >
//               Services
//             </Link>
//             <Link 
//               to="/dashboard" 
//               className={`transition-colors ${isActive('/dashboard') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
//             >
//               Dashboard
//             </Link>
//             <Link 
//               to="/login" 
//               className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1"
//             >
//               <User size={18} />
//               <span>Login</span>
//             </Link>
//             <Link 
//               to="/register" 
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               Register
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-700 hover:text-blue-600 transition-colors"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t border-gray-200">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <Link 
//                 to="/" 
//                 className={`block px-3 py-2 rounded-md transition-colors ${isActive('/') ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Home
//               </Link>
//               <Link 
//                 to="/services" 
//                 className={`block px-3 py-2 rounded-md transition-colors ${isActive('/services') ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Services
//               </Link>
//               <Link 
//                 to="/dashboard" 
//                 className={`block px-3 py-2 rounded-md transition-colors ${isActive('/dashboard') ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Dashboard
//               </Link>
//               <Link 
//                 to="/login" 
//                 className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Login
//               </Link>
//               <Link 
//                 to="/register" 
//                 className="block px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Register
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



//check(with logout)
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //loged in user name
  const name = localStorage.getItem('userName') || localStorage.getItem('providerName');

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('providerName');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Local Service Market</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${isActive('/services') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Services
            </Link>
            <Link 
              to="/dashboard" 
              className={`transition-colors ${isActive('/dashboard') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Dashboard
            </Link>

            {isLoggedIn ? (
              // <div className="flex items-center gap-3">
              //   <User size={18} className="text-green-600" />
              //   <button
              //     onClick={handleLogout}
              //     className="text-red-600 hover:text-red-700 font-medium"
              //   >
              //     Logout
              //   </button>
              // </div>
              //commented for adding extra user name functionality
              <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-green-700 font-medium">
                <User size={18} />
                <span>{name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Logout
              </button>
            </div>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1"
                >
                  <User size={18} />
                  <span>Login</span>
                </Link>
                <Link 
                  to="/register" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-2 rounded-md transition-colors ${isActive('/') ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`block px-3 py-2 rounded-md transition-colors ${isActive('/services') ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/dashboard" 
                className={`block px-3 py-2 rounded-md transition-colors ${isActive('/dashboard') ? 'text-blue-600 bg-blue-50 font-semibold' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>

              {isLoggedIn ? (
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }} 
                  className="block w-full text-left px-3 py-2 text-red-600 hover:text-red-700 transition-colors"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="block px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

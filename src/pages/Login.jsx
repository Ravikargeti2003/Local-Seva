
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { User } from 'lucide-react';
// import axios from 'axios';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     userType: 'customer'
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit =async (e) => {
//     e.preventDefault();
//   //   console.log('Login attempt:', formData);
//   //   // Handle login logic here
//   // };
//    const url = formData.userType === 'provider'
//       ? 'http://localhost:5000/api/provider/login'
//       : 'http://localhost:5000/api/customer/login'; // use when customer login ready

//     try {
//       const res = await axios.post(url, {
//         email: formData.email,
//         password: formData.password
//       });

//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('providerName', res.data.provider.name);

//       if (formData.userType === 'provider') {
//         window.location.href = '/providerdashboard';
//       } else {
//         alert('Login successful for customer (redirect logic pending).');
//       }
//     } catch (err) {
//       alert(err.response?.data?.error || 'Login failed.');
//     }
//   };


//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       <div className="py-16">
//         <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
//           <div className="text-center mb-8">
//             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <User className="text-blue-600" size={32} />
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
//             <p className="text-gray-600 mt-2">Sign in to your account</p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* User Type Selection */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 I am a:
//               </label>
//               <div className="grid grid-cols-3 gap-2">
//                 <button
//                   type="button"
//                   onClick={() => setFormData(prev => ({ ...prev, userType: 'customer' }))}
//                   className={`py-2 px-3 text-sm rounded-md border transition-colors ${
//                     formData.userType === 'customer' 
//                       ? 'bg-blue-50 border-blue-500 text-blue-700' 
//                       : 'border-gray-300'
//                   }`}
//                 >
//                   Customer
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setFormData(prev => ({ ...prev, userType: 'provider' }))}
//                   className={`py-2 px-3 text-sm rounded-md border transition-colors ${
//                     formData.userType === 'provider' 
//                       ? 'bg-blue-50 border-blue-500 text-blue-700' 
//                       : 'border-gray-300'
//                   }`}
//                 >
//                   Provider
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setFormData(prev => ({ ...prev, userType: 'admin' }))}
//                   className={`py-2 px-3 text-sm rounded-md border transition-colors ${
//                     formData.userType === 'admin' 
//                       ? 'bg-blue-50 border-blue-500 text-blue-700' 
//                       : 'border-gray-300'
//                   }`}
//                 >
//                   Admin
//                 </button>
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
//             >
//               Sign In
//             </button>
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-gray-600">
//               Don't have an account?{' '}
//               <Link to="/register" className="text-blue-600 hover:underline">
//                 Sign up here
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Login;



//check 2(provider and user too)

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { User } from 'lucide-react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'customer'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url =
      formData.userType === 'provider'
        ? 'http://localhost:5000/api/provider/login'
        : 'http://localhost:5000/api/user/login';

    try {
      const res = await axios.post(url, {
        email: formData.email,
        password: formData.password
      });

      const token = res.data.token;
      const name = formData.userType === 'provider'
        ? res.data.provider?.name
        : res.data.user?.name;

      localStorage.setItem('token', token);
      localStorage.setItem('userName', name);

      if (formData.userType === 'provider') {
        window.location.href = '/providerdashboard';
      } else {
        window.location.href = '/'; // your main user interface
      }
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="py-16">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="text-blue-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-600 mt-2">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                I am a:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['customer', 'provider', 'admin'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, userType: type }))}
                    className={`py-2 px-3 text-sm rounded-md border transition-colors ${
                      formData.userType === type
                        ? 'bg-blue-50 border-blue-500 text-blue-700'
                        : 'border-gray-300'
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:underline">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;

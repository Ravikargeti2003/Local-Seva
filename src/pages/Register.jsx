
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { UserPlus, Upload } from 'lucide-react';
// import axios from 'axios';

// const Register = () => {
//   const [userType, setUserType] = useState('customer');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',
//     address: '',
//     // Provider specific fields
//     serviceType: '',
//     experience: '',
//     shopPhoto: null,
//     personalPhoto: null,
//     aadharProof: null,
//     description: ''
//   });

//   const serviceTypes = [
//     'Electrician',
//     'Plumber',
//     'Tutor',
//     'RO Filter Repair',
//     'AC Repair',
//     'Cleaning Services',
//     'Carpenter',
//     'Painter',
//     'Other'
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: files[0]
//     }));
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
    
//   //   console.log('Registration data:', { userType, ...formData });
//   //   // Handle registration logic here
//   // };
//   const url = userType === 'provider'
//       ? 'http://localhost:5000/api/provider/register'
//       : 'http://localhost:5000/api/customer/register'; // use when customer backend ready

//     try {
//       const dataToSend = { ...formData, userType };
//       const form = new FormData();
//       for (const key in dataToSend) {
//         if (dataToSend[key]) {
//           form.append(key, dataToSend[key]);
//         }
//       }

//       await axios.post(url, form);
//       alert('Registration successful! Now sign in.');
//     } catch (err) {
//       alert(err.response?.data?.error || 'Registration failed.');
//     }
//   };


//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       <div className="py-16">
//         <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
//           <div className="text-center mb-8">
//             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <UserPlus className="text-green-600" size={32} />
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
//             <p className="text-gray-600 mt-2">Join our local service marketplace</p>
//           </div>

//           {/* User Type Selection */}
//           <div className="mb-8">
//             <label className="block text-sm font-medium text-gray-700 mb-4">
//               I want to register as:
//             </label>
//             <div className="grid grid-cols-2 gap-4">
//               <button
//                 type="button"
//                 onClick={() => setUserType('customer')}
//                 className={`p-4 rounded-lg border-2 transition-colors ${
//                   userType === 'customer' 
//                     ? 'border-blue-500 bg-blue-50 text-blue-700' 
//                     : 'border-gray-300 hover:border-gray-400'
//                 }`}
//               >
//                 <div className="text-center">
//                   <div className="text-2xl mb-2">👤</div>
//                   <div className="font-semibold">Customer</div>
//                   <div className="text-sm text-gray-600">Find and book services</div>
//                 </div>
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setUserType('provider')}
//                 className={`p-4 rounded-lg border-2 transition-colors ${
//                   userType === 'provider' 
//                     ? 'border-green-500 bg-green-50 text-green-700' 
//                     : 'border-gray-300 hover:border-gray-400'
//                 }`}
//               >
//                 <div className="text-center">
//                   <div className="text-2xl mb-2">🔧</div>
//                   <div className="font-semibold">Service Provider</div>
//                   <div className="text-sm text-gray-600">Offer your services</div>
//                 </div>
//               </button>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Basic Information */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
//                 Address
//               </label>
//               <textarea
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 rows={3}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             {/* Provider Specific Fields */}
//             {userType === 'provider' && (
//               <div className="border-t pt-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Provider Information</h3>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
//                       Service Type
//                     </label>
//                     <select
//                       id="serviceType"
//                       name="serviceType"
//                       value={formData.serviceType}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     >
//                       <option value="">Select a service</option>
//                       {serviceTypes.map(service => (
//                         <option key={service} value={service}>{service}</option>
//                       ))}
//                     </select>
//                   </div>

//                   <div>
//                     <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
//                       Years of Experience
//                     </label>
//                     <input
//                       type="number"
//                       id="experience"
//                       name="experience"
//                       value={formData.experience}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
//                     Service Description
//                   </label>
//                   <textarea
//                     id="description"
//                     name="description"
//                     value={formData.description}
//                     onChange={handleInputChange}
//                     rows={4}
//                     placeholder="Describe your services, specializations, and what sets you apart..."
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>

//                 {/* File Uploads */}
//                 <div className="space-y-4">
//                   <h4 className="font-medium text-gray-900">Required Documents</h4>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Personal Photo
//                       </label>
//                       <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
//                         <Upload className="mx-auto text-gray-400 mb-2" size={24} />
//                         <input
//                           type="file"
//                           name="personalPhoto"
//                           onChange={handleFileChange}
//                           accept="image/*"
//                           className="hidden"
//                           id="personalPhoto"
//                           // required
//                         />
//                         <label htmlFor="personalPhoto" className="cursor-pointer text-sm text-blue-600 hover:underline">
//                           Choose File
//                         </label>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Shop Photo (if applicable)
//                       </label>
//                       <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
//                         <Upload className="mx-auto text-gray-400 mb-2" size={24} />
//                         <input
//                           type="file"
//                           name="shopPhoto"
//                           onChange={handleFileChange}
//                           accept="image/*"
//                           className="hidden"
//                           id="shopPhoto"
//                         />
//                         <label htmlFor="shopPhoto" className="cursor-pointer text-sm text-blue-600 hover:underline">
//                           Choose File
//                         </label>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Aadhar Proof
//                       </label>
//                       <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
//                         <Upload className="mx-auto text-gray-400 mb-2" size={24} />
//                         <input
//                           type="file"
//                           name="aadharProof"
//                           onChange={handleFileChange}
//                           accept="image/*,.pdf"
//                           className="hidden"
//                           id="aadharProof"
//                           // required
//                         />
//                         <label htmlFor="aadharProof" className="cursor-pointer text-sm text-blue-600 hover:underline">
//                           Choose File
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             <button
//               type="submit"
//               className={`w-full py-3 px-4 rounded-md font-semibold transition-colors ${
//                 userType === 'customer' 
//                   ? 'bg-blue-600 hover:bg-blue-700 text-white'
//                   : 'bg-green-600 hover:bg-green-700 text-white'
//               }`}
//             >
//               Create Account
//             </button>
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-gray-600">
//               Already have an account?{' '}
//               <Link to="/login" className="text-blue-600 hover:underline">
//                 Sign in here
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Register;




//check2(including provider and user also)
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { UserPlus, Upload } from 'lucide-react';
// import axios from 'axios';

// const Register = () => {
//   const [userType, setUserType] = useState('customer');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',
//     address: '',
//     serviceType: '',
//     experience: '',
//     shopPhoto: null,
//     personalPhoto: null,
//     aadharProof: null,
//     description: ''
//   });

//   const serviceTypes = [
//     'Electrician',
//     'Plumber',
//     'Tutor',
//     'RO Filter Repair',
//     'AC Repair',
//     'Cleaning Services',
//     'Carpenter',
//     'Painter',
//     'Other'
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData(prev => ({ ...prev, [name]: files[0] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const url = userType === 'provider'
//       ? 'http://localhost:5000/api/provider/register'
//       : 'http://localhost:5000/api/user/register';

//     try {
//       if (userType === 'provider') {
//         const form = new FormData();
//         for (const key in formData) {
//           if (formData[key]) {
//             form.append(key, formData[key]);
//           }
//         }
//         await axios.post(url, form);
//       } else {
//         const userPayload = {
//           name: formData.name,
//           email: formData.email,
//           password: formData.password,
//           phone: formData.phone,
//           address: formData.address
//         };
//         await axios.post(url, userPayload, {
//           headers: { 'Content-Type': 'application/json' }
//         });
//       }

//       alert('Registration successful! Now sign in.');
//       window.location.href = '/login';
//     } catch (err) {
//       alert(err.response?.data?.error || 'Registration failed.');
//     }
//   };

//   //latest one

// //   const handleSubmit = async (e) => {
// //   e.preventDefault();
// //   // const baseUrl = import.meta.env.VITE_API_BASE_URL;
// //   const baseUrl = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, ''); // remove trailing slash if present

// //   const url = userType === 'provider'
// //     ? `${baseUrl}/provider/register`
// //     : `${baseUrl}/user/register`;

// //   try {
// //     if (userType === 'provider') {
// //       const form = new FormData();
// //       for (const key in formData) {
// //         if (formData[key]) {
// //           form.append(key, formData[key]);
// //         }
// //       }
// //       await axios.post(url, form);
// //     } else {
// //       const userPayload = {
// //         name: formData.name,
// //         email: formData.email,
// //         password: formData.password,
// //         phone: formData.phone,
// //         address: formData.address
// //       };
// //       await axios.post(url, userPayload, {
// //         headers: { 'Content-Type': 'application/json' }
// //       });
// //     }

// //     alert('Registration successful! Now sign in.');
// //     window.location.href = '/login';
// //   } catch (err) {
// //     alert(err.response?.data?.error || 'Registration failed.');
// //   }
// // };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       <div className="py-16">
//         <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
//           <div className="text-center mb-8">
//             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <UserPlus className="text-green-600" size={32} />
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
//             <p className="text-gray-600 mt-2">Join our local service marketplace</p>
//           </div>

//           {/* User Type Buttons */}
//           <div className="mb-8">
//             <label className="block text-sm font-medium text-gray-700 mb-4">
//               I want to register as:
//             </label>
//             <div className="grid grid-cols-2 gap-4">
//               <button
//                 type="button"
//                 onClick={() => setUserType('customer')}
//                 className={`p-4 rounded-lg border-2 transition-colors ${
//                   userType === 'customer'
//                     ? 'border-blue-500 bg-blue-50 text-blue-700'
//                     : 'border-gray-300 hover:border-gray-400'
//                 }`}
//               >
//                 <div className="text-center">
//                   <div className="text-2xl mb-2">👤</div>
//                   <div className="font-semibold">Customer</div>
//                   <div className="text-sm text-gray-600">Find and book services</div>
//                 </div>
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setUserType('provider')}
//                 className={`p-4 rounded-lg border-2 transition-colors ${
//                   userType === 'provider'
//                     ? 'border-green-500 bg-green-50 text-green-700'
//                     : 'border-gray-300 hover:border-gray-400'
//                 }`}
//               >
//                 <div className="text-center">
//                   <div className="text-2xl mb-2">🔧</div>
//                   <div className="font-semibold">Service Provider</div>
//                   <div className="text-sm text-gray-600">Offer your services</div>
//                 </div>
//               </button>
//             </div>
//           </div>

//           {/* Registration Form */}
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <InputField id="name" label="Full Name" value={formData.name} onChange={handleInputChange} />
//               <InputField id="email" label="Email Address" value={formData.email} onChange={handleInputChange} type="email" />
//               <InputField id="password" label="Password" value={formData.password} onChange={handleInputChange} type="password" />
//               <InputField id="phone" label="Phone Number" value={formData.phone} onChange={handleInputChange} type="tel" />
//             </div>

//             <div>
//               <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
//                 Address
//               </label>
//               <textarea
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 rows={3}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             {/* Provider Specific Fields */}
//             {userType === 'provider' && (
//               <div className="border-t pt-6">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Provider Information</h3>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
//                       Service Type
//                     </label>
//                     <select
//                       id="serviceType"
//                       name="serviceType"
//                       value={formData.serviceType}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     >
//                       <option value="">Select a service</option>
//                       {serviceTypes.map(service => (
//                         <option key={service} value={service}>{service}</option>
//                       ))}
//                     </select>
//                   </div>

//                   <InputField
//                     id="experience"
//                     label="Years of Experience"
//                     value={formData.experience}
//                     onChange={handleInputChange}
//                     type="number"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
//                     Service Description
//                   </label>
//                   <textarea
//                     id="description"
//                     name="description"
//                     value={formData.description}
//                     onChange={handleInputChange}
//                     rows={4}
//                     placeholder="Describe your services..."
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>

//                 {/* File Uploads */}
//                 <div className="space-y-4">
//                   <h4 className="font-medium text-gray-900">Required Documents</h4>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     {['personalPhoto', 'shopPhoto', 'aadharProof'].map(file => (
//                       <div key={file}>
//                         <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
//                           {file.replace(/([A-Z])/g, ' $1')}
//                         </label>
//                         <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
//                           <Upload className="mx-auto text-gray-400 mb-2" size={24} />
//                           <input
//                             type="file"
//                             name={file}
//                             onChange={handleFileChange}
//                             accept={file === 'aadharProof' ? 'image/*,.pdf' : 'image/*'}
//                             className="hidden"
//                             id={file}
//                           />
//                           <label htmlFor={file} className="cursor-pointer text-sm text-blue-600 hover:underline">
//                             Choose File
//                           </label>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             <button
//               type="submit"
//               className={`w-full py-3 px-4 rounded-md font-semibold transition-colors ${
//                 userType === 'customer'
//                   ? 'bg-blue-600 hover:bg-blue-700 text-white'
//                   : 'bg-green-600 hover:bg-green-700 text-white'
//               }`}
//             >
//               Create Account
//             </button>
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-gray-600">
//               Already have an account?{' '}
//               <Link to="/login" className="text-blue-600 hover:underline">
//                 Sign in here
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// // Helper input component
// const InputField = ({ id, label, value, onChange, type = 'text' }) => (
//   <div>
//     <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
//     <input
//       type={type}
//       id={id}
//       name={id}
//       value={value}
//       onChange={onChange}
//       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//       required
//     />
//   </div>
// );

// export default Register;




//check above fine this check for mobile
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { UserPlus, Upload } from 'lucide-react';
import axios from 'axios';

const Register = () => {
  const [userType, setUserType] = useState('customer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    serviceType: '',
    experience: '',
    shopPhoto: null,
    personalPhoto: null,
    aadharProof: null,
    description: ''
  });

  const serviceTypes = [
    'Electrician',
    'Plumber',
    'Tutor',
    'RO Filter Repair',
    'AC Repair',
    'Cleaning Services',
    'Carpenter',
    'Painter',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Get base URL from environment variables, fallback to localhost for development
    const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
    const cleanBaseUrl = baseUrl.replace(/\/$/, ''); // remove trailing slash if present

    const url = userType === 'provider'
      ? `${cleanBaseUrl}/provider/register`
      : `${cleanBaseUrl}/user/register`;

    try {
      if (userType === 'provider') {
        const form = new FormData();
        for (const key in formData) {
          if (formData[key]) {
            form.append(key, formData[key]);
          }
        }
        await axios.post(url, form);
      } else {
        const userPayload = {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          address: formData.address
        };
        await axios.post(url, userPayload, {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      alert('Registration successful! Now sign in.');
      window.location.href = '/login';
    } catch (err) {
      console.error('Registration error:', err);
      alert(err.response?.data?.error || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserPlus className="text-green-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
            <p className="text-gray-600 mt-2">Join our local service marketplace</p>
          </div>

          {/* User Type Buttons */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              I want to register as:
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setUserType('customer')}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  userType === 'customer'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">👤</div>
                  <div className="font-semibold">Customer</div>
                  <div className="text-sm text-gray-600">Find and book services</div>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setUserType('provider')}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  userType === 'provider'
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">🔧</div>
                  <div className="font-semibold">Service Provider</div>
                  <div className="text-sm text-gray-600">Offer your services</div>
                </div>
              </button>
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField id="name" label="Full Name" value={formData.name} onChange={handleInputChange} />
              <InputField id="email" label="Email Address" value={formData.email} onChange={handleInputChange} type="email" />
              <InputField id="password" label="Password" value={formData.password} onChange={handleInputChange} type="password" />
              <InputField id="phone" label="Phone Number" value={formData.phone} onChange={handleInputChange} type="tel" />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Provider Specific Fields */}
            {userType === 'provider' && (
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Provider Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select a service</option>
                      {serviceTypes.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <InputField
                    id="experience"
                    label="Years of Experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    type="number"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describe your services..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* File Uploads */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Required Documents</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['personalPhoto', 'shopPhoto', 'aadharProof'].map(file => (
                      <div key={file}>
                        <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                          {file.replace(/([A-Z])/g, ' $1')}
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                          <Upload className="mx-auto text-gray-400 mb-2" size={24} />
                          <input
                            type="file"
                            name={file}
                            onChange={handleFileChange}
                            accept={file === 'aadharProof' ? 'image/*,.pdf' : 'image/*'}
                            className="hidden"
                            id={file}
                          />
                          <label htmlFor={file} className="cursor-pointer text-sm text-blue-600 hover:underline">
                            Choose File
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-md font-semibold transition-colors ${
                userType === 'customer'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:underline">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

// Helper input component
const InputField = ({ id, label, value, onChange, type = 'text' }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
  </div>
);

export default Register;
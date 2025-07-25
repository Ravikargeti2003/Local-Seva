
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { Calendar, Clock, MapPin, User, Phone, CreditCard } from 'lucide-react';

// const BookingForm = () => {
//   const [formData, setFormData] = useState({
//     serviceType: '',
//     providerName: '',
//     date: '',
//     time: '',
//     duration: '1',
//     address: '',
//     phone: '',
//     description: '',
//     urgency: 'normal',
//     paymentMethod: 'cash'
//   });

//   const [selectedProvider, setSelectedProvider] = useState(null);

//   const serviceTypes = [
//     'Electrician',
//     'Plumber',
//     'Tutor',
//     'RO Filter Repair',
//     'AC Repair',
//     'Cleaning Services',
//     'Carpenter',
//     'Painter'
//   ];

//   const timeSlots = [
//     '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
//     '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
//     '05:00 PM', '06:00 PM', '07:00 PM'
//   ];

//   const mockProviders = [
//     { id: 1, name: 'Rajesh Kumar', rating: 4.8, price: '₹300-500/hour', availability: 'Available Today' },
//     { id: 2, name: 'Amit Sharma', rating: 4.6, price: '₹250-400/hour', availability: 'Available Tomorrow' },
//     { id: 3, name: 'Priya Singh', rating: 4.9, price: '₹500-800/hour', availability: 'Available Now' }
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Booking submitted:', formData);
//     // Handle booking submission
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       <div className="py-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white rounded-lg shadow-lg p-8">
//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-bold text-gray-900">Book a Service</h2>
//               <p className="text-gray-600 mt-2">Fill in the details to book your service</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-8">
//               {/* Service Selection */}
//               <div className="border-b border-gray-200 pb-8">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                   <User className="mr-2" size={20} />
//                   Service Details
//                 </h3>
                
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
//                     <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
//                       Urgency Level
//                     </label>
//                     <select
//                       id="urgency"
//                       name="urgency"
//                       value={formData.urgency}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     >
//                       <option value="normal">Normal</option>
//                       <option value="urgent">Urgent</option>
//                       <option value="emergency">Emergency</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
//                     Problem Description
//                   </label>
//                   <textarea
//                     id="description"
//                     name="description"
//                     value={formData.description}
//                     onChange={handleInputChange}
//                     rows={4}
//                     placeholder="Describe the issue or service you need..."
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Provider Selection */}
//               {formData.serviceType && (
//                 <div className="border-b border-gray-200 pb-8">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Provider</h3>
//                   <div className="grid grid-cols-1 gap-4">
//                     {mockProviders.map(provider => (
//                       <div
//                         key={provider.id}
//                         className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
//                           selectedProvider?.id === provider.id
//                             ? 'border-blue-500 bg-blue-50'
//                             : 'border-gray-200 hover:border-gray-300'
//                         }`}
//                         onClick={() => setSelectedProvider(provider)}
//                       >
//                         <div className="flex justify-between items-center">
//                           <div>
//                             <h4 className="font-semibold text-gray-900">{provider.name}</h4>
//                             <p className="text-sm text-gray-600">Rating: {provider.rating} ⭐</p>
//                             <p className="text-sm text-gray-600">{provider.availability}</p>
//                           </div>
//                           <div className="text-right">
//                             <p className="font-medium text-gray-900">{provider.price}</p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Scheduling */}
//               <div className="border-b border-gray-200 pb-8">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                   <Calendar className="mr-2" size={20} />
//                   Schedule Service
//                 </h3>
                
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div>
//                     <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
//                       Preferred Date
//                     </label>
//                     <input
//                       type="date"
//                       id="date"
//                       name="date"
//                       value={formData.date}
//                       onChange={handleInputChange}
//                       min={new Date().toISOString().split('T')[0]}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
//                       Preferred Time
//                     </label>
//                     <select
//                       id="time"
//                       name="time"
//                       value={formData.time}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     >
//                       <option value="">Select time</option>
//                       {timeSlots.map(time => (
//                         <option key={time} value={time}>{time}</option>
//                       ))}
//                     </select>
//                   </div>

//                   <div>
//                     <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
//                       Expected Duration (hours)
//                     </label>
//                     <select
//                       id="duration"
//                       name="duration"
//                       value={formData.duration}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     >
//                       <option value="1">1 hour</option>
//                       <option value="2">2 hours</option>
//                       <option value="3">3 hours</option>
//                       <option value="4">4 hours</option>
//                       <option value="more">More than 4 hours</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Contact Information */}
//               <div className="border-b border-gray-200 pb-8">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                   <MapPin className="mr-2" size={20} />
//                   Contact & Location
//                 </h3>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
//                       Service Address
//                     </label>
//                     <textarea
//                       id="address"
//                       name="address"
//                       value={formData.address}
//                       onChange={handleInputChange}
//                       rows={3}
//                       placeholder="Enter complete address where service is needed"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Payment Method */}
//               <div className="border-b border-gray-200 pb-8">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                   <CreditCard className="mr-2" size={20} />
//                   Payment Method
//                 </h3>
                
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div>
//                     <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
//                       <input
//                         type="radio"
//                         name="paymentMethod"
//                         value="cash"
//                         checked={formData.paymentMethod === 'cash'}
//                         onChange={handleInputChange}
//                         className="mr-3"
//                       />
//                       <div>
//                         <div className="font-medium">Cash on Service</div>
//                         <div className="text-sm text-gray-600">Pay after service completion</div>
//                       </div>
//                     </label>
//                   </div>

//                   <div>
//                     <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
//                       <input
//                         type="radio"
//                         name="paymentMethod"
//                         value="online"
//                         checked={formData.paymentMethod === 'online'}
//                         onChange={handleInputChange}
//                         className="mr-3"
//                       />
//                       <div>
//                         <div className="font-medium">Online Payment</div>
//                         <div className="text-sm text-gray-600">Pay now with card/UPI</div>
//                       </div>
//                     </label>
//                   </div>

//                   <div>
//                     <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
//                       <input
//                         type="radio"
//                         name="paymentMethod"
//                         value="advance"
//                         checked={formData.paymentMethod === 'advance'}
//                         onChange={handleInputChange}
//                         className="mr-3"
//                       />
//                       <div>
//                         <div className="font-medium">Advance Payment</div>
//                         <div className="text-sm text-gray-600">Pay 50% advance</div>
//                       </div>
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               {/* Submit Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-end">
//                 <Link
//                   to="/services"
//                   className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-center"
//                 >
//                   Back to Services
//                 </Link>
//                 <button
//                   type="submit"
//                   className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//                 >
//                   Submit Booking Request
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default BookingForm;



//check git
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { Calendar, Clock, MapPin, User, Phone, CreditCard } from 'lucide-react';
// import axios from 'axios';

// const BookingForm = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     serviceType: '',
//     providerName: '',
//     userId: '',
//     date: '',
//     time: '',
//     duration: '1',
//     address: '',
//     phone: '',
//     description: '',
//     urgency: 'normal',
//     paymentMethod: 'cash'
//   });

//   const [selectedProvider, setSelectedProvider] = useState(null);

//   useEffect(() => {
//     if (location.state) {
//       const { serviceData, userId } = location.state;
//       setFormData(prev => ({
//         ...prev,
//         serviceType: serviceData.serviceType || '',
//         providerName: serviceData.providerName || '',
//         userId: userId || ''
//       }));
//     }
//   }, [location.state]);

//   const serviceTypes = [
//     'Electrician',
//     'Plumber',
//     'Tutor',
//     'RO Filter Repair',
//     'AC Repair',
//     'Cleaning Services',
//     'Carpenter',
//     'Painter'
//   ];

//   const timeSlots = [
//     '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
//     '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
//     '05:00 PM', '06:00 PM', '07:00 PM'
//   ];

//   const mockProviders = [
//     { id: 1, name: 'Rajesh Kumar', rating: 4.8, price: '₹300-500/hour', availability: 'Available Today' },
//     { id: 2, name: 'Amit Sharma', rating: 4.6, price: '₹250-400/hour', availability: 'Available Tomorrow' },
//     { id: 3, name: 'Priya Singh', rating: 4.9, price: '₹500-800/hour', availability: 'Available Now' }
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const {
//       serviceType,
//       providerName,
//       userId,
//       date,
//       time,
//       duration,
//       address,
//       phone,
//       description,
//       urgency,
//       paymentMethod
//     } = formData;

//     if (!serviceType || !providerName || !userId) {
//       alert("Missing fields: user, provider, or service type");
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5000/api/requests/book', formData);
//       alert("Booking request submitted!");
//       navigate('/services');
//     } catch (err) {
//       console.error("Booking submission failed:", err);
//       alert("Failed to submit booking");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
//       <div className="py-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white rounded-lg shadow-lg p-8">
//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-bold text-gray-900">Book a Service</h2>
//               <p className="text-gray-600 mt-2">Fill in the details to book your service</p>
//             </div>
//             <form onSubmit={handleSubmit} className="space-y-8">
//               {/* ... (rest of your form remains unchanged) */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-end">
//                 <Link
//                   to="/services"
//                   className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-center"
//                 >
//                   Back to Services
//                 </Link>
//                 <button
//                   type="submit"
//                   className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//                 >
//                   Submit Booking Request
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default BookingForm;

// chk git 2

// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { Calendar, MapPin, User, CreditCard } from 'lucide-react';
// import axios from 'axios';

// const BookingForm = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     serviceType: '',
//     providerName: '',
//     userId: '',
//     date: '',
//     time: '',
//     duration: '1',
//     address: '',
//     phone: '',
//     description: '',
//     urgency: 'normal',
//     paymentMethod: 'cash',
//   });

//   const [selectedProvider, setSelectedProvider] = useState(null);

//   const serviceTypes = ['Electrician', 'Plumber', 'Tutor', 'RO Filter Repair', 'AC Repair', 'Cleaning Services', 'Carpenter', 'Painter'];
//   const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'];

//   const mockProviders = [
//     { id: 1, name: 'Rajesh Kumar', rating: 4.8, price: '₹300-500/hour', availability: 'Available Today' },
//     { id: 2, name: 'Amit Sharma', rating: 4.6, price: '₹250-400/hour', availability: 'Available Tomorrow' },
//     { id: 3, name: 'Priya Singh', rating: 4.9, price: '₹500-800/hour', availability: 'Available Now' },
//   ];

//   // ✅ Extract data passed via navigate('/booking', { state: { serviceData, userId } })
//   useEffect(() => {
//     if (location.state && location.state.serviceData && location.state.userId) {
//       const { category, providerName } = location.state.serviceData;
//       const userId = location.state.userId;

//       setFormData(prev => ({
//         ...prev,
//         serviceType: category,
//         providerName,
//         userId
//       }));
//     } else {
//       alert('Missing fields: user, provider, or service type');
//       navigate('/services');
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // ✅ Final booking submission logic
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!formData.serviceType || !formData.providerName || !formData.userId || !formData.date || !formData.time || !formData.phone || !formData.address) {
//       alert('Please fill all required fields');
//       return;
//     }

//     try {
//       const res = await axios.post('http://localhost:5000/api/requests/book', formData);
//       alert('Booking request sent successfully!');
//       navigate('/services');
//     } catch (err) {
//       console.error('Booking submission failed:', err);
//       alert('Failed to send request');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
//       <div className="py-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white rounded-lg shadow-lg p-8">
//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-bold text-gray-900">Book a Service</h2>
//               <p className="text-gray-600 mt-2">Fill in the details to book your service</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-8">
//               {/* [Your full existing form UI remains unchanged here] */}

//               {/* ✅ Final submit buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-end">
//                 <Link
//                   to="/services"
//                   className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-center"
//                 >
//                   Back to Services
//                 </Link>
//                 <button
//                   type="submit"
//                   className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//                 >
//                   Submit Booking Request
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default BookingForm;



//check git 3(fine just deploy not working)

// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom'; // ✅
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { Calendar, Clock, MapPin, User, Phone, CreditCard } from 'lucide-react';

// const BookingForm = () => {
//   const location = useLocation(); // ✅
//   const navigate = useNavigate(); // ✅

//   const { serviceData, userId } = location.state || {}; // ✅ Extract from state

//   const [formData, setFormData] = useState({
//     serviceType: '',
//     providerName: '',
//     date: '',
//     time: '',
//     duration: '1',
//     address: '',
//     phone: '',
//     description: '',
//     urgency: 'normal',
//     paymentMethod: 'cash'
//   });

//   const [selectedProvider, setSelectedProvider] = useState(null);

//   // Pre-fill fields from passed state (once on mount)
//   useEffect(() => {
//     if (!serviceData || !userId) {
//       alert('Missing fields: user, provider, or service type');
//       navigate('/services');
//     } else {
//       setFormData(prev => ({
//         ...prev,
//         serviceType: serviceData.category || '',
//         providerName: serviceData.providerName || ''
//       }));
//     }
//   }, [serviceData, userId, navigate]);

//   const serviceTypes = [
//     'Electrician', 'Plumber', 'Tutor', 'RO Filter Repair',
//     'AC Repair', 'Cleaning Services', 'Carpenter', 'Painter'
//   ];

//   const timeSlots = [
//     '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
//     '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
//     '05:00 PM', '06:00 PM', '07:00 PM'
//   ];

//   const mockProviders = [
//     { id: 1, name: 'Rajesh Kumar', rating: 4.8, price: '₹300-500/hour', availability: 'Available Today' },
//     { id: 2, name: 'Amit Sharma', rating: 4.6, price: '₹250-400/hour', availability: 'Available Tomorrow' },
//     { id: 3, name: 'Priya Singh', rating: 4.9, price: '₹500-800/hour', availability: 'Available Now' },
//     { id: 4, name: 'Suresh Patel', rating: 4.9, price: '₹500-800/hour', availability: 'Available Now' }

//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   // Build final request object
//   //   const bookingData = {
//   //     ...formData,
//   //     userId,
//   //     providerName: selectedProvider ? selectedProvider.name : formData.providerName,
//   //     serviceType: formData.serviceType
//   //   };

//   //   try {
//   //     const response = await fetch('/api/requests/book', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json'
//   //       },
//   //       body: JSON.stringify(bookingData)
//   //     });

//   //     const result = await response.json();

//   //     if (response.ok) {
//   //       alert('Booking request sent successfully!');
//   //       navigate('/services');
//   //     } else {
//   //       alert(`Booking failed: ${result.message || 'Unknown error'}`);
//   //     }
//   //   } catch (err) {
//   //     console.error('Booking error:', err);
//   //     alert('An error occurred while booking. Please try again.');
//   //   }
//   // };

//   // Replace your existing handleSubmit function with this:
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   // Build final request object with all form data
//   const bookingData = {
//     serviceType: formData.serviceType,
//     providerId: formData.providerName,
//     userId: userId,
    
//     // Form fields
//     serviceName: serviceData?.serviceName || '',
//     date: formData.date,
//     time: formData.time,
//     duration: formData.duration,
//     address: formData.address,
//     phone: formData.phone,
//     description: formData.description,
//     urgency: formData.urgency,
//     paymentMethod: formData.paymentMethod,
    
//     // Service metadata
//     price: serviceData?.price || '',
//     rating: serviceData?.rating || '',
//     location: serviceData?.location || '',
//     experience: serviceData?.experience || '',
//     availability: serviceData?.availability || ''
//   };

//   console.log("📤 Sending booking data:", bookingData);

//   try {
//     const response = await fetch('http://localhost:5000/api/requests/book', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(bookingData)
//     });

//     const result = await response.json();

//     if (response.ok) {
//       alert('Booking request sent successfully!');
//       navigate('/services');
//     } else {
//       alert(`Booking failed: ${result.message || 'Unknown error'}`);
//     }
//   } catch (err) {
//     console.error('Booking error:', err);
//     alert('An error occurred while booking. Please try again.');
//   }
// };
//    return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       <div className="py-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="bg-white rounded-lg shadow-lg p-8">
//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-bold text-gray-900">Book a Service</h2>
//               <p className="text-gray-600 mt-2">Fill in the details to book your service</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-8">
//               {/* Service Selection */}
//               <div className="border-b border-gray-200 pb-8">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                   <User className="mr-2" size={20} />
//                   Service Details
//                 </h3>
                
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
//                     <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
//                       Urgency Level
//                     </label>
//                     <select
//                       id="urgency"
//                       name="urgency"
//                       value={formData.urgency}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     >
//                       <option value="normal">Normal</option>
//                       <option value="urgent">Urgent</option>
//                       <option value="emergency">Emergency</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
//                     Problem Description
//                   </label>
//                   <textarea
//                     id="description"
//                     name="description"
//                     value={formData.description}
//                     onChange={handleInputChange}
//                     rows={4}
//                     placeholder="Describe the issue or service you need..."
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Provider Selection */}
//               {formData.serviceType && (
//                 <div className="border-b border-gray-200 pb-8">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Provider</h3>
//                   <div className="grid grid-cols-1 gap-4">
//                     {mockProviders.map(provider => (
//                       <div
//                         key={provider.id}
//                         className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
//                           selectedProvider?.id === provider.id
//                             ? 'border-blue-500 bg-blue-50'
//                             : 'border-gray-200 hover:border-gray-300'
//                         }`}
//                         onClick={() => setSelectedProvider(provider)}
//                       >
//                         <div className="flex justify-between items-center">
//                           <div>
//                             <h4 className="font-semibold text-gray-900">{provider.name}</h4>
//                             <p className="text-sm text-gray-600">Rating: {provider.rating} ⭐</p>
//                             <p className="text-sm text-gray-600">{provider.availability}</p>
//                           </div>
//                           <div className="text-right">
//                             <p className="font-medium text-gray-900">{provider.price}</p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Scheduling */}
//               <div className="border-b border-gray-200 pb-8">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                   <Calendar className="mr-2" size={20} />
//                   Schedule Service
//                 </h3>
                
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div>
//                     <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
//                       Preferred Date
//                     </label>
//                     <input
//                       type="date"
//                       id="date"
//                       name="date"
//                       value={formData.date}
//                       onChange={handleInputChange}
//                       min={new Date().toISOString().split('T')[0]}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
//                       Preferred Time
//                     </label>
//                     <select
//                       id="time"
//                       name="time"
//                       value={formData.time}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     >
//                       <option value="">Select time</option>
//                       {timeSlots.map(time => (
//                         <option key={time} value={time}>{time}</option>
//                       ))}
//                     </select>
//                   </div>

//                   <div>
//                     <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
//                       Expected Duration (hours)
//                     </label>
//                     <select
//                       id="duration"
//                       name="duration"
//                       value={formData.duration}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     >
//                       <option value="1">1 hour</option>
//                       <option value="2">2 hours</option>
//                       <option value="3">3 hours</option>
//                       <option value="4">4 hours</option>
//                       <option value="more">More than 4 hours</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Contact Information */}
//               <div className="border-b border-gray-200 pb-8">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                   <MapPin className="mr-2" size={20} />
//                   Contact & Location
//                 </h3>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
//                       Service Address
//                     </label>
//                     <textarea
//                       id="address"
//                       name="address"
//                       value={formData.address}
//                       onChange={handleInputChange}
//                       rows={3}
//                       placeholder="Enter complete address where service is needed"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Payment Method */}
//               <div className="border-b border-gray-200 pb-8">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
//                   <CreditCard className="mr-2" size={20} />
//                   Payment Method
//                 </h3>
                
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div>
//                     <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
//                       <input
//                         type="radio"
//                         name="paymentMethod"
//                         value="cash"
//                         checked={formData.paymentMethod === 'cash'}
//                         onChange={handleInputChange}
//                         className="mr-3"
//                       />
//                       <div>
//                         <div className="font-medium">Cash on Service</div>
//                         <div className="text-sm text-gray-600">Pay after service completion</div>
//                       </div>
//                     </label>
//                   </div>

//                   <div>
//                     <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
//                       <input
//                         type="radio"
//                         name="paymentMethod"
//                         value="online"
//                         checked={formData.paymentMethod === 'online'}
//                         onChange={handleInputChange}
//                         className="mr-3"
//                       />
//                       <div>
//                         <div className="font-medium">Online Payment</div>
//                         <div className="text-sm text-gray-600">Pay now with card/UPI</div>
//                       </div>
//                     </label>
//                   </div>

//                   <div>
//                     <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
//                       <input
//                         type="radio"
//                         name="paymentMethod"
//                         value="advance"
//                         checked={formData.paymentMethod === 'advance'}
//                         onChange={handleInputChange}
//                         className="mr-3"
//                       />
//                       <div>
//                         <div className="font-medium">Advance Payment</div>
//                         <div className="text-sm text-gray-600">Pay 50% advance</div>
//                       </div>
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               {/* Submit Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-end">
//                 <Link
//                   to="/services"
//                   className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-center"
//                 >
//                   Back to Services
//                 </Link>
//                 <button
//                   type="submit"
//                   className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//                 >
//                   Submit Booking Request
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default BookingForm;




//above fine jst deploy part crct
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, MapPin, User, Phone, CreditCard } from 'lucide-react';

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { serviceData, userId } = location.state || {};

  const [formData, setFormData] = useState({
    serviceType: '',
    providerName: '',
    date: '',
    time: '',
    duration: '1',
    address: '',
    phone: '',
    description: '',
    urgency: 'normal',
    paymentMethod: 'cash'
  });

  const [selectedProvider, setSelectedProvider] = useState(null);

  // Pre-fill fields from passed state (once on mount)
  useEffect(() => {
    if (!serviceData || !userId) {
      alert('Missing fields: user, provider, or service type');
      navigate('/services');
    } else {
      setFormData(prev => ({
        ...prev,
        serviceType: serviceData.category || '',
        providerName: serviceData.providerName || ''
      }));
    }
  }, [serviceData, userId, navigate]);

  const serviceTypes = [
    'Electrician', 'Plumber', 'Tutor', 'RO Filter Repair',
    'AC Repair', 'Cleaning Services', 'Carpenter', 'Painter'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM'
  ];

  const mockProviders = [
    { id: 1, name: 'Rajesh Kumar', rating: 4.8, price: '₹300-500/hour', availability: 'Available Today' },
    { id: 2, name: 'Amit Sharma', rating: 4.6, price: '₹250-400/hour', availability: 'Available Tomorrow' },
    { id: 3, name: 'Priya Singh', rating: 4.9, price: '₹500-800/hour', availability: 'Available Now' },
    { id: 4, name: 'Suresh Patel', rating: 4.9, price: '₹500-800/hour', availability: 'Available Now' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get base URL from environment variables, fallback to localhost for development
    const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
    const cleanBaseUrl = baseUrl.replace(/\/$/, ''); // remove trailing slash if present

    // Build final request object with all form data
    const bookingData = {
      serviceType: formData.serviceType,
      providerId: formData.providerName,
      userId: userId,
      
      // Form fields
      serviceName: serviceData?.serviceName || '',
      date: formData.date,
      time: formData.time,
      duration: formData.duration,
      address: formData.address,
      phone: formData.phone,
      description: formData.description,
      urgency: formData.urgency,
      paymentMethod: formData.paymentMethod,
      
      // Service metadata
      price: serviceData?.price || '',
      rating: serviceData?.rating || '',
      location: serviceData?.location || '',
      experience: serviceData?.experience || '',
      availability: serviceData?.availability || ''
    };

    console.log("📤 Sending booking data:", bookingData);

    try {
      const response = await fetch(`${cleanBaseUrl}/requests/book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
      });

      const result = await response.json();

      if (response.ok) {
        alert('Booking request sent successfully!');
        navigate('/services');
      } else {
        alert(`Booking failed: ${result.message || 'Unknown error'}`);
      }
    } catch (err) {
      console.error('Booking error:', err);
      alert('An error occurred while booking. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Book a Service</h2>
              <p className="text-gray-600 mt-2">Fill in the details to book your service</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Service Selection */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <User className="mr-2" size={20} />
                  Service Details
                </h3>
                
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

                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="normal">Normal</option>
                      <option value="urgent">Urgent</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Problem Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describe the issue or service you need..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Provider Selection */}
              {formData.serviceType && (
                <div className="border-b border-gray-200 pb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Provider</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {mockProviders.map(provider => (
                      <div
                        key={provider.id}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                          selectedProvider?.id === provider.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedProvider(provider)}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-gray-900">{provider.name}</h4>
                            <p className="text-sm text-gray-600">Rating: {provider.rating} ⭐</p>
                            <p className="text-sm text-gray-600">{provider.availability}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-gray-900">{provider.price}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Scheduling */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Calendar className="mr-2" size={20} />
                  Schedule Service
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                      Expected Duration (hours)
                    </label>
                    <select
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="1">1 hour</option>
                      <option value="2">2 hours</option>
                      <option value="3">3 hours</option>
                      <option value="4">4 hours</option>
                      <option value="more">More than 4 hours</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="mr-2" size={20} />
                  Contact & Location
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Enter complete address where service is needed"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="mr-2" size={20} />
                  Payment Method
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === 'cash'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium">Cash on Service</div>
                        <div className="text-sm text-gray-600">Pay after service completion</div>
                      </div>
                    </label>
                  </div>

                  <div>
                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="online"
                        checked={formData.paymentMethod === 'online'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium">Online Payment</div>
                        <div className="text-sm text-gray-600">Pay now with card/UPI</div>
                      </div>
                    </label>
                  </div>

                  <div>
                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="advance"
                        checked={formData.paymentMethod === 'advance'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium">Advance Payment</div>
                        <div className="text-sm text-gray-600">Pay 50% advance</div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Link
                  to="/services"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-center"
                >
                  Back to Services
                </Link>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingForm;
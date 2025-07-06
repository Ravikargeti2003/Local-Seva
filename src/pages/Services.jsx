
// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { Search, Filter, Star, MapPin, Phone, Clock, Users } from 'lucide-react';

// const Services = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedLocation, setSelectedLocation] = useState('');
//   const [priceRange, setPriceRange] = useState('');
//   const [services, setServices] = useState([]);

//   const categories = [
//     'All Services',
//     'Electrician',
//     'Plumber',
//     'Tutor',
//     'RO Filter Repair',
//     'AC Repair',
//     'Cleaning Services',
//     'Carpenter',
//     'Painter'
//   ];

//   const locations = [
//     'All Locations',
//     'Mumbai',
//     'Delhi',
//     'Bangalore',
//     'Chennai',
//     'Kolkata',
//     'Hyderabad',
//     'Pune'
//   ];

//   const priceRanges = [
//     'Any Price',
//     '₹0 - ₹500',
//     '₹500 - ₹1000',
//     '₹1000 - ₹2000',
//     '₹2000+'
//   ];

//   useEffect(() => {
//     // Mock data for services
//     const mockServices = [
//       {
//         id: 1,
//         name: 'Raj Electricals',
//         providerName: 'Rajesh Kumar',
//         category: 'Electrician',
//         rating: 4.8,
//         reviews: 156,
//         location: 'Mumbai',
//         experience: '8 years',
//         price: '₹300-500/hour',
//         image: '/placeholder-shop.jpg',
//         description: 'Professional electrical services for homes and offices. Specializing in wiring, repairs, and installations.',
//         services: ['Wiring', 'Appliance Repair', 'Installation'],
//         availability: 'Available Now'
//       },
//       {
//         id: 2,
//         name: 'Quick Plumbing Solutions',
//         providerName: 'Amit Sharma',
//         category: 'Plumber',
//         rating: 4.6,
//         reviews: 89,
//         location: 'Delhi',
//         experience: '5 years',
//         price: '₹250-400/hour',
//         image: '/placeholder-shop.jpg',
//         description: 'Expert plumbing services with 24/7 emergency support. All types of pipe repairs and installations.',
//         services: ['Pipe Repair', 'Drain Cleaning', 'Installation'],
//         availability: 'Available Now'
//       },
//       {
//         id: 3,
//         name: 'Math Tutor Pro',
//         providerName: 'Priya Singh',
//         category: 'Tutor',
//         rating: 4.9,
//         reviews: 234,
//         location: 'Bangalore',
//         experience: '10 years',
//         price: '₹500-800/hour',
//         image: '/placeholder-tutor.jpg',
//         description: 'Experienced mathematics tutor for classes 6-12 and competitive exams. Proven track record.',
//         services: ['School Math', 'JEE Prep', 'NEET Prep'],
//         availability: 'Available Today'
//       },
//       {
//         id: 4,
//         name: 'Pure Water Services',
//         providerName: 'Suresh Patel',
//         category: 'RO Filter Repair',
//         rating: 4.7,
//         reviews: 67,
//         location: 'Mumbai',
//         experience: '6 years',
//         price: '₹200-350/visit',
//         image: '/placeholder-shop.jpg',
//         description: 'Professional RO filter maintenance and repair services. All brands supported.',
//         services: ['Filter Replacement', 'System Cleaning', 'Installation'],
//         availability: 'Available Tomorrow'
//       }
//     ];
//     setServices(mockServices);
//   }, []);

//   const filteredServices = services.filter(service => {
//     const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          service.providerName.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = !selectedCategory || selectedCategory === 'All Services' || service.category === selectedCategory;
//     const matchesLocation = !selectedLocation || selectedLocation === 'All Locations' || service.location === selectedLocation;
    
//     return matchesSearch && matchesCategory && matchesLocation;
//   });

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       <div className="py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Header */}
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Local Services</h1>
//             <p className="text-gray-600">Connect with trusted service providers in your area</p>
//           </div>

//           {/* Search and Filters */}
//           <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//             {/* Search Bar */}
//             <div className="relative mb-6">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search for services, providers, or locations..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Filters */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
//                 <select
//                   value={selectedCategory}
//                   onChange={(e) => setSelectedCategory(e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   {categories.map(category => (
//                     <option key={category} value={category}>{category}</option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
//                 <select
//                   value={selectedLocation}
//                   onChange={(e) => setSelectedLocation(e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   {locations.map(location => (
//                     <option key={location} value={location}>{location}</option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
//                 <select
//                   value={priceRange}
//                   onChange={(e) => setPriceRange(e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   {priceRanges.map(range => (
//                     <option key={range} value={range}>{range}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="flex items-end">
//                 <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
//                   <Filter className="mr-2" size={16} />
//                   Apply Filters
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Results */}
//           <div className="mb-4">
//             <p className="text-gray-600">
//               Showing {filteredServices.length} results
//             </p>
//           </div>

//           {/* Services Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {filteredServices.map((service) => (
//               <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//                 <div className="p-6">
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="flex-1">
//                       <h3 className="text-xl font-semibold text-gray-900 mb-1">{service.name}</h3>
//                       <p className="text-gray-600 mb-2">by {service.providerName}</p>
//                       <div className="flex items-center mb-2">
//                         <Star className="text-yellow-400 fill-current" size={16} />
//                         <span className="ml-1 text-sm font-medium">{service.rating}</span>
//                         <span className="ml-1 text-sm text-gray-500">({service.reviews} reviews)</span>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mb-2">
//                         {service.category}
//                       </div>
//                       <div className="text-sm text-gray-600">{service.price}</div>
//                     </div>
//                   </div>

//                   <p className="text-gray-600 mb-4">{service.description}</p>

//                   <div className="grid grid-cols-2 gap-4 mb-4">
//                     <div className="flex items-center">
//                       <MapPin className="text-gray-400" size={16} />
//                       <span className="ml-2 text-sm text-gray-600">{service.location}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Users className="text-gray-400" size={16} />
//                       <span className="ml-2 text-sm text-gray-600">{service.experience} experience</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Clock className="text-gray-400" size={16} />
//                       <span className="ml-2 text-sm text-gray-600">{service.availability}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Phone className="text-gray-400" size={16} />
//                       <span className="ml-2 text-sm text-gray-600">Contact Available</span>
//                     </div>
//                   </div>

//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {service.services.map((serviceItem, index) => (
//                       <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
//                         {serviceItem}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex space-x-3">
//                     <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
//                       Book Now
//                     </button>
//                     <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {filteredServices.length === 0 && (
//             <div className="text-center py-12">
//               <div className="text-gray-400 mb-4">
//                 <Search size={48} className="mx-auto" />
//               </div>
//               <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
//               <p className="text-gray-600">Try adjusting your search criteria or browse all services.</p>
//             </div>
//           )}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Services;




//check 2(working fine)
// 👇 FULL CODE: services.jsx with booking functionality
// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { Search, Filter, Star, MapPin, Phone, Clock, Users } from 'lucide-react';
// import axios from 'axios';

// const Services = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedLocation, setSelectedLocation] = useState('');
//   const [priceRange, setPriceRange] = useState('');
//   const [services, setServices] = useState([]);

//   const categories = ['All Services', 'Electrician', 'Plumber', 'Tutor', 'RO Filter Repair', 'AC Repair', 'Cleaning Services', 'Carpenter', 'Painter'];
//   const locations = ['All Locations', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune'];
//   const priceRanges = ['Any Price', '₹0 - ₹500', '₹500 - ₹1000', '₹1000 - ₹2000', '₹2000+'];

//   useEffect(() => {
//     const mockServices = [
//       {
//         id: 1,
//         name: 'Raj Electricals',
//         providerName: 'Rajesh Kumar',
//         category: 'Electrician',
//         rating: 4.8,
//         reviews: 156,
//         location: 'Mumbai',
//         experience: '8 years',
//         price: '₹300-500/hour',
//         image: '/placeholder-shop.jpg',
//         description: 'Professional electrical services for homes and offices. Specializing in wiring, repairs, and installations.',
//         services: ['Wiring', 'Appliance Repair', 'Installation'],
//         availability: 'Available Now'
//       },
//       {
//         id: 2,
//         name: 'Quick Plumbing Solutions',
//         providerName: 'Amit Sharma',
//         category: 'Plumber',
//         rating: 4.6,
//         reviews: 89,
//         location: 'Delhi',
//         experience: '5 years',
//         price: '₹250-400/hour',
//         image: '/placeholder-shop.jpg',
//         description: 'Expert plumbing services with 24/7 emergency support. All types of pipe repairs and installations.',
//         services: ['Pipe Repair', 'Drain Cleaning', 'Installation'],
//         availability: 'Available Now'
//       },
//       {
//         id: 3,
//         name: 'Math Tutor Pro',
//         providerName: 'Priya Singh',
//         category: 'Tutor',
//         rating: 4.9,
//         reviews: 234,
//         location: 'Bangalore',
//         experience: '10 years',
//         price: '₹500-800/hour',
//         image: '/placeholder-tutor.jpg',
//         description: 'Experienced mathematics tutor for classes 6-12 and competitive exams. Proven track record.',
//         services: ['School Math', 'JEE Prep', 'NEET Prep'],
//         availability: 'Available Today'
//       },
//       {
//         id: 4,
//         name: 'Pure Water Services',
//         providerName: 'Suresh Patel',
//         category: 'RO Filter Repair',
//         rating: 4.7,
//         reviews: 67,
//         location: 'Mumbai',
//         experience: '6 years',
//         price: '₹200-350/visit',
//         image: '/placeholder-shop.jpg',
//         description: 'Professional RO filter maintenance and repair services. All brands supported.',
//         services: ['Filter Replacement', 'System Cleaning', 'Installation'],
//         availability: 'Available Tomorrow'
//       }
//     ];
//     setServices(mockServices);
//   }, []);

//   const handleBookNow = async (service) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/requests/book', {
//         serviceType: service.category,
//         providerId: service.providerId || service.providerName,
//         userId: "USER_ID_HERE" // 🔁 Replace this with actual logged-in user ID
//       });
//       alert("Service request sent successfully.");
//     } catch (err) {
//       console.error("Booking error:", err);
//       alert("Failed to send service request.");
//     }
//   };

//   const filteredServices = services.filter(service => {
//     const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          service.providerName.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = !selectedCategory || selectedCategory === 'All Services' || service.category === selectedCategory;
//     const matchesLocation = !selectedLocation || selectedLocation === 'All Locations' || service.location === selectedLocation;
//     return matchesSearch && matchesCategory && matchesLocation;
//   });

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
//       <div className="py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Local Services</h1>
//             <p className="text-gray-600">Connect with trusted service providers in your area</p>
//           </div>

//           <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//             <div className="relative mb-6">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search for services, providers, or locations..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
//                 <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//                   {categories.map(category => (
//                     <option key={category} value={category}>{category}</option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
//                 <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//                   {locations.map(location => (
//                     <option key={location} value={location}>{location}</option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
//                 <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//                   {priceRanges.map(range => (
//                     <option key={range} value={range}>{range}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="flex items-end">
//                 <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
//                   <Filter className="mr-2" size={16} />
//                   Apply Filters
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="mb-4">
//             <p className="text-gray-600">Showing {filteredServices.length} results</p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {filteredServices.map((service) => (
//               <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//                 <div className="p-6">
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="flex-1">
//                       <h3 className="text-xl font-semibold text-gray-900 mb-1">{service.name}</h3>
//                       <p className="text-gray-600 mb-2">by {service.providerName}</p>
//                       <div className="flex items-center mb-2">
//                         <Star className="text-yellow-400 fill-current" size={16} />
//                         <span className="ml-1 text-sm font-medium">{service.rating}</span>
//                         <span className="ml-1 text-sm text-gray-500">({service.reviews} reviews)</span>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mb-2">{service.category}</div>
//                       <div className="text-sm text-gray-600">{service.price}</div>
//                     </div>
//                   </div>

//                   <p className="text-gray-600 mb-4">{service.description}</p>

//                   <div className="grid grid-cols-2 gap-4 mb-4">
//                     <div className="flex items-center"><MapPin className="text-gray-400" size={16} /><span className="ml-2 text-sm text-gray-600">{service.location}</span></div>
//                     <div className="flex items-center"><Users className="text-gray-400" size={16} /><span className="ml-2 text-sm text-gray-600">{service.experience} experience</span></div>
//                     <div className="flex items-center"><Clock className="text-gray-400" size={16} /><span className="ml-2 text-sm text-gray-600">{service.availability}</span></div>
//                     <div className="flex items-center"><Phone className="text-gray-400" size={16} /><span className="ml-2 text-sm text-gray-600">Contact Available</span></div>
//                   </div>

//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {service.services.map((serviceItem, index) => (
//                       <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">{serviceItem}</span>
//                     ))}
//                   </div>

//                   <div className="flex space-x-3">
//                     <button
//                       className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
//                       onClick={() => handleBookNow(service)}
//                     >
//                       Book Now
//                     </button>
//                     <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">View Details</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {filteredServices.length === 0 && (
//             <div className="text-center py-12">
//               <div className="text-gray-400 mb-4"><Search size={48} className="mx-auto" /></div>
//               <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
//               <p className="text-gray-600">Try adjusting your search criteria or browse all services.</p>
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Services;



//check 4(working but have to check)
// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { Search, Filter, Star, MapPin, Phone, Clock, Users } from 'lucide-react';
// import axios from 'axios';

// const Services = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedLocation, setSelectedLocation] = useState('');
//   const [priceRange, setPriceRange] = useState('');
//   const [services, setServices] = useState([]);
//   const [requestStatuses, setRequestStatuses] = useState({});

//   const userId = "USER_ID_HERE"; // Replace with actual logged-in user ID

//   const categories = ['All Services', 'Electrician', 'Plumber', 'Tutor', 'RO Filter Repair', 'AC Repair', 'Cleaning Services', 'Carpenter', 'Painter'];
//   const locations = ['All Locations', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune'];
//   const priceRanges = ['Any Price', '₹0 - ₹500', '₹500 - ₹1000', '₹1000 - ₹2000', '₹2000+'];

//   useEffect(() => {
//     const mockServices = [
//       {
//         id: 1,
//         name: 'Raj Electricals',
//         providerName: 'Rajesh Kumar',
//         category: 'Electrician',
//         rating: 4.8,
//         reviews: 156,
//         location: 'Mumbai',
//         experience: '8 years',
//         price: '₹300-500/hour',
//         image: '/placeholder-shop.jpg',
//         description: 'Professional electrical services for homes and offices. Specializing in wiring, repairs, and installations.',
//         services: ['Wiring', 'Appliance Repair', 'Installation'],
//         availability: 'Available Now'
//       },
//       {
//         id: 2,
//         name: 'Quick Plumbing Solutions',
//         providerName: 'Amit Sharma',
//         category: 'Plumber',
//         rating: 4.6,
//         reviews: 89,
//         location: 'Delhi',
//         experience: '5 years',
//         price: '₹250-400/hour',
//         image: '/placeholder-shop.jpg',
//         description: 'Expert plumbing services with 24/7 emergency support. All types of pipe repairs and installations.',
//         services: ['Pipe Repair', 'Drain Cleaning', 'Installation'],
//         availability: 'Available Now'
//       },
//       {
//         id: 3,
//         name: 'Math Tutor Pro',
//         providerName: 'Priya Singh',
//         category: 'Tutor',
//         rating: 4.9,
//         reviews: 234,
//         location: 'Bangalore',
//         experience: '10 years',
//         price: '₹500-800/hour',
//         image: '/placeholder-tutor.jpg',
//         description: 'Experienced mathematics tutor for classes 6-12 and competitive exams. Proven track record.',
//         services: ['School Math', 'JEE Prep', 'NEET Prep'],
//         availability: 'Available Today'
//       },
//       {
//         id: 4,
//         name: 'Pure Water Services',
//         providerName: 'Suresh Patel',
//         category: 'RO Filter Repair',
//         rating: 4.7,
//         reviews: 67,
//         location: 'Mumbai',
//         experience: '6 years',
//         price: '₹200-350/visit',
//         image: '/placeholder-shop.jpg',
//         description: 'Professional RO filter maintenance and repair services. All brands supported.',
//         services: ['Filter Replacement', 'System Cleaning', 'Installation'],
//         availability: 'Available Tomorrow'
//       }
//     ];
//     setServices(mockServices);
//   }, []);

//   useEffect(() => {
//     const fetchRequestStatus = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/requests/user/${userId}`);
//         const statusMap = {};
//         res.data.forEach((req) => {
//           statusMap[`${req.serviceType}_${req.providerId}`] = req.status;
//         });
//         setRequestStatuses(statusMap);
//       } catch (err) {
//         console.error("Failed to fetch user request statuses", err);
//       }
//     };
//     fetchRequestStatus();
//   }, []);

//   const handleBookNow = async (service) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/requests/book', {
//         serviceType: service.category,
//         providerId: service.providerId || service.providerName,
//         userId: userId
//       });
//       alert("Service request sent successfully.");
//     } catch (err) {
//       console.error("Booking error:", err);
//       alert("Failed to send service request.");
//     }
//   };

//   const filteredServices = services.filter(service => {
//     const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          service.providerName.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = !selectedCategory || selectedCategory === 'All Services' || service.category === selectedCategory;
//     const matchesLocation = !selectedLocation || selectedLocation === 'All Locations' || service.location === selectedLocation;
//     return matchesSearch && matchesCategory && matchesLocation;
//   });

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
//       <div className="py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {filteredServices.map((service) => {
//               const statusKey = `${service.category}_${service.providerId || service.providerName}`;
//               const status = requestStatuses[statusKey];
//               return (
//                 <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//                   <div className="p-6">
//                     <div className="flex items-start justify-between mb-4">
//                       <div className="flex-1">
//                         <h3 className="text-xl font-semibold text-gray-900 mb-1">{service.name}</h3>
//                         <p className="text-gray-600 mb-2">by {service.providerName}</p>
//                         <div className="flex items-center mb-2">
//                           <Star className="text-yellow-400 fill-current" size={16} />
//                           <span className="ml-1 text-sm font-medium">{service.rating}</span>
//                           <span className="ml-1 text-sm text-gray-500">({service.reviews} reviews)</span>
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mb-2">{service.category}</div>
//                         <div className="text-sm text-gray-600">{service.price}</div>
//                       </div>
//                     </div>

//                     <p className="text-gray-600 mb-4">{service.description}</p>

//                     <div className="grid grid-cols-2 gap-4 mb-4">
//                       <div className="flex items-center"><MapPin className="text-gray-400" size={16} /><span className="ml-2 text-sm text-gray-600">{service.location}</span></div>
//                       <div className="flex items-center"><Users className="text-gray-400" size={16} /><span className="ml-2 text-sm text-gray-600">{service.experience} experience</span></div>
//                       <div className="flex items-center"><Clock className="text-gray-400" size={16} /><span className="ml-2 text-sm text-gray-600">{service.availability}</span></div>
//                       <div className="flex items-center"><Phone className="text-gray-400" size={16} /><span className="ml-2 text-sm text-gray-600">Contact Available</span></div>
//                     </div>

//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {service.services.map((serviceItem, index) => (
//                         <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">{serviceItem}</span>
//                       ))}
//                     </div>

//                     {status && (
//                       <div className="mb-3">
//                         <span
//                           className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
//                             status.toLowerCase() === 'accepted'
//                               ? 'bg-green-100 text-green-800'
//                               : 'bg-red-100 text-red-700'
//                           }`}
//                         >
//                           {status.toUpperCase()}
//                         </span>
//                       </div>
//                     )}

//                     <div className="flex space-x-3">
//                       <button
//                         className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
//                         onClick={() => handleBookNow(service)}
//                       >
//                         Book Now
//                       </button>
//                       <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">View Details</button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Services;




//check 5

// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { Search, Filter, Star, MapPin, Phone, Clock, Users } from 'lucide-react';
// import axios from 'axios';

// const Services = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedLocation, setSelectedLocation] = useState('');
//   const [priceRange, setPriceRange] = useState('');
//   const [services, setServices] = useState([]);
//   const [requestStatuses, setRequestStatuses] = useState({});

//   const userId = "USER_ID_HERE"; // Replace with actual logged-in user ID

//   const categories = ['All Services', 'Electrician', 'Plumber', 'Tutor', 'RO Filter Repair', 'AC Repair', 'Cleaning Services', 'Carpenter', 'Painter'];
//   const locations = ['All Locations', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune'];
//   const priceRanges = ['Any Price', '₹0 - ₹500', '₹500 - ₹1000', '₹1000 - ₹2000', '₹2000+'];

//   useEffect(() => {
//     const mockServices = [
//       {
//         id: 1,
//         name: 'Raj Electricals',
//         providerName: 'Rajesh Kumar',
//         category: 'Electrician',
//         rating: 4.8,
//         reviews: 156,
//         location: 'Mumbai',
//         experience: '8 years',
//         price: '₹300-500/hour',
//         image: '/placeholder-shop.jpg',
//         description: 'Professional electrical services for homes and offices. Specializing in wiring, repairs, and installations.',
//         services: ['Wiring', 'Appliance Repair', 'Installation'],
//         availability: 'Available Now'
//       },
//       {
//         id: 2,
//         name: 'Quick Plumbing Solutions',
//         providerName: 'Amit Sharma',
//         category: 'Plumber',
//         rating: 4.6,
//         reviews: 89,
//         location: 'Delhi',
//         experience: '5 years',
//         price: '₹250-400/hour',
//         image: '/placeholder-shop.jpg',
//         description: 'Expert plumbing services with 24/7 emergency support. All types of pipe repairs and installations.',
//         services: ['Pipe Repair', 'Drain Cleaning', 'Installation'],
//         availability: 'Available Now'
//       },
//       {
//         id: 3,
//         name: 'Math Tutor Pro',
//         providerName: 'Priya Singh',
//         category: 'Tutor',
//         rating: 4.9,
//         reviews: 234,
//         location: 'Bangalore',
//         experience: '10 years',
//         price: '₹500-800/hour',
//         image: '/placeholder-tutor.jpg',
//         description: 'Experienced mathematics tutor for classes 6-12 and competitive exams. Proven track record.',
//         services: ['School Math', 'JEE Prep', 'NEET Prep'],
//         availability: 'Available Today'
//       },
//       {
//         id: 4,
//         name: 'Pure Water Services',
//         providerName: 'Suresh Patel',
//         category: 'RO Filter Repair',
//         rating: 4.7,
//         reviews: 67,
//         location: 'Mumbai',
//         experience: '6 years',
//         price: '₹200-350/visit',
//         image: '/placeholder-shop.jpg',
//         description: 'Professional RO filter maintenance and repair services. All brands supported.',
//         services: ['Filter Replacement', 'System Cleaning', 'Installation'],
//         availability: 'Available Tomorrow'
//       }
//     ];
//     setServices(mockServices);
//   }, []);

//   useEffect(() => {
//     const fetchRequestStatus = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/requests/user/${userId}`);
//         const statusMap = {};
//         res.data.forEach((req) => {
//           // statusMap[`${req.serviceType}_${req.providerId}`] = req.status;
//           //  const key = `${req.serviceType}_${req.providerName}`;
//           const key = `${req.serviceType}_${req.providerId}`; // ← Keep providerId here
//         statusMap[key] = req.status;
//         });
//         setRequestStatuses(statusMap);
//       } catch (err) {
//         console.error("Failed to fetch user request statuses", err);
//       }
//     };
//     fetchRequestStatus();
//   }, []);

//   const handleBookNow = async (service) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/requests/book', {
//         serviceType: service.category,
//         // providerId: service.providerId || service.providerName,
//         //  providerName: service.providerName,
//         providerId: service.providerName, // ← Keep this as it was before 
//         userId: userId
//       });
//       alert("Service request sent successfully.");
//     } catch (err) {
//       console.error("Booking error:", err);
//       alert("Failed to send service request.");
//     }
//   };

//   const filteredServices = services.filter(service => {
//     const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          service.providerName.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = !selectedCategory || selectedCategory === 'All Services' || service.category === selectedCategory;
//     const matchesLocation = !selectedLocation || selectedLocation === 'All Locations' || service.location === selectedLocation;
//     return matchesSearch && matchesCategory && matchesLocation;
//   });

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
//       <div className="py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Local Services</h1>
//             <p className="text-gray-600">Connect with trusted service providers in your area</p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {filteredServices.map((service) => {
//               // const statusKey = `${service.category}_${service.providerId || service.providerName}`;
//               const statusKey = `${service.category}_${service.providerName}`;
//               const status = requestStatuses[statusKey];

//               return (
//                 <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//                   <div className="p-6">
//                     <div className="flex items-start justify-between mb-4">
//                       <div className="flex-1">
//                         <h3 className="text-xl font-semibold text-gray-900 mb-1">{service.name}</h3>
//                         <p className="text-gray-600 mb-2">by {service.providerName}</p>
//                         <div className="flex items-center mb-2">
//                           <Star className="text-yellow-400 fill-current" size={16} />
//                           <span className="ml-1 text-sm font-medium">{service.rating}</span>
//                           <span className="ml-1 text-sm text-gray-500">({service.reviews} reviews)</span>
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mb-2">{service.category}</div>
//                         <div className="text-sm text-gray-600">{service.price}</div>
//                       </div>
//                     </div>

//                     <p className="text-gray-600 mb-4">{service.description}</p>

//                     <div className="grid grid-cols-2 gap-4 mb-4">
//                       <div className="flex items-center"><MapPin className="text-gray-400" size={16} /><span className="ml-2 text-sm text-gray-600">{service.location}</span></div>
//                       <div className="flex items-center"><Users className="text-gray-400" size={16} /><span className="ml-2 text-sm text-gray-600">{service.experience} experience</span></div>
//                       <div className="flex items-center"><Clock className="text-gray-400" size={16} /><span className="ml-2 text-sm text-gray-600">{service.availability}</span></div>
//                       <div className="flex items-center"><Phone className="text-gray-400" size={16} /><span className="ml-2 text-sm text-gray-600">Contact Available</span></div>
//                     </div>

//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {service.services.map((serviceItem, index) => (
//                         <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">{serviceItem}</span>
//                       ))}
//                     </div>

//                     {status && (
//                       <div className="mb-3">
//                         <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
//                           status.toLowerCase() === 'accepted'
//                             ? 'bg-green-100 text-green-800'
//                             : 'bg-red-100 text-red-700'
//                         }`}>
//                           {status.toUpperCase()}
//                         </span>
//                       </div>
//                     )}

//                     <div className="flex space-x-3">
//                       <button
//                         className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
//                         onClick={() => handleBookNow(service)}
//                       >
//                         Book Now
//                       </button>
//                       <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">View Details</button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Services;


//chek6(kck)
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, Filter, Star, MapPin, Phone, Clock, Users } from 'lucide-react';
import axios from 'axios';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [services, setServices] = useState([]);
  const [requestStatuses, setRequestStatuses] = useState({});

  // const userId = "USER_ID_HERE"; // Replace with actual logged-in user ID
 const userId = "USER_ID_HERE"; 
  const categories = ['All Services', 'Electrician', 'Plumber', 'Tutor', 'RO Filter Repair', 'AC Repair', 'Cleaning Services', 'Carpenter', 'Painter'];
  const locations = ['All Locations', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune'];
  const priceRanges = ['Any Price', '₹0 - ₹500', '₹500 - ₹1000', '₹1000 - ₹2000', '₹2000+'];

  useEffect(() => {
    const mockServices = [
      {
        id: 1,
        name: 'Raj Electricals',
        providerName: 'Rajesh Kumar',
        category: 'Electrician',
        rating: 4.8,
        reviews: 156,
        location: 'Mumbai',
        experience: '8 years',
        price: '₹300-500/hour',
        image: '/placeholder-shop.jpg',
        description: 'Professional electrical services for homes and offices. Specializing in wiring, repairs, and installations.',
        services: ['Wiring', 'Appliance Repair', 'Installation'],
        availability: 'Available Now'
      },
      {
        id: 2,
        name: 'Quick Plumbing Solutions',
        providerName: 'Amit Sharma',
        category: 'Plumber',
        rating: 4.6,
        reviews: 89,
        location: 'Delhi',
        experience: '5 years',
        price: '₹250-400/hour',
        image: '/placeholder-shop.jpg',
        description: 'Expert plumbing services with 24/7 emergency support. All types of pipe repairs and installations.',
        services: ['Pipe Repair', 'Drain Cleaning', 'Installation'],
        availability: 'Available Now'
      },
      {
        id: 3,
        name: 'Math Tutor Pro',
        providerName: 'Priya Singh',
        category: 'Tutor',
        rating: 4.9,
        reviews: 234,
        location: 'Bangalore',
        experience: '10 years',
        price: '₹500-800/hour',
        image: '/placeholder-tutor.jpg',
        description: 'Experienced mathematics tutor for classes 6-12 and competitive exams. Proven track record.',
        services: ['School Math', 'JEE Prep', 'NEET Prep'],
        availability: 'Available Today'
      },
      {
        id: 4,
        name: 'Pure Water Services',
        providerName: 'Suresh Patel',
        category: 'RO Filter Repair',
        rating: 4.7,
        reviews: 67,
        location: 'Mumbai',
        experience: '6 years',
        price: '₹200-350/visit',
        image: '/placeholder-shop.jpg',
        description: 'Professional RO filter maintenance and repair services. All brands supported.',
        services: ['Filter Replacement', 'System Cleaning', 'Installation'],
        availability: 'Available Tomorrow'
      }
    ];
    setServices(mockServices);
  }, []);

  useEffect(() => {
    const fetchRequestStatus = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/requests/user/${userId}`);
        const statusMap = {};
        res.data.forEach((req) => {
          const key = `${req.serviceType}_${req.providerId}`; // providerId is actually providerName
          statusMap[key] = req.status;
        });
        setRequestStatuses(statusMap);
      } catch (err) {
        console.error("Failed to fetch user request statuses", err);
      }
    };
    fetchRequestStatus();
  }, []);

  const handleBookNow = async (service) => {
    //check
    console.log("Booking Attempt:", {
    serviceType: service.category,
    providerId: service.providerName,
    userId: userId,
  });
    try {
      const response = await axios.post('http://localhost:5000/api/requests/book', {
        
        serviceType: service.category,
        providerId: service.providerName, // important: use providerName as ID
        userId: userId
      });
      alert("Service request sent successfully.");
    } catch (err) {
      console.error("Booking error:", err);
      alert("Failed to send service request.");
    }
  };

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.providerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === 'All Services' || service.category === selectedCategory;
    const matchesLocation = !selectedLocation || selectedLocation === 'All Locations' || service.location === selectedLocation;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Local Services</h1>
            <p className="text-gray-600">Connect with trusted service providers in your area</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredServices.map((service) => {
              const statusKey = `${service.category}_${service.providerName}`;
              const status = requestStatuses[statusKey];

              return (
                <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{service.name}</h3>
                        <p className="text-gray-600 mb-2">by {service.providerName}</p>
                        <div className="flex items-center mb-2">
                          <Star className="text-yellow-400 fill-current" size={16} />
                          <span className="ml-1 text-sm font-medium">{service.rating}</span>
                          <span className="ml-1 text-sm text-gray-500">({service.reviews} reviews)</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mb-2">{service.category}</div>
                        <div className="text-sm text-gray-600">{service.price}</div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{service.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center"><MapPin className="text-gray-400" size={16} /><span className="ml-2 text-sm text-gray-600">{service.location}</span></div>
                      <div className="flex items-center"><Users className="text-gray-400" size={16} /><span className="ml-2 text-sm text-gray-600">{service.experience} experience</span></div>
                      <div className="flex items-center"><Clock className="text-gray-400" size={16} /><span className="ml-2 text-sm text-gray-600">{service.availability}</span></div>
                      <div className="flex items-center"><Phone className="text-gray-400" size={16} /><span className="ml-2 text-sm text-gray-600">Contact Available</span></div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.services.map((serviceItem, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">{serviceItem}</span>
                      ))}
                    </div>

                    {status && (
                      <div className="mb-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          status.toLowerCase() === 'accepted'
                            ? 'bg-green-100 text-green-800'
                            : status.toLowerCase() === 'pending'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {status.toUpperCase()}
                        </span>
                      </div>
                    )}

                    <div className="flex space-x-3">
                      <button
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        onClick={() => handleBookNow(service)}
                      >
                        Book Now
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">View Details</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;




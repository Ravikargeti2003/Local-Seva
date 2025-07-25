// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ProviderDashboard = () => {
//   const [requests, setRequests] = useState([]);

//     // 👇 Replace with a real ObjectId of a provider from your MongoDB
//   const providerId = "Rajesh Kumar";

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   const fetchRequests = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/requests/provider/${providerId}`);
//       setRequests(res.data);
//     } catch (err) {
//       console.error("Failed to fetch requests", err);
//     }
//   };

//   const handleUpdate = async (id, status) => {
//     try {
//       await axios.put(`http://localhost:5000/api/requests/${id}`, { status });
//       fetchRequests(); // refresh list
//     } catch (err) {
//       console.error("Failed to update status", err);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Service Requests</h2>
//      {requests.map((req) => {
//   return (
//     <div key={req._id} className="border p-4 rounded mb-3 shadow">
//       <p><strong>Service:</strong> {req.serviceType}</p>
//       <p><strong>User:</strong> {req.userId?.name || "N/A"}</p>

//       {/* Always show the current status */}
//       <p><strong>Status:</strong> {req.status ? req.status.charAt(0).toUpperCase() + req.status.slice(1) : "Pending"}</p>

//       {/* Buttons or status label */}
//       {req.status?.toLowerCase() === "pending" ? (
//         <div className="mt-2">
//           <button
//             onClick={() => handleUpdate(req._id, "accepted")}
//             className="bg-green-500 text-white px-3 py-1 rounded mr-2"
//           >
//             Accept
//           </button>
//           <button
//             onClick={() => handleUpdate(req._id, "rejected")}
//             className="bg-red-500 text-white px-3 py-1 rounded"
//           >
//             Reject
//           </button>
//         </div>
//       ) : (
//         <div className="mt-2">
//           <span
//             className={`px-3 py-1 rounded font-semibold ${
//               req.status.toLowerCase() === "accepted"
//                 ? "bg-green-100 text-green-700"
//                 : "bg-red-100 text-red-700"
//             }`}
//           >
//             {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
//           </span>
//         </div>
//       )}
//     </div>
//   );
// }



// export default ProviderDashboard;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ProviderDashboard = () => {
//   const [requests, setRequests] = useState([]);

//   // Replace with your real provider name (you'll later change to ID after auth)
//   const providerId = "Rajesh Kumar";

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   const fetchRequests = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/requests/provider/${providerId}`);
//       setRequests(res.data);
//     } catch (err) {
//       console.error("Failed to fetch requests", err);
//     }
//   };

//   const handleUpdate = async (id, status) => {
//     try {
//       await axios.put(`http://localhost:5000/api/requests/${id}`, { status });
//       fetchRequests(); // refresh list
//     } catch (err) {
//       console.error("Failed to update status", err);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Service Requests</h2>
//       {requests.map((req) => (
//         <div key={req._id} className="border p-4 rounded mb-3 shadow">
//           <p><strong>Service:</strong> {req.serviceType}</p>
//           <p><strong>User:</strong> {req.userId?.name || "N/A"}</p>
//           <p><strong>Status:</strong> {req.status ? req.status.charAt(0).toUpperCase() + req.status.slice(1) : "Pending"}</p>

//           {req.status?.toLowerCase() === "pending" ? (
//             <div className="mt-2">
//               <button
//                 onClick={() => handleUpdate(req._id, "accepted")}
//                 className="bg-green-500 text-white px-3 py-1 rounded mr-2"
//               >
//                 Accept
//               </button>
//               <button
//                 onClick={() => handleUpdate(req._id, "rejected")}
//                 className="bg-red-500 text-white px-3 py-1 rounded"
//               >
//                 Reject
//               </button>
//             </div>
//           ) : (
//             <div className="mt-2">
//               <span
//                 className={`px-3 py-1 rounded font-semibold ${
//                   req.status.toLowerCase() === "accepted"
//                     ? "bg-green-100 text-green-700"
//                     : "bg-red-100 text-red-700"
//                 }`}
//               >
//                 {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
//               </span>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProviderDashboard;



//chek
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ProviderDashboard = () => {
//   const [requests, setRequests] = useState([]);

//   // Multiple providers (mock names for now)
//   const providerIds = ["Rajesh Kumar", "Amit Sharma", "Priya Singh", "Suresh Patel"];

//   const providerId = localStorage.getItem('providerName');

//   useEffect(() => {
//     fetchAllProviderRequests();
//   }, []);

//   const fetchAllProviderRequests = async () => {
//     try {
//       const allRequests = [];

//       // Fetch requests for each provider name
//       for (const providerId of providerIds) {
//         const res = await axios.get(`http://localhost:5000/api/requests/provider/${providerId}`);
//         allRequests.push(...res.data); // add all to one array
//       }

//       setRequests(allRequests);
//     } catch (err) {
//       console.error("Failed to fetch requests for providers", err);
//     }
//   };

//   const handleUpdate = async (id, status) => {
//     try {
//       await axios.put(`http://localhost:5000/api/requests/${id}`, { status });
//       fetchAllProviderRequests(); // refresh
//     } catch (err) {
//       console.error("Failed to update status", err);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Service Requests (All Providers)</h2>

//       {requests.length === 0 ? (
//         <p className="text-gray-500">No requests found.</p>
//       ) : (
//         requests.map((req) => (
//           <div key={req._id} className="border p-4 rounded mb-3 shadow">
//             <p><strong>Service:</strong> {req.serviceType}</p>
//             <p><strong>Provider:</strong> {req.providerId}</p>
//             <p><strong>User:</strong> {req.userId?.name || "N/A"}</p>
//             <p><strong>Status:</strong> {req.status ? req.status.charAt(0).toUpperCase() + req.status.slice(1) : "Pending"}</p>

//             {req.status?.toLowerCase() === "pending" ? (
//               <div className="mt-2">
//                 <button
//                   onClick={() => handleUpdate(req._id, "accepted")}
//                   className="bg-green-500 text-white px-3 py-1 rounded mr-2"
//                 >
//                   Accept
//                 </button>
//                 <button
//                   onClick={() => handleUpdate(req._id, "rejected")}
//                   className="bg-red-500 text-white px-3 py-1 rounded"
//                 >
//                   Reject
//                 </button>
//               </div>
//             ) : (
//               <div className="mt-2">
//                 <span
//                   className={`px-3 py-1 rounded font-semibold ${
//                     req.status.toLowerCase() === "accepted"
//                       ? "bg-green-100 text-green-700"
//                       : "bg-red-100 text-red-700"
//                   }`}
//                 >
//                   {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
//                 </span>
//               </div>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default ProviderDashboard;




//chck vlaude

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ProviderDashboard = () => {
//   const [requests, setRequests] = useState([]);
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);
  
//   // Multiple providers (mock names for now)
//   const providerIds = ["Rajesh Kumar", "Amit Sharma", "Priya Singh", "Suresh Patel"];
  
//   const providerId = localStorage.getItem('providerName');
  
//   useEffect(() => {
//     fetchAllProviderRequests();
//   }, []);
  
//   const fetchAllProviderRequests = async () => {
//     try {
//       const allRequests = [];
      
//       // Fetch requests for each provider name
//       for (const providerId of providerIds) {
//         const res = await axios.get(`http://localhost:5000/api/requests/provider/${providerId}`);
//         allRequests.push(...res.data); // add all to one array
//       }
      
//       setRequests(allRequests);
//     } catch (err) {
//       console.error("Failed to fetch requests for providers", err);
//     }
//   };
  
//   const handleUpdate = async (id, status) => {
//     try {
//       await axios.put(`http://localhost:5000/api/requests/${id}`, { status });
//       fetchAllProviderRequests(); // refresh
//     } catch (err) {
//       console.error("Failed to update status", err);
//     }
//   };

//   const handleViewDetails = async (requestId) => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/requests/details/${requestId}`);
//       setSelectedRequest(res.data);
//       setShowDetails(true);
//     } catch (err) {
//       console.error("Failed to fetch request details", err);
//       alert("Failed to load request details");
//     }
//   };

//   const closeDetails = () => {
//     setShowDetails(false);
//     setSelectedRequest(null);
//   };
  
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Service Requests (All Providers)</h2>
      
//       {requests.length === 0 ? (
//         <p className="text-gray-500">No requests found.</p>
//       ) : (
//         requests.map((req) => (
//           <div key={req._id} className="border p-4 rounded mb-3 shadow">
//             <p><strong>Service:</strong> {req.serviceType}</p>
//             <p><strong>Provider:</strong> {req.providerId}</p>
//             <p><strong>User:</strong> {req.userId?.name || "N/A"}</p>
//             <p><strong>Status:</strong> {req.status ? req.status.charAt(0).toUpperCase() + req.status.slice(1) : "Pending"}</p>
            
//             <div className="mt-2 flex gap-2">
//               {req.status?.toLowerCase() === "pending" ? (
//                 <>
//                   <button
//                     onClick={() => handleUpdate(req._id, "accepted")}
//                     className="bg-green-500 text-white px-3 py-1 rounded"
//                   >
//                     Accept
//                   </button>
//                   <button
//                     onClick={() => handleUpdate(req._id, "rejected")}
//                     className="bg-red-500 text-white px-3 py-1 rounded"
//                   >
//                     Reject
//                   </button>
//                 </>
//               ) : (
//                 <span
//                   className={`px-3 py-1 rounded font-semibold ${
//                     req.status.toLowerCase() === "accepted"
//                       ? "bg-green-100 text-green-700"
//                       : "bg-red-100 text-red-700"
//                   }`}
//                 >
//                   {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
//                 </span>
//               )}
              
//               <button
//                 onClick={() => handleViewDetails(req._id)}
//                 className="bg-blue-500 text-white px-3 py-1 rounded"
//               >
//                 View Details
//               </button>
//             </div>
//           </div>
//         ))
//       )}

//       {/* Details Modal */}
//       {showDetails && selectedRequest && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold">Request Details</h3>
//               <button
//                 onClick={closeDetails}
//                 className="text-gray-500 hover:text-gray-700 text-xl"
//               >
//                 ×
//               </button>
//             </div>
            
//             <div className="space-y-3">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <p><strong>Service:</strong> {selectedRequest.serviceType}</p>
//                   <p><strong>Provider:</strong> {selectedRequest.providerId}</p>
//                   <p><strong>Date:</strong> {selectedRequest.date}</p>
//                   <p><strong>Time:</strong> {selectedRequest.time}</p>
//                   <p><strong>Duration:</strong> {selectedRequest.duration} hour(s)</p>
//                 </div>
//                 <div>
//                   <p><strong>Phone:</strong> {selectedRequest.phone}</p>
//                   <p><strong>Urgency:</strong> {selectedRequest.urgency}</p>
//                   <p><strong>Payment:</strong> {selectedRequest.paymentMethod}</p>
//                   <p><strong>Price:</strong> {selectedRequest.price}</p>
//                   <p><strong>Location:</strong> {selectedRequest.location}</p>
//                 </div>
//               </div>
              
//               <div>
//                 <p><strong>Address:</strong></p>
//                 <p className="bg-gray-100 p-2 rounded">{selectedRequest.address}</p>
//               </div>
              
//               <div>
//                 <p><strong>Description:</strong></p>
//                 <p className="bg-gray-100 p-2 rounded">{selectedRequest.description}</p>
//               </div>
              
//               <div>
//                 <p><strong>Created At:</strong> {new Date(selectedRequest.createdAt).toLocaleString()}</p>
//               </div>
//             </div>
            
//             <div className="mt-6 flex justify-end">
//               <button
//                 onClick={closeDetails}
//                 className="bg-gray-500 text-white px-4 py-2 rounded"
//               >
//                 Close
//                 </button>
//               </div>
//             </div>
//           </div>
        
//       )}
//     </div>
//   );
// };

// export default ProviderDashboard;





///updated one 10/7
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const ProviderDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');
  const [dashboardStats, setDashboardStats] = useState({
    totalBookings: 0,
    completed: 0,
    totalEarned: 0,
    rating: 0
  });

  const navigate = useNavigate();

  // Environment variable setup
  const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
  const cleanBaseUrl = baseUrl.replace(/\/$/, '');

  const handleLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userName');
  localStorage.removeItem('providerName');
  navigate('/login'); // Redirect to login page
};
  
  // Multiple providers (mock names for now)
  const providerIds = ["Rajesh Kumar", "Amit Sharma", "Priya Singh", "Suresh Patel"];
  
  const providerId = localStorage.getItem('providerName');

  useEffect(() => {
  const token = localStorage.getItem('token');
  if (!token) {
    navigate('/login');
  }
}, []);

  
  useEffect(() => {
    fetchAllProviderRequests();
  }, []);

  // Calculate dashboard statistics based on requests
  useEffect(() => {
    if (requests.length > 0) {
      const stats = calculateDashboardStats(requests);
      setDashboardStats(stats);
    }
  }, [requests]);

  const calculateDashboardStats = (allRequests) => {
    const totalBookings = allRequests.length;
    const completed = allRequests.filter(req => req.status?.toLowerCase() === 'accepted').length;
    
    // Calculate total earned (sum of prices for accepted requests)
    const totalEarned = allRequests
      .filter(req => req.status?.toLowerCase() === 'accepted')
      .reduce((sum, req) => {
        const price = parseFloat(req.price?.replace(/[^0-9.-]+/g, "") || 0);
        return sum + price;
      }, 0);
    
    // Calculate rating (you can adjust this logic based on your needs)
    const rating = totalBookings > 0 ? Math.min(4.8, 3.5 + (completed / totalBookings) * 1.3) : 0;
    
    return {
      totalBookings,
      completed,
      totalEarned: Math.round(totalEarned),
      rating: Math.round(rating * 10) / 10
    };
  };
  
  const fetchAllProviderRequests = async () => {
    try {
      const allRequests = [];
      
      // Fetch requests for each provider name
      for (const providerId of providerIds) {
        // const res = await axios.get(`http://localhost:5000/api/requests/provider/${providerId}`);
         const res = await axios.get(`${cleanBaseUrl}/requests/provider/${providerId}`);
        allRequests.push(...res.data); // add all to one array
      }
      
      setRequests(allRequests);
    } catch (err) {
      console.error("Failed to fetch requests for providers", err);
    }
  };
  
  const handleUpdate = async (id, status) => {
    try {
      // await axios.put(`http://localhost:5000/api/requests/${id}`, { status });
      await axios.put(`${cleanBaseUrl}/requests/${id}`, { status });
      fetchAllProviderRequests(); // refresh
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  const handleViewDetails = async (requestId) => {
    try {
      // const res = await axios.get(`http://localhost:5000/api/requests/details/${requestId}`);
      const res = await axios.get(`${cleanBaseUrl}/requests/details/${requestId}`);
      setSelectedRequest(res.data);
      setShowDetails(true);
    } catch (err) {
      console.error("Failed to fetch request details", err);
      alert("Failed to load request details");
    }
  };

  const closeDetails = () => {
    setShowDetails(false);
    setSelectedRequest(null);
  };

  const StatCard = ({ icon, title, value, bgColor, textColor }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${bgColor}`}>
          <div className={`w-6 h-6 ${textColor} text-xl font-bold flex items-center justify-center`}>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );

  const DashboardView = () => (
    <div className="space-y-6">
      {/* Welcome Message */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h2>
        <p className="text-gray-600">Welcome back! Here's your overview.</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon="📅"
          title="Total Bookings"
          value={dashboardStats.totalBookings}
          bgColor="bg-blue-100"
          textColor="text-blue-600"
        />
        <StatCard
          icon="✅"
          title="Completed"
          value={dashboardStats.completed}
          bgColor="bg-green-100"
          textColor="text-green-600"
        />
        <StatCard
          icon="₹"
          title="Total Earned"
          value={`₹${dashboardStats.totalEarned}`}
          bgColor="bg-purple-100"
          textColor="text-purple-600"
        />
        <StatCard
          icon="⭐"
          title="Rating"
          value={dashboardStats.rating}
          bgColor="bg-yellow-100"
          textColor="text-yellow-600"
        />
      </div>

      {/* Pending Requests Section */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Requests</h3>
        <div className="space-y-4">
          {/* commented for view details functionality */}
          {/* {requests.filter(req => req.status?.toLowerCase() === 'pending').map((req) => (
            <div key={req._id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{req.serviceType}</h4>
                  <p className="text-sm text-gray-600">Provider: {req.providerId}</p>
                  <p className="text-sm text-gray-600">Requested by: {req.userId?.name || "N/A"}</p>
                  <p className="text-sm text-gray-500">Date: {req.date}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleUpdate(req._id, "accepted")}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleUpdate(req._id, "rejected")}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))} */}

          {requests.filter(req => req.status?.toLowerCase() === 'pending').map((req) => (
  <div key={req._id} className="border border-gray-200 rounded-lg p-4">
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{req.serviceType}</h4>
        <p className="text-sm text-gray-600">Provider: {req.providerId}</p>
        <p className="text-sm text-gray-600">Requested by: {req.userId?.name || "N/A"}</p>
        <p className="text-sm text-gray-500">Date: {req.date}</p>
      </div>
      <div className="flex flex-col items-end space-y-2">
        <div className="flex space-x-2">
          <button
            onClick={() => handleUpdate(req._id, "accepted")}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Accept
          </button>
          <button
            onClick={() => handleUpdate(req._id, "rejected")}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Reject
          </button>
        </div>
        <button
          onClick={() => handleViewDetails(req._id)}
          className="mt-2 px-4 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  </div>
))}

          {requests.filter(req => req.status?.toLowerCase() === 'pending').length === 0 && (
            <p className="text-gray-500 text-center py-4">No pending requests</p>
          )}
        </div>
      </div>
    </div>
  );

  const ServiceRequestsView = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Requests (All Providers)</h2>
        
        {requests.length === 0 ? (
          <p className="text-gray-500">No requests found.</p>
        ) : (
          <div className="space-y-4">
            {requests.map((req) => (
              <div key={req._id} className="border border-gray-200 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-sm font-medium text-gray-700 w-20">Service:</span>
                      <span className="text-sm text-gray-900">{req.serviceType}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-sm font-medium text-gray-700 w-20">Provider:</span>
                      <span className="text-sm text-gray-900">{req.providerId}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-sm font-medium text-gray-700 w-20">User:</span>
                      <span className="text-sm text-gray-900">{req.userId?.name || "N/A"}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-sm font-medium text-gray-700 w-20">Status:</span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        req.status?.toLowerCase() === "accepted"
                          ? "bg-green-100 text-green-800"
                          : req.status?.toLowerCase() === "rejected"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {req.status ? req.status.charAt(0).toUpperCase() + req.status.slice(1) : "Pending"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-end space-x-2">
                    {req.status?.toLowerCase() === "pending" && (
                      <>
                        <button
                          onClick={() => handleUpdate(req._id, "accepted")}
                          className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleUpdate(req._id, "rejected")}
                          className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => handleViewDetails(req._id)}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">Local Service Market</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <nav className="flex space-x-6">
                <button
                  onClick={() => setActiveView('dashboard')}
                  className={`text-sm font-medium transition-colors ${
                    activeView === 'dashboard' 
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveView('requests')}
                  className={`text-sm font-medium transition-colors ${
                    activeView === 'requests' 
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Service Requests
                </button>
              </nav>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">👤</span>
                </div>
                <span className="text-sm font-medium text-green-600">{providerId || 'Provider'}</span>
                {/* <button className="text-sm text-red-600 hover:text-red-700 ml-2">
                  Logout
                </button> */}
                <button
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Logout
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeView === 'dashboard' ? <DashboardView /> : <ServiceRequestsView />}
      </div>

      {/* Details Modal - Your existing modal */}
      {showDetails && selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Request Details</h3>
              <button
                onClick={closeDetails}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p><strong>Service:</strong> {selectedRequest.serviceType}</p>
                  <p><strong>Provider:</strong> {selectedRequest.providerId}</p>
                  <p><strong>Date:</strong> {selectedRequest.date}</p>
                  <p><strong>Time:</strong> {selectedRequest.time}</p>
                  <p><strong>Duration:</strong> {selectedRequest.duration} hour(s)</p>
                </div>
                <div>
                  <p><strong>Phone:</strong> {selectedRequest.phone}</p>
                  <p><strong>Urgency:</strong> {selectedRequest.urgency}</p>
                  <p><strong>Payment:</strong> {selectedRequest.paymentMethod}</p>
                  <p><strong>Price:</strong> {selectedRequest.price}</p>
                  <p><strong>Location:</strong> {selectedRequest.location}</p>
                </div>
              </div>
              
              <div>
                <p><strong>Address:</strong></p>
                <p className="bg-gray-100 p-2 rounded">{selectedRequest.address}</p>
              </div>
              
              <div>
                <p><strong>Description:</strong></p>
                <p className="bg-gray-100 p-2 rounded">{selectedRequest.description}</p>
              </div>
              
              <div>
                <p><strong>Created At:</strong> {new Date(selectedRequest.createdAt).toLocaleString()}</p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeDetails}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProviderDashboard;
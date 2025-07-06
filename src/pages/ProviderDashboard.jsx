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

import React, { useEffect, useState } from "react";
import axios from "axios";

const ProviderDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  
  // Multiple providers (mock names for now)
  const providerIds = ["Rajesh Kumar", "Amit Sharma", "Priya Singh", "Suresh Patel"];
  
  const providerId = localStorage.getItem('providerName');
  
  useEffect(() => {
    fetchAllProviderRequests();
  }, []);
  
  const fetchAllProviderRequests = async () => {
    try {
      const allRequests = [];
      
      // Fetch requests for each provider name
      for (const providerId of providerIds) {
        const res = await axios.get(`http://localhost:5000/api/requests/provider/${providerId}`);
        allRequests.push(...res.data); // add all to one array
      }
      
      setRequests(allRequests);
    } catch (err) {
      console.error("Failed to fetch requests for providers", err);
    }
  };
  
  const handleUpdate = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/requests/${id}`, { status });
      fetchAllProviderRequests(); // refresh
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  const handleViewDetails = async (requestId) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/requests/details/${requestId}`);
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
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Service Requests (All Providers)</h2>
      
      {requests.length === 0 ? (
        <p className="text-gray-500">No requests found.</p>
      ) : (
        requests.map((req) => (
          <div key={req._id} className="border p-4 rounded mb-3 shadow">
            <p><strong>Service:</strong> {req.serviceType}</p>
            <p><strong>Provider:</strong> {req.providerId}</p>
            <p><strong>User:</strong> {req.userId?.name || "N/A"}</p>
            <p><strong>Status:</strong> {req.status ? req.status.charAt(0).toUpperCase() + req.status.slice(1) : "Pending"}</p>
            
            <div className="mt-2 flex gap-2">
              {req.status?.toLowerCase() === "pending" ? (
                <>
                  <button
                    onClick={() => handleUpdate(req._id, "accepted")}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleUpdate(req._id, "rejected")}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Reject
                  </button>
                </>
              ) : (
                <span
                  className={`px-3 py-1 rounded font-semibold ${
                    req.status.toLowerCase() === "accepted"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
                </span>
              )}
              
              <button
                onClick={() => handleViewDetails(req._id)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                View Details
              </button>
            </div>
          </div>
        ))
      )}

      {/* Details Modal */}
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
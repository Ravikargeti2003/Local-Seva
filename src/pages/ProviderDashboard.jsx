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
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProviderDashboard = () => {
  const [requests, setRequests] = useState([]);

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

            {req.status?.toLowerCase() === "pending" ? (
              <div className="mt-2">
                <button
                  onClick={() => handleUpdate(req._id, "accepted")}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleUpdate(req._id, "rejected")}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Reject
                </button>
              </div>
            ) : (
              <div className="mt-2">
                <span
                  className={`px-3 py-1 rounded font-semibold ${
                    req.status.toLowerCase() === "accepted"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
                </span>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ProviderDashboard;

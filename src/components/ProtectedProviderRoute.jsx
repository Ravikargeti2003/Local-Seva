// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedProviderRoute = ({ children }) => {
//   const token = localStorage.getItem('token');
//   const providerName = localStorage.getItem('providerName');

//   if (!token || !providerName) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default ProtectedProviderRoute;



import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedProviderRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const isProvider = localStorage.getItem('isProvider') === 'true';

  // Block access if not a provider or not logged in
  if (!token || !isProvider) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedProviderRoute;

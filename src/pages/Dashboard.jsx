
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Star, Calendar, User, Users, CheckCircle, Clock } from 'lucide-react';

const Dashboard = () => {
  const [userType, setUserType] = useState('customer'); // This would come from auth context
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({
    customer: {
      totalBookings: 0,
      completedBookings: 0,
      totalSpent: 0
    },
    provider: {
      totalBookings: 0,
      completedBookings: 0,
      totalEarned: 0,
      rating: 0
    }
  });

  useEffect(() => {
    // Simulate loading user data and bookings
    const mockBookings = [
      {
        id: 1,
        serviceName: 'Electrical Repair',
        providerName: 'John Electrician',
        date: '2024-01-15',
        status: 'completed',
        rating: 5,
        amount: 150
      },
      {
        id: 2,
        serviceName: 'Plumbing Service',
        providerName: 'Mike Plumber',
        date: '2024-01-20',
        status: 'pending',
        amount: 200
      }
    ];
    setBookings(mockBookings);

    const mockStats = {
      customer: {
        totalBookings: 12,
        completedBookings: 10,
        totalSpent: 2500
      },
      provider: {
        totalBookings: 45,
        completedBookings: 42,
        totalEarned: 15000,
        rating: 4.8
      }
    };
    setStats(mockStats);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'cancelled': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const CustomerDashboard = () => (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="text-blue-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Bookings</p>
              <p className="text-2xl font-bold text-gray-900">{stats.customer.totalBookings}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{stats.customer.completedBookings}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-bold">₹</span>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Spent</p>
              <p className="text-2xl font-bold text-gray-900">₹{stats.customer.totalSpent}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Bookings</h2>
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{booking.serviceName}</h3>
                  <p className="text-gray-600">Provider: {booking.providerName}</p>
                  <p className="text-sm text-gray-500">Date: {booking.date}</p>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                  <p className="text-lg font-bold text-gray-900 mt-2">₹{booking.amount}</p>
                  {booking.rating && (
                    <div className="flex items-center mt-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="ml-1 text-sm">{booking.rating}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProviderDashboard = () => (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="text-blue-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Bookings</p>
              <p className="text-2xl font-bold text-gray-900">{stats.provider.totalBookings}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{stats.provider.completedBookings}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-purple-600 font-bold">₹</span>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Earned</p>
              <p className="text-2xl font-bold text-gray-900">₹{stats.provider.totalEarned}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star className="text-yellow-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Rating</p>
              <p className="text-2xl font-bold text-gray-900">{stats.provider.rating}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Bookings */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Pending Requests</h2>
        <div className="space-y-4">
          {bookings.filter(b => b.status === 'pending').map((booking) => (
            <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{booking.serviceName}</h3>
                  <p className="text-gray-600">Requested by: Customer #{booking.id}</p>
                  <p className="text-sm text-gray-500">Date: {booking.date}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Accept
                  </button>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-2">Welcome back! Here's your overview.</p>
              </div>
              
              {/* User Type Switcher (for demo purposes) */}
              <div className="flex space-x-2">
                <button
                  onClick={() => setUserType('customer')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    userType === 'customer' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Customer View
                </button>
                <button
                  onClick={() => setUserType('provider')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    userType === 'provider' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Provider View
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          {userType === 'customer' ? <CustomerDashboard /> : <ProviderDashboard />}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;

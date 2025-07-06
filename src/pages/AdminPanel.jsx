
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, UserCheck, Calendar, DollarSign, TrendingUp, Eye, CheckCircle, X } from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [users, setUsers] = useState([]);
  const [providers, setProviders] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProviders: 0,
    totalBookings: 0,
    pendingApprovals: 0,
    monthlyRevenue: 0
  });

  useEffect(() => {
    // Simulate loading admin data
    const mockUsers = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+91 9876543210', status: 'active', joinDate: '2024-01-15' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+91 9876543211', status: 'active', joinDate: '2024-01-20' },
      { id: 3, name: 'Bob Wilson', email: 'bob@example.com', phone: '+91 9876543212', status: 'blocked', joinDate: '2024-01-25' }
    ];

    const mockProviders = [
      { 
        id: 1, 
        name: 'Mike Electrician', 
        email: 'mike@example.com', 
        phone: '+91 9876543213', 
        service: 'Electrical', 
        status: 'approved',
        rating: 4.5,
        completedJobs: 45,
        joinDate: '2024-01-10'
      },
      { 
        id: 2, 
        name: 'Sarah Plumber', 
        email: 'sarah@example.com', 
        phone: '+91 9876543214', 
        service: 'Plumbing', 
        status: 'pending',
        rating: 0,
        completedJobs: 0,
        joinDate: '2024-01-28'
      }
    ];

    const mockBookings = [
      { 
        id: 1, 
        customerName: 'John Doe', 
        providerName: 'Mike Electrician', 
        service: 'Electrical Repair', 
        date: '2024-01-15', 
        status: 'completed', 
        amount: 1500 
      },
      { 
        id: 2, 
        customerName: 'Jane Smith', 
        providerName: 'Sarah Plumber', 
        service: 'Pipe Fixing', 
        date: '2024-01-20', 
        status: 'pending', 
        amount: 800 
      }
    ];

    const mockStats = {
      totalUsers: 156,
      totalProviders: 43,
      totalBookings: 289,
      pendingApprovals: 8,
      monthlyRevenue: 125000
    };

    setUsers(mockUsers);
    setProviders(mockProviders);
    setBookings(mockBookings);
    setStats(mockStats);
  }, []);

  const handleApproveProvider = (id) => {
    setProviders(providers.map(provider => 
      provider.id === id ? { ...provider, status: 'approved' } : provider
    ));
  };

  const handleRejectProvider = (id) => {
    setProviders(providers.map(provider => 
      provider.id === id ? { ...provider, status: 'rejected' } : provider
    ));
  };

  const handleBlockUser = (id, type) => {
    if (type === 'user') {
      setUsers(users.map(user => 
        user.id === id ? { ...user, status: user.status === 'blocked' ? 'active' : 'blocked' } : user
      ));
    } else {
      setProviders(providers.map(provider => 
        provider.id === id ? { ...provider, status: provider.status === 'blocked' ? 'approved' : 'blocked' } : provider
      ));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
      case 'approved': 
        return 'text-green-600 bg-green-100';
      case 'pending': 
        return 'text-yellow-600 bg-yellow-100';
      case 'blocked':
      case 'rejected': 
        return 'text-red-600 bg-red-100';
      default: 
        return 'text-gray-600 bg-gray-100';
    }
  };

  const OverviewTab = () => (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="text-blue-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <UserCheck className="text-green-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Providers</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalProviders}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="text-purple-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Bookings</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalBookings}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Eye className="text-orange-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">{stats.pendingApprovals}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <DollarSign className="text-yellow-600" size={24} />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Revenue</p>
              <p className="text-2xl font-bold text-gray-900">₹{stats.monthlyRevenue.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Bookings</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Customer</th>
                <th className="text-left py-2">Provider</th>
                <th className="text-left py-2">Service</th>
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">Status</th>
                <th className="text-left py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b">
                  <td className="py-2">{booking.customerName}</td>
                  <td className="py-2">{booking.providerName}</td>
                  <td className="py-2">{booking.service}</td>
                  <td className="py-2">{booking.date}</td>
                  <td className="py-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-2">₹{booking.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const UsersTab = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Manage Users</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Name</th>
              <th className="text-left py-2">Email</th>
              <th className="text-left py-2">Phone</th>
              <th className="text-left py-2">Join Date</th>
              <th className="text-left py-2">Status</th>
              <th className="text-left py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="py-2">{user.name}</td>
                <td className="py-2">{user.email}</td>
                <td className="py-2">{user.phone}</td>
                <td className="py-2">{user.joinDate}</td>
                <td className="py-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className="py-2">
                  <button
                    onClick={() => handleBlockUser(user.id, 'user')}
                    className={`px-3 py-1 rounded text-xs ${
                      user.status === 'blocked' 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-red-600 text-white hover:bg-red-700'
                    }`}
                  >
                    {user.status === 'blocked' ? 'Unblock' : 'Block'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const ProvidersTab = () => (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Manage Providers</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Name</th>
              <th className="text-left py-2">Email</th>
              <th className="text-left py-2">Service</th>
              <th className="text-left py-2">Rating</th>
              <th className="text-left py-2">Jobs</th>
              <th className="text-left py-2">Status</th>
              <th className="text-left py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {providers.map((provider) => (
              <tr key={provider.id} className="border-b">
                <td className="py-2">{provider.name}</td>
                <td className="py-2">{provider.email}</td>
                <td className="py-2">{provider.service}</td>
                <td className="py-2">{provider.rating || 'N/A'}</td>
                <td className="py-2">{provider.completedJobs}</td>
                <td className="py-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(provider.status)}`}>
                    {provider.status}
                  </span>
                </td>
                <td className="py-2">
                  <div className="flex space-x-2">
                    {provider.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleApproveProvider(provider.id)}
                          className="bg-green-600 text-white px-2 py-1 rounded text-xs hover:bg-green-700"
                        >
                          <CheckCircle size={14} />
                        </button>
                        <button
                          onClick={() => handleRejectProvider(provider.id)}
                          className="bg-red-600 text-white px-2 py-1 rounded text-xs hover:bg-red-700"
                        >
                          <X size={14} />
                        </button>
                      </>
                    )}
                    {provider.status !== 'pending' && (
                      <button
                        onClick={() => handleBlockUser(provider.id, 'provider')}
                        className={`px-3 py-1 rounded text-xs ${
                          provider.status === 'blocked' 
                            ? 'bg-green-600 text-white hover:bg-green-700' 
                            : 'bg-red-600 text-white hover:bg-red-700'
                        }`}
                      >
                        {provider.status === 'blocked' ? 'Unblock' : 'Block'}
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-gray-600 mt-2">Manage users, providers, and monitor platform activity.</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'overview' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'users' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Users
            </button>
            <button
              onClick={() => setActiveTab('providers')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'providers' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Providers
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'users' && <UsersTab />}
          {activeTab === 'providers' && <ProvidersTab />}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminPanel;

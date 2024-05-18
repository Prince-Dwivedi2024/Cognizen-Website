import React, { useState } from 'react';
import AdminNav from './AdminNav'

const AdminTeam = () => {
  const [formData, setFormData] = useState({
    id: '',
    type: 'currentMember',
    name: '',
    photo: '',
    email: '',
    phone: '',
    mediumId: '',
    instagramID: '',
    achievements: [],
    passingBatch: '',
    position: 'Member'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      photo: e.target.files[0]
    }));
  };

  const handleAchievementsChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      achievements: value.split(',')
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Add logic to submit formData to the backend server
  };

  return (
    <div>
      <AdminNav />
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create Current Member Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold">ID</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Photo</label>
          <input
            type="file"
            name="photo"
            onChange={handleFileChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Medium ID</label>
          <input
            type="text"
            name="mediumId"
            value={formData.mediumId}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Instagram ID</label>
          <input
            type="text"
            name="instagramID"
            value={formData.instagramID}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Achievements</label>
          <input
            type="text"
            name="achievements"
            value={formData.achievements.join(', ')}
            onChange={handleAchievementsChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Separate achievements with commas"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Passing Batch</label>
          <input
            type="text"
            name="passingBatch"
            value={formData.passingBatch}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Position</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Create Profile
        </button>
      </form>
    </div>
    </div>
  );
};

export default AdminTeam;

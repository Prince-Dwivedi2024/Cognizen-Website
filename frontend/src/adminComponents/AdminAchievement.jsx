//page for admin control on achievement section
import AdminNav from './AdminNav'
import { useState, useEffect } from 'react';

const AdminAchievement = () => {
  const [deleteID, setDeleteID] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    publishDate: '',
    content: '',
    achievers: [],
    achieverID: [],
    photo: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      photo: e.target.files[0]
    }));
  };

  const handlePublishSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    // Handle delete submission
    console.log("Delete article with ID:", deleteID);
  };

  const handleDeleteChange = (e) => {
    setDeleteID(e.target.value);
  };

  return (
    <div>
      <AdminNav />

      <div className='py-[5vh] pb-[12vh] bg-[#e7e3e3]'>
        {/* section new achievement push */}
        <section className='py-[5vh] p-4 px-[10vw] rounded'>
          <div className='text-3xl font-bold mb-4'>Publish Achievement</div>
          <form onSubmit={handlePublishSubmit} className='border bg-white rounded-lg shadow-xl p-8 font-inter font-sans'>
            <div className='mb-2'>
              <label className='block font-semibold'>Title</label>
              <input
                type='text'
                name='title'
                value={formData.title}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Description</label>
              <input
                type='text'
                name='description'
                value={formData.description}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Publish Date</label>
              <input
                type='date'
                name='publishDate'
                value={formData.publishDate}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Content</label>
              <textarea
                name='content'
                value={formData.content}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 rounded'
              />
            </div>

            <div className='mb-2'>
              <label className='block font-semibold'>Achiever/s Name</label>
              <input
                type='text'
                name='author'
                value={formData.achievers[0]}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 my-1 rounded'
              /><input
                type='text'
                name='author'
                value={formData.achievers[1]}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 my-1 rounded'
              />
              <input
                type='text'
                name='author'
                value={formData.achievers[2]}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 my-1 rounded'
              />
              <input
                type='text'
                name='author'
                value={formData.achievers[3]}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 my-1 rounded'
              />
              <input
                type='text'
                name='author'
                value={formData.achievers[4]}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 my-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Achiever ID</label>
              <input
                type='text'
                name='authorID'
                value={formData.achieverID[0]}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 my-1 rounded'
              />
              <input
                type='text'
                name='authorID'
                value={formData.achieverID[1]}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 my-1 rounded'
              />
              <input
                type='text'
                name='authorID'
                value={formData.achieverID[2]}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 my-1 rounded'
              />
              <input
                type='text'
                name='authorID'
                value={formData.achieverID[3]}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 my-1 rounded'
              />
              <input
                type='text'
                name='authorID'
                value={formData.achieverID[4]}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 my-1 rounded'
              />
            </div>

            <div className='mb-4'>
              <label className='block font-semibold'>Image Upload</label>
              <input
                type='file'
                name='image'
                onChange={handleImageChange}
                className='border bg-[#33215c] text-white font-semibold text-sm border-gray-300 p-1 rounded'
              />
            </div>
            <button type='submit' className='bg-green-600 shadow-xl text-white font-semibold px-3 py-2 my-2 rounded'>
              PUBLISH
            </button>
          </form>
        </section>

        {/* section to delete article using unique ID */}
        <section className='py-[5vh] p-4 px-[10vw] rounded'>
          <div className='text-3xl font-bold mb-4'>Delete Achievement</div>
          <form onSubmit={handleDeleteSubmit} className='border w-[30vw] bg-white rounded-lg shadow-xl p-8 font-inter font-sans'>
            <div className='mb-2'>
              <label className='block font-semibold'>Unique Achievement ID</label>
              <input
                type='text'
                name='deleteID'
                value={deleteID}
                onChange={handleDeleteChange}
                className='w-full border border-gray-300 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Re-Enter ID</label>
              <input
                type='text'
                className='w-full border border-gray-300 p-1 rounded'
              />
            </div>

            <button type='submit' className='bg-red-600 shadow-xl text-white font-semibold px-3 py-2 rounded'>
              DELETE
            </button>
          </form>
        </section>


      </div>

    </div >
  )
}

export default AdminAchievement
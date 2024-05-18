import AdminNav from './AdminNav'
import { useState } from "react"
import Footer from "../components/Footer"

const AdminPage = () => {

  const [deleteID, setDeleteID] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    publishDate: '',
    content: '',
    category: '',
    topic: '',
    author: [],
    authorID: [],
    type: '',
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
        {/* section new article push */}
        <section className='py-[5vh] p-4 px-[10vw] rounded'>
          <div className='text-3xl font-bold mb-4'>Publish Article</div>
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
              <label className='block font-semibold'>Category</label>
              <input
                type='text'
                name='category'
                value={formData.category}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Topic</label>
              <input
                type='text'
                name='topic'
                value={formData.topic}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Author/s Name</label>
              <input
                type='text'
                name='author'
                value={formData.author[0]}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 my-1 rounded'
              /><input
                type='text'
                name='author'
                value={formData.author[1]}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 my-1 rounded'
              />
              <input
                type='text'
                name='author'
                value={formData.author[2]}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 my-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Author ID</label>
              <input
                type='text'
                name='authorID'
                value={formData.authorID[0]}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 my-1 rounded'
              />
              <input
                type='text'
                name='authorID'
                value={formData.authorID[1]}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 my-1 rounded'
              />
              <input
                type='text'
                name='authorID'
                value={formData.authorID[2]}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 my-1 rounded'
              />
            </div>
            <div className='flex justify-evenly'>
              <div className='mb-4'>
                <label className='block font-semibold'>Type</label>
                <select
                  name='type'
                  value={formData.type}
                  onChange={handleChange}
                  className=' border border-gray-300 p-2 px-3 rounded'
                >
                  <option value='Article'>Article</option>
                  <option value='ArchiveArticle'>Archive Article</option>
                </select>
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
            </div>
            <button type='submit' className='bg-green-600 shadow-xl text-white font-semibold px-3 py-2 rounded'>
              PUBLISH
            </button>
          </form>
        </section>

        {/* section to delete article using unique ID */}
        <section className='py-[5vh] p-4 px-[10vw] rounded'>
          <div className='text-3xl font-bold mb-4'>Delete Article</div>
          <form onSubmit={handleDeleteSubmit} className='border w-[30vw] bg-white rounded-lg shadow-xl p-8 font-inter font-sans'>
            <div className='mb-2'>
              <label className='block font-semibold'>Unique Article ID</label>
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

export default AdminPage;

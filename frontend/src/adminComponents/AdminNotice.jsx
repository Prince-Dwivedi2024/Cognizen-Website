import AdminNav from './AdminNav';
import { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminPage = () => {
  const [deleteID, setDeleteID] = useState('');
  const [publishLoader, setPublishLoader] = useState(false);
  const [deleteLoader, setDeleteLoader] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    publishDate: '',
    content: '',
    category: '',
    topic: '',
    author: ['', '', ''],
    authorId: ['', '', ''], // Updated field name
    type: 'Article', // Default value
    photo: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split('_');

    if (nameParts[0] === 'author' || nameParts[0] === 'authorId') {
      const index = parseInt(nameParts[1], 10);
      setFormData((prevData) => ({
        ...prevData,
        [nameParts[0]]: prevData[nameParts[0]].map((item, i) => i === index ? value : item)
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      photo: e.target.files[0]
    }));
  };

  const handlePublishSubmit = async (e) => {
    setPublishLoader(true);
    e.preventDefault();
    if (!formData.photo || formData.title || formData.description || formData.publishDate || formData.content || formData.category || formData.topic || formData.author || formData.authorId || formData.type) {
      setPublishLoader(false);
      toast.error(
        'Enter all fields!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('publishDate', formData.publishDate);
    formDataToSend.append('content', formData.content);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('topic', formData.topic);
    formDataToSend.append('author', JSON.stringify(formData.author)); // Convert array to JSON string
    formDataToSend.append('authorId', JSON.stringify(formData.authorId)); // Convert array to JSON string
    formDataToSend.append('type', formData.type);
    formDataToSend.append('photo', formData.photo);

    try {
      const response = await fetch('http://localhost:5000/article', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(
          'Article Published!', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        console.log("Image uploaded and article created successfully:", data);
        setPublishLoader(false);
      }
      else {
        setPublishLoader(false);
        toast.error(
          'Error Encountered!', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    } catch (error) {
      setPublishLoader(false);
      toast.error(
        'Error encountered!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      console.error("Error uploading image and creating article:", error);
    }
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    setDeleteLoader(true);
    if (!deleteID) {
      setDeleteLoader(false);
      toast.error(
        'Enter all fields!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }
    try {
      const response = await fetch(`http://localhost:5000/deletearticle/${deleteID}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        const data = await response.json();
        setDeleteLoader(false);
        toast.success(
          'Article deleted!', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        console.log("Article and associated photo deleted successfully:", data);
      }
      else {
        setDeleteLoader(false);
        toast.error(
          'Error Encountered!', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    } catch (error) {
      setDeleteLoader(false);
      toast.error(
        'Error Encountered!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      console.error("Error deleting article:", error);
    }
  };


  const handleDeleteChange = (e) => {
    setDeleteID(e.target.value);
  };

  return (
    <div>
      <AdminNav />
      <div className='py-[5vh] pb-[12vh] bg-[#e7e3e3]'>
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
              {formData.author.map((author, index) => (
                <input
                  key={index}
                  type='text'
                  name={`author_${index}`}
                  value={author}
                  onChange={handleChange}
                  className='w-full border border-gray-300 p-1 my-1 rounded'
                />
              ))}
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Author ID</label>
              {formData.authorId.map((authorId, index) => (
                <input
                  key={index}
                  type='text'
                  name={`authorId_${index}`} // Updated field name
                  value={authorId}
                  onChange={handleChange}
                  className='w-full border border-gray-300 p-1 my-1 rounded'
                />
              ))}
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
            {!publishLoader ?
              <button type='submit' className='bg-green-600 shadow-xl text-white font-semibold px-3 py-2 rounded'>
                PUBLISH
              </button> :
              <button disabled className='bg-green-600 shadow-xl text-white font-semibold px-3 py-2 rounded'>PUBLISHING..</button>
            }
          </form>
        </section>

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
            {!deleteLoader ?
              <button type='submit' className='bg-red-600 shadow-xl text-white font-semibold px-3 py-2 rounded'>
                DELETE
              </button> :
              <button disabled className='bg-red-600 shadow-xl text-white font-semibold px-3 py-2 rounded'>DELETING..</button>
            }
          </form>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminPage;

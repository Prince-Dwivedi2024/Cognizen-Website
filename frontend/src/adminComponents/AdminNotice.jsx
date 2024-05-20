import AdminNav from './AdminNav';
import { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminNotice = () => {
  const [deleteID, setDeleteID] = useState('');
  const [publishLoader, setPublishLoader] = useState(false);
  const [deleteLoader, setDeleteLoader] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    publishDate: '',
    content: '',
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

  const handlePublishSubmit = async (e) => {
    setPublishLoader(true);
    e.preventDefault();
    if (!formData.photo || !formData.title || !formData.description || !formData.publishDate || !formData.content ) {
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
    formDataToSend.append('photo', formData.photo);

    try {
      const response = await fetch('http://localhost:5000/notice', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(
          'Notice Published!', {
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
        console.log("Image uploaded and notice created successfully:", data);
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
      console.error("Error uploading image and creating notice:", error);
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
      const response = await fetch(`http://localhost:5000/deletenotice/${deleteID}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        const data = await response.json();
        setDeleteLoader(false);
        toast.success(
          'Notice deleted!', {
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
        console.log("Notice and associated photo deleted successfully:", data);
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
      console.error("Error deleting notice:", error);
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
          <div className='text-3xl font-bold mb-4'>Publish Notice</div>
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
            <div className='flex justify-evenly'>
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
          <div className='text-3xl font-bold mb-4'>Delete Notice</div>
          <form onSubmit={handleDeleteSubmit} className='border w-[30vw] bg-white rounded-lg shadow-xl p-8 font-inter font-sans'>
            <div className='mb-2'>
              <label className='block font-semibold'>Unique Notice ID</label>
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

export default AdminNotice;

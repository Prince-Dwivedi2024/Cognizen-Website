import AdminNav from './AdminNav';
import { useEffect, useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminAchievement = () => {
  const [deleteID, setDeleteID] = useState('');
  const [publishLoader, setPublishLoader] = useState(false);
  const [deleteLoader, setDeleteLoader] = useState(false);
  const [achievers, setAchievers] = useState([]);
  const [achievementData, setAchievementData] = useState([]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    publishDate: '',
    content: '',
    achiever: ['', '', ''],
    achieverId: ['', '', ''],
    photo: null
  });

  const fetchArticleData = async () => {
    try {
      const response = await fetch('https://cognizen-website.onrender.com/getachievement');
      const data = await response.json();

      const achievementData = data.map(article => ({
        title: article.title,
        id: article.id
      }));
      setAchievementData(achievementData);
    } catch (e) {
      console.error(e);
    }
  }


  const fetchachievers = async () => {
    try {

      const response = await fetch('https://cognizen-website.onrender.com/members?type=currentMember');
      if (!response.ok) {
        throw new Error('Failed to fetch authors');
      }
      const data = await response.json();

      let array = [];
      for (let i = 0; i < data.length; i++) {
        array.push({ name: data[i].name, id: data[i].id });
      }

      setAchievers(array);
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };

  useEffect(() => {
    fetchachievers();
    fetchArticleData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split('_'); // Split the name to get the field and index

    if (nameParts[0] === 'achiever') {
      const index = parseInt(nameParts[1], 10);
      const [selectedName, selectedId] = value.split('|'); // Split the value into name and id

      setFormData((prevData) => ({
        ...prevData,
        achiever: prevData.achiever.map((item, i) => (i === index ? selectedName : item)),
        achieverId: prevData.achieverId.map((item, i) => (i === index ? selectedId : item))
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
    if (!formData.photo || !formData.title || !formData.description || !formData.publishDate || !formData.content || !formData.achiever || !formData.achieverId) {
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
    formDataToSend.append('achiever', JSON.stringify(formData.achiever)); // Convert array to JSON string
    formDataToSend.append('achieverId', JSON.stringify(formData.achieverId)); // Convert array to JSON string
    formDataToSend.append('photo', formData.photo);

    try {
      const response = await fetch('https://cognizen-website.onrender.com/achievement', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(
          'Achievement Published!', {
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
        console.log("Image uploaded and achievement created successfully:", data);
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
      console.error("Error uploading image and creating achivement:", error);
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
      const response = await fetch(`https://cognizen-website.onrender.com/deleteachievement/${deleteID}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        const data = await response.json();
        setDeleteLoader(false);
        toast.success(
          'Achievement deleted!', {
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
        console.log("Achievement and associated photo deleted successfully:", data);
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
      console.error("Error deleting Achievement:", error);
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

            <div className="mb-2">
              <label className="block font-semibold">Achiever/s Name</label>
              <div className="flex flex-col gap-2">
                {[0, 1, 2].map((index) => (
                  <select
                    key={index}
                    name={`achiever_${index}`} // Format for author fields
                    value={`${formData.achiever[index]}|${formData.achieverId[index]}`} // Access the current value for each author
                    onChange={handleChange} // Use handleChange to update state
                    className="w-full border border-gray-300 p-1 rounded"
                  >
                    <option value="">Select an achiever</option>
                    {achievers.map((auth) => (
                      <option key={auth.id} value={`${auth.name}|${auth.id}`}>
                        {auth.name} - {auth.id}
                      </option>
                    ))}
                  </select>
                ))}
              </div>
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
          <div className='text-3xl font-bold mb-4'>Delete Achievement</div>
          <form onSubmit={handleDeleteSubmit} className='border w-[30vw] bg-white rounded-lg shadow-xl p-8 font-inter font-sans'>
            <div className='mb-2'>
              <label className='block font-semibold'>Unique Achievement ID</label>
              <select
                name='deleteID'
                value={deleteID}
                onChange={handleDeleteChange}
                className='w-full border border-gray-300 p-1 rounded'
              >
                <option value='' disabled>Select an ID to delete</option>
                {achievementData.map((achievement) => (
                  <option key={achievement.id} value={achievement.id}>
                    {achievement.title} - {achievement.id}
                  </option>
                ))}
              </select>

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

export default AdminAchievement;

import AdminNav from './AdminNav';
import { useState, useEffect } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminTeam = () => {
  const [deleteID, setDeleteID] = useState('');
  const [publishLoader, setPublishLoader] = useState(false);
  const [deleteLoader, setDeleteLoader] = useState(false);
  const [members, setMembers] = useState([]);

  const [formData, setFormData] = useState({
    type: "currentMember",
    name: '',
    email: '',
    phone: '',
    mediumId: '',
    instagramId: '',
    XId: '',
    achievements: ['', '', '', '', ''],
    passingBatch: '',
    position: 'Member',
    photo: null
  });

  const fetchMembers = async () => {
    try {
      const response = await fetch('https://cognizen-website.onrender.com/members?type=currentMember');
      const data = await response.json();

      const memberData = data.map(member => ({
        name: member.name,
        id: member.id
      }));

      setMembers(memberData);
      // console.log(members);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split('_');

    if (nameParts[0] === 'achievements') {
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
    console.log(formData)
    setPublishLoader(true);
    e.preventDefault();
    if (!formData.photo || !formData.name || !formData.type || !formData.phone || !formData.position) {
      setPublishLoader(false);
      toast.error(
        'Enter * marked fields!', {
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
    formDataToSend.append('name', formData.name);
    formDataToSend.append('type', formData.type);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('mediumId', formData.mediumId);
    formDataToSend.append('XId', formData.XId);
    formDataToSend.append('instagramId', formData.instagramId);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('passingBatch', formData.passingBatch);
    formDataToSend.append('position', formData.position);
    formDataToSend.append('achievements', JSON.stringify(formData.achievements));

    formDataToSend.append('photo', formData.photo);

    try {
      const response = await fetch('https://cognizen-website.onrender.com/upload', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(
          'Member added!', {
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
        console.log("Image uploaded and member created successfully:", data);
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
      console.error("Error uploading image and creating member:", error);
    }
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    setDeleteLoader(true);
    const memberType = "currentMember";

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
      }
      );
      return;
    }

    try {
      const response = await fetch(`https://cognizen-website.onrender.com/delete/${deleteID}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type: memberType })
      });

      if (response.ok) {
        const data = await response.json();
        setDeleteLoader(false);
        toast.success(
          'Member deleted!', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        }
        );
        console.log("Member and associated photo deleted successfully:", data);
      } else {
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
        }
        );
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
      }
      );
      console.error("Error deleting Member:", error);
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
          <div className='text-3xl font-bold mb-4'>Create Member</div>
          <form onSubmit={handlePublishSubmit} className='border bg-white rounded-lg shadow-xl p-8 font-inter font-san flex flex-col gap-4'>
            <div className='mb-2'>
              <label className='block font-semibold'>Name*</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Email*</label>
              <input
                type='text'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Medium ID</label>
              <input
                type='text'
                name='mediumId'
                value={formData.mediumId}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Instagram ID</label>
              <input
                type='text'
                name='instagramId'
                value={formData.instagramId}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>X/Twitter ID</label>
              <input
                type='text'
                name='XId'
                value={formData.XId}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Mobile*</label>
              <input
                type='text'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Passing Batch</label>
              <input
                type='text'
                name='passingBatch'
                value={formData.passingBatch}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Position*</label>
              <select
                name='position'
                value={formData.position}
                onChange={handleChange}
                className='w-full border border-gray-300 p-1 rounded'
              >
                <option value='Member'>Member</option>
              </select>
            </div>

            <div className='mb-2'>
              <label className='block font-semibold'>Achievements</label>
              {formData.achievements.map((achievements, index) => (
                <input
                  key={index}
                  type='text'
                  name={`achievements_${index}`}
                  value={achievements}
                  onChange={handleChange}
                  className='w-full border border-gray-300 p-1 my-1 rounded'
                />
              ))}
            </div>

            <div className='flex justify-evenly'>
              <div className='mb-4'>
                <label className='block font-semibold'>Image Upload*</label>
                <input
                  type='file'
                  name='image'
                  onChange={handleImageChange}
                  className='border bg-[#33215c] text-white font-semibold text-sm border-gray-300 p-1 rounded'
                />
              </div>
            </div>
            {!publishLoader ?
              <button type='submit' className='bg-green-600 shadow-xl max-w-[10vw] text-white font-semibold px-3 py-2 rounded'>
                CREATE
              </button> :
              <button disabled className='bg-green-600 shadow-xl max-w-[15vw] text-white font-semibold px-3 py-2 rounded'>CREATING..</button>
            }
          </form>
        </section>

        <section className='py-[5vh] p-4 px-[10vw] rounded'>
          <div className='text-3xl font-bold mb-4'>Delete Member</div>
          <form onSubmit={handleDeleteSubmit} className='border w-[30vw] bg-white rounded-lg shadow-xl p-8 font-inter font-sans'>
            <div className='mb-2'>
              <label className='block font-semibold'>Unique Member ID</label>
              <select
                name='deleteID'
                value={deleteID}
                onChange={handleDeleteChange}
                className='w-full border border-gray-300 p-1 rounded'
              >
                <option value='' disabled>Select an ID to delete</option>
                {members.map((member) => (
                  <option key={member.id} value={member.id}>
                    {member.name} - {member.id}
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

export default AdminTeam;

import AdminNav from './AdminNav';
import { useEffect, useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminArticle = () => {
  const [deleteID, setDeleteID] = useState('');
  const [updateID, setUpdateID] = useState('');
  const [publishLoader, setPublishLoader] = useState(false);
  const [deleteLoader, setDeleteLoader] = useState(false);
  const [updateLoader, setUpdateLoader] = useState(false);
  const [specialCat, setSpecialCat] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [articleData, setArticleData] = useState([]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    publishDate: '',
    content: '',
    category: '',
    topic: '',
    author: ['', '', ''],
    authorId: ['', '', ''],
    type: 'Article', // Default value
    photo1: null,
    photo2: null
  });

  const fetchAuthors = async () => {
    try {
      const url = formData.type === 'Article'
        ? 'https://cognizen-website.onrender.com/members?type=currentMember'
        : 'https://cognizen-website.onrender.com/members?type=pastMember';

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch authors');
      }
      const data = await response.json();

      let array = [];
      for (let i = 0; i < data.length; i++) {
        array.push({ name: data[i].name, id: data[i].id });
        // console.warn(array[i]); // Log each name as it's added
      }

      setAuthors(array);
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };

  const fetchArticleData = async () => {
    try {
      const response1 = await fetch('https://cognizen-website.onrender.com/getarticle?type=Article');
      const data1 = await response1.json();

      const response2 = await fetch('https://cognizen-website.onrender.com/getarticle?type=ArchieveArticle');
      const data2 = await response2.json();

      // Ensure data1 and data2 are arrays, or set to empty arrays if they contain "no articles available"
      const articles1 = Array.isArray(data1) ? data1 : [];
      const articles2 = Array.isArray(data2) ? data2 : [];

      let combinedArray = [...articles1, ...articles2];
      const articleData = combinedArray.map(article => ({
        title: article.title,
        id: article.id
      }));
      console.warn(articleData)
      setArticleData(articleData);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchAuthors();
    fetchArticleData();
  }, [formData.type]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split('_'); // Split the name to get the field and index

    if (nameParts[0] === 'author') {
      const index = parseInt(nameParts[1], 10);
      const [selectedName, selectedId] = value.split('|'); // Split the value into name and id

      setFormData((prevData) => ({
        ...prevData,
        author: prevData.author.map((item, i) => (i === index ? selectedName : item)),
        authorId: prevData.authorId.map((item, i) => (i === index ? selectedId : item))
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };


  const handleImageChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0]
    }));
  };

  const handlePublishSubmit = async (e) => {
    setPublishLoader(true);
    e.preventDefault();
    if (!formData.photo1 || !formData.photo2 || !formData.title || !formData.description || !formData.publishDate || !formData.content || !formData.category || !formData.topic || !formData.author || !formData.type) {
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
    formDataToSend.append('author', JSON.stringify(formData.author));
    formDataToSend.append('authorId', JSON.stringify(formData.authorId));
    formDataToSend.append('type', formData.type);
    formDataToSend.append('photo1', formData.photo1);
    formDataToSend.append('photo2', formData.photo2);

    try {
      const response = await fetch('https://cognizen-website.onrender.com/article', {
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
      const response = await fetch(`https://cognizen-website.onrender.com/deletearticle/${deleteID}`, {
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

  const handleSpecialCatChange = (e) => {
    const value = e.target.value;
    setSpecialCat((prevCat) =>
      prevCat.includes(value)
        ? prevCat.filter((cat) => cat !== value)
        : [...prevCat, value]
    );

  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    setUpdateLoader(true);
    try {
      if (!updateID) {
        setUpdateLoader(false);
        toast.error(
          'Enter unique article ID!', {
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

      const response = await fetch(`https://cognizen-website.onrender.com/categorisation/${updateID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ specialCategorisation: specialCat }),
      });

      if (response.ok) {
        toast.success('Article categorisation updated successfully!', {
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
      } else {
        throw new Error('Failed to update categorisation');
      }
    } catch (error) {
      toast.error('Something went wrong', {
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
    } finally {
      setUpdateLoader(false);
    }
  };


  return (
    <div>
      <AdminNav />
      <div className='py-[5vh] pb-[12vh] bg-[#e7e3e3]'>

        {/* publish article */}
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
                style={{ whiteSpace: 'pre-wrap' }}
              />
            </div>


            <div className='mb-4'>
              <label className='block mb-2'>Category</label>
              <select
                name='category'
                value={formData.category}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded'
              >
                <option>Select any one</option>
                <option value='Philoneist'>Philoneist</option>
                <option value='Reviews'>Reviews</option>
                <option value='Opinion'>Opinion</option>
                <option value='World'>World</option>
              </select>
            </div>

            <div className='mb-2'>
              <label className='block font-semibold'>Topic (e.g. Economics,Politics,History)</label>
              <select
                name='topic'
                value={formData.topic}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded'
              >
                <option>Select any one</option>
                <option value='Economics'>Economics</option>
                <option value='Politics'>Politics</option>
                <option value='History'>History</option>
              </select>
            </div>

            <div className="mb-2">
              <label className="block font-semibold">Author/s Name</label>
              <div className="flex flex-col gap-2">
                {[0, 1, 2].map((index) => (
                  <select
                    key={index}
                    name={`author_${index}`} // Format for author fields
                    value={`${formData.author[index]}|${formData.authorId[index]}`} // Access the current value for each author
                    onChange={handleChange} // Use handleChange to update state
                    className="w-full border border-gray-300 p-1 rounded"
                  >
                    <option value="">Select an author</option>
                    {authors.map((auth) => (
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
                <label className='block font-semibold'>Image Upload for 16:9 ratio</label>
                <input
                  type='file'
                  name='photo1'
                  onChange={handleImageChange}
                  className='border bg-[#33215c] text-white font-semibold text-sm border-gray-300 p-1 rounded'
                />
              </div>
              <div className='mb-4'>
                <label className='block font-semibold'>Image Upload for 2:1 ratio</label>
                <input
                  type='file'
                  name='photo2'
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

        {/* delete article */}
        <section className='py-[5vh] p-4 px-[10vw] rounded'>
          <div className='text-3xl font-bold mb-4'>Delete Article</div>
          <form onSubmit={handleDeleteSubmit} className='border w-[30vw] bg-white rounded-lg shadow-xl p-8 font-inter font-sans'>
            <div className='mb-2'>
              <label className='block font-semibold'>Unique Article ID</label>
              <select
                name='deleteID'
                value={deleteID}
                onChange={handleDeleteChange}
                className='w-full border border-gray-300 p-1 rounded'
              >
                <option value='' disabled>Select an ID to delete</option>
                {articleData.map((article) => (
                  <option key={article.id} value={article.id}>
                    {article.title} - {article.id}
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

        {/* special categorisation of articles */}
        <section className='py-[5vh] p-4 px-[10vw] rounded'>
          <div className='text-3xl font-bold mb-4'>Special Categorisation</div>
          <form onSubmit={handleUpdateSubmit} className='border w-[30vw] bg-white rounded-lg shadow-xl p-8 font-inter font-sans'>
            <div className='mb-2'>
              <div className='mb-2'>
                <label className='block font-semibold'>Unique Article ID</label>
                <select
                  name='updateID'
                  value={updateID}
                  onChange={(e) => setUpdateID(e.target.value)}
                  className='w-full border border-gray-300 p-1 rounded'
                >
                  <option value='' disabled>Select an ID to categorize</option>
                  {articleData.map((article) => (
                    <option key={article.id} value={article.id}>
                      {article.title} - {article.id}
                    </option>
                  ))}
                </select>

              </div>
              <label className='block font-semibold py-4'>Select Special Categorisation</label>
              <div className='flex flex-col'>
                <label className='flex items-center'>
                  <input
                    type='checkbox'
                    value='trending'
                    checked={specialCat.includes('trending')}
                    onChange={handleSpecialCatChange}
                    className='mr-2 h-4 w-4 border border-gray-300 rounded focus:ring-blue-500'
                  />
                  Trending
                </label>
                <label className='flex items-center'>
                  <input
                    type='checkbox'
                    value='youMustKnow'
                    checked={specialCat.includes('youMustKnow')}
                    onChange={handleSpecialCatChange}
                    className='mr-2 h-4 w-4 border border-gray-300 rounded focus:ring-blue-500'
                  />
                  You Must Know
                </label>
                <label className='flex items-center'>
                  <input
                    type='checkbox'
                    value='mostRead'
                    checked={specialCat.includes('mostRead')}
                    onChange={handleSpecialCatChange}
                    className='mr-2 h-4 w-4 border border-gray-300 rounded focus:ring-blue-500'
                  />
                  Most Read
                </label>
                <label className='flex items-center'>
                  <input
                    type='checkbox'
                    value='carousel'
                    checked={specialCat.includes('carousel')}
                    onChange={handleSpecialCatChange}
                    className='mr-2 h-4 w-4 border border-gray-300 rounded focus:ring-blue-500'
                  />
                  Carousel
                </label>
              </div>
            </div>
            {!updateLoader ? (
              <button type='submit' className='bg-green-600 shadow-xl text-white font-semibold px-3 py-2 rounded'>
                UPDATE
              </button>
            ) : (
              <button disabled className='bg-green-600 shadow-xl text-white font-semibold px-3 py-2 rounded'>UPDATING..</button>
            )}
          </form>
        </section>


      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminArticle;

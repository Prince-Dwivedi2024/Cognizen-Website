//page for admin control on leadership section
import AdminNav from './AdminNav'
const AdminLeadership = () => {
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
    image: null
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
      image: e.target.files[0]
    }));
  };

  const handlePublishSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div>
      <AdminNav />

      <div className='py-[5vh]'>
        {/* section new article push */}
        <section className='p-4 px-[10vw] rounded'>
          <div className='text-3xl font-bold mb-4'>Publish Article</div>
          <form onSubmit={handlePublishSubmit} className='border rounded-lg shadow-xl p-8 font-inter font-sans'>
            <div className='mb-2'>
              <label className='block font-semibold'>Title</label>
              <input
                type='text'
                name='title'
                value={formData.title}
                onChange={handleChange}
                className='w-full border border-gray-200 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Description</label>
              <input
                type='text'
                name='description'
                value={formData.description}
                onChange={handleChange}
                className='w-full border border-gray-200 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Publish Date</label>
              <input
                type='date'
                name='publishDate'
                value={formData.publishDate}
                onChange={handleChange}
                className='w-full border border-gray-200 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Content</label>
              <textarea
                name='content'
                value={formData.content}
                onChange={handleChange}
                className='w-full border border-gray-200 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Category</label>
              <input
                type='text'
                name='category'
                value={formData.category}
                onChange={handleChange}
                className='w-full border border-gray-200 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Topic</label>
              <input
                type='text'
                name='topic'
                value={formData.topic}
                onChange={handleChange}
                className='w-full border border-gray-200 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Author Name</label>
              <input
                type='text'
                name='author'
                value={formData.author}
                onChange={handleChange}
                className='w-full border border-gray-200 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Author ID</label>
              <input
                type='text'
                name='authorID'
                value={formData.authorID}
                onChange={handleChange}
                className='w-full border border-gray-200 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Type</label>
              <input
                type='text'
                name='type'
                value={formData.type}
                onChange={handleChange}
                className='w-full border border-gray-200 p-1 rounded'
              />
            </div>
            <div className='mb-2'>
              <label className='block font-semibold'>Image Upload</label>
              <input
                type='file' 
                name='image'
                onChange={handleImageChange}
                className='w-full border border-gray-200 p-1 rounded'
              />
            </div>
            <button type='submit' className='bg-blue-500 shadow-xl text-white font-semibold p-2 rounded'>
              PUBLISH
            </button>
          </form>
        </section>

        {/* section to delete article using unique ID */}
        <section></section>

        {/* section for rendering articles with article ID*/}
        <section></section>
      </div>
    </div>
  )
}

export default AdminLeadership
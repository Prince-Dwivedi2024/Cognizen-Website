import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('admin');
    if (auth) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoader(true);
    navigate('/admin');

    // try {
    //   const response = await fetch('https://cognizen-website.onrender.com/login', {
    //     method: 'POST',
    //     body: JSON.stringify({ userID: username, password }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });

    //   const result = await response.json();

    //   if (result.auth) {
    //     localStorage.setItem('admin', JSON.stringify(result.result));
    //     localStorage.setItem('token', result.auth);
    //     setLoader(false);
    //     navigate('/admin');
    //   } else {
    //     console.warn('Error: Invalid credentials');
    //     setLoader(false);
    //     toast.error('Unauthorized Access!', {
    //       position: "bottom-center",
    //       autoClose: 4000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "colored",
    //       transition: Bounce,
    //     });
    //   }
    // } catch (error) {
    //   console.error('Error during login:', error);
    //   setLoader(false);
    //   toast.error('We encountered some error!', {
    //     position: "bottom-center",
    //     autoClose: 4000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //     transition: Bounce,
    //   });
    // }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xs">
        <h2 className="text-center text-2xl font-bold mb-4">Admin Login</h2>
        <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className={`bg-blue-500 w-64 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loader ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loader}
            >
              {loader ? 'Logging In...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;

import { Navigate, Outlet } from 'react-router-dom'

const PrivateComponent = () => {
  const auth = localStorage.getItem('admin');
  return auth ? <Outlet/>:<Navigate to='/admin'/>
}

export default PrivateComponent
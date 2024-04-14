import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { doSignOut } from '../context/authContext/auth';
import { useAuth } from '../context/authContext';


const Nav = () => {

  const navigate = useNavigate()
  const { userLoggedIn } = useAuth()

  return (
    <>
      <nav>
        {
          userLoggedIn
          ?
          <div>
            <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }}></button>
          </div>
          :
        <div>
          <Link to={'/login'}>Login</Link>
          <Link to={'/register'}>Register</Link>
          </div>
        }
      </nav>
    </>
  )
}

export default Nav
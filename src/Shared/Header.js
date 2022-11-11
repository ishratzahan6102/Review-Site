import React, { useContext } from 'react';
import { FaMoon, FaSun, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Header = () => {
  const { user, logOut} = useContext(AuthContext)

    // const {user} = useContext(AuthContext)
//   const menu = <>
//     <li><Link to='/'>Home</Link></li>
//    { 
//         user?.email ?
        
//         <li className='font-semibold'><Link to='/orders'>Orders</Link></li>
      
//         :
//         <li><Link to='/login'>Login</Link></li>
//    }

   
//     <li><Link to='/signup'>Signup</Link></li>
//   </>




const menu = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/publications'>Publications</Link></li>
    <li><Link to='/journal'>Journals</Link></li>
</>


    return (
        <div>
            <div className="navbar mb-0  bg-transparent absolute text-primary-content lg:px-8 sm:px-2">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-52">
                    {menu}
                </ul>
              </div>
               <p className='sm:text-2xl lg:text-4xl font-mono font-bold'><Link to='/'>Enayet Chowdhury</Link></p>
              </div>


            
            <div className="navbar-end">

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal p-0">
                  {menu}
              </ul>
            </div>


            
            </div>

              <div className="flex-none">
            
                {/* profile picture */}
                {
              user?.uid?
              <>
                <Link to='/orders' >My Orders</Link>
                <Link to='/reviews' className='mx-4'>My Reviews</Link>

                <button className='logout ' onClick={logOut}>Log out</button>
                
              <Link to="">{user.photoURL?

                <span className="avatar online">
                  
                    <div className="w-14 rounded-full mx-3">
                      <img src={user.photoURL} alt='' />
                    </div>
                </span>
               
                :
                <FaUser className='fs-4 mx-3'></FaUser>}
              </Link>
            
              </>
              :
              <>
                  <Link to="/login" className='mr-4'>Login</Link>
                  <Link to="/signup">Sign up</Link>
              </>
            }
                {/* profile picture */}

              </div>
            </div>
          </div>
        
    );
};

export default Header;
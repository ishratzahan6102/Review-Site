import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/UserContext';
import { Link , useLocation, useNavigate} from 'react-router-dom';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext)

    const navigate = useNavigate()
    const location  = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [error, setErrors] = useState(' ')

    const handleLogin =  (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        form.reset('')
         setErrors('')
         navigate(from, {replace : true} )
        

        signIn(email, password)
        .then((result) => {
            const user = result.user
            console.log(user)
            form.reset('')
            setErrors('')
            
        })
        .catch((error) => {
            console.error(error)
            setErrors(error.message)
        })
        

    }
    const handleGoogle = () => {
        signInWithGoogle()
        .then((result) =>{
            const user  = result.user
            console.log(user)
        })
        
        .catch(error =>{
            console.error("errors: ", error)
        })
        navigate(from, {replace : true} )
    }
  

    return (
        <div className='h-auto' >
        <div className="hero min-h-screen bg-base-200 py-40">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please, Login!</h1>
        </div>


                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">



                    <form  onSubmit={handleLogin} className="card-body">

                      <div className="form-control">

                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>

                        <input type="email" name='email' placeholder="Enter email" required className="input input-bordered" />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span  className="label-text">Password</span>
                        </label>

                        <input type="password" name='password' placeholder="Password" required className="input input-bordered" />

                      </div>

                      <div className="form-control mt-6">
                      <input  className='btn btn-primary w-100 mb-2' type='submit' value='Login' />
                      </div>



                      <div className='text-start'>
                          <p className='text-red-700 '>{error}</p>
                          <p>New here? <Link to='/signup' className='text-primary'>Signup</Link></p>
                          <button onClick={handleGoogle} className='btn btn-primary w-full mb-2'>Google</button>
                        
                          </div>
                    </form>



                  </div>
                </div>
              </div>
    </div>
    );
};

export default Login;
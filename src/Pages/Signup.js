import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Signup = () => {

  const [error, setError] = useState(null)
  const [accepted, setAccepted] = useState(false)
  const { createUser, signInWithGoogle, updateProfile } = useContext(AuthContext)

  const handleSubmit = (event) => {
      event.preventDefault()
      const form = event.target
      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;
      const confirm = form.confirm.value
      console.log(name, email, photoURL, password, confirm)



      if(password < 6){
          setError('Password can not be less than 6 character')
          return
      }
      if(password !== confirm){
          setError('Password did not match')
          return
      }


      createUser(email, password)
      .then((result) => {
          const user = result.user
          console.log(user)
          form.reset('')
          setError('')
          handleUpdateProfile(name, photoURL)
      })
      .catch((error) => {
          console.error(error)
          setError(error.message)
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
  }


  const handleAccepted = event => {
      setAccepted(event.target.checked)
  }
  const handleUpdateProfile = (name, photoURL) => {
      const profile = {
          displayName: name,
          photoURL: photoURL
      }
      updateProfile(profile)
      .then(() =>{})
      .catch(error =>{
          console.error("errors: ", error)
      })

    }





    return (

        <div className='h-auto' >
            <div className="hero min-h-screen bg-base-200 py-40">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Please, Signup</h1>
            </div>


                      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">



                        <form  onSubmit={handleSubmit} className="card-body">


                          <div className="form-control">

                            <label className="label">
                              <span className="label-text">Username</span>
                            </label>

                            <input type="text" name='name' placeholder="Enter email" required className="input input-bordered" />
                          </div>

                          <div className="form-control">

                            <label className="label">
                              <span className="label-text">photoURL</span>
                            </label>

                            <input type="url" name='photoURL' placeholder="Enter photo url" required  className="input input-bordered" />
                          </div>

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
                          <div className="form-control">
                            <label className="label">
                              <span  className="label-text">Confirm Password</span>
                            </label>

                            <input type="password" name='confirm' placeholder="Confirm password" required className="input input-bordered" />

                          </div>

                          <div className="form-control mt-6">
                          <input  className='btn btn-primary w-100 mb-2' type='submit' value='Sign Up' />
                          </div>



                          <div className='text-start'>
                              <p className='text-red-700 '>{error}</p>
                              <p>Already have an account? <Link to='/login' className='text-primary'>Log In</Link></p>
                              <button onClick={handleGoogle} className='btn btn-primary w-full mb-2'>Google</button>
                            
                              </div>
                        </form>



                      </div>
                    </div>
                  </div>
        </div>
    );
};

export default Signup;
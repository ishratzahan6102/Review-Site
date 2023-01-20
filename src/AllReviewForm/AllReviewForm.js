import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { AuthContext } from '../Context/UserContext';

const AllReviewForm = () => {
    const {books_name, _id, description, img, price, customer} = useLoaderData()
    const {user} = useContext(AuthContext)
   
    const [error, setErrors] = useState(' ')


    const handleReview = event => {
        // event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const message = form.message.value
        const email = user?.email || 'unregistered'
        const photoURL = form.photoURL.value;
   
        console.log(name, message,email, photoURL);
        form.reset('')
        

        const review = {
            book: _id,
            books_name: books_name,
            customer: name,
            email: email,
            message : message,
            photoURL: photoURL
           
        }



        
        console.log(review)
        fetch('https://personal-server-site.vercel.app/reviews' , {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(review),
            
        })
        .then((res) => res.json())
        .then((data) =>{ 
            
            console.log(data);
            
            if(data.acknowledged){
                alert('Thanks for your review')
                form.reset();
            }
        
        })
          
        .catch(err => console.error(err))





        fetch('https://personal-server-site.vercel.app/reviews2' , {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(review),
            
        })
        .then((res) => res.json())
        .then((data) =>{ 
            
            console.log(data);
            
            if(data.acknowledged){
                alert('Thanks for your review')
                form.reset();
            }
        
        })
          
        .catch(err => console.error(err))
    }

    
    return (
        <div className='sm:px-4'>
                <form  onSubmit={handleReview} className='py-40'>
                    <h4 className='font-bold text-white'>Write a review: </h4>
                    <div className='grid grid-cols-1  gap-3'>
                    <input name='name' defaultValue={customer}  type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                    

                    {
                        user?.photoURL? 

                        <input name='photoURL' type="text" placeholder="photoURL"  readOnly defaultValue={user.photoURL}   className="input text-gray-400 input-bordered w-full max-w-xs"  required/>
                        :
                        
                        <input name='photoURL' type="text" placeholder="photoURL"   className="input text-gray-400 input-bordered w-full max-w-xs"  required/>
                    }
                

                   


                    <input name='email' type="text" placeholder="You have to login first" readOnly defaultValue={user?.email}  className="input text-gray-400 input-bordered w-full max-w-xs"  required/>
                    </div>
                    <textarea name='message' className="textarea textarea-primary h-24 my-5 w-full max-w-xs block" placeholder="Add a review" required></textarea>

                    <p className='text-danger '>{error}</p>
                    <input type="submit" className="btn bg-white text-primary" value="Post" />
                </form>
            </div>
    );
};

export default AllReviewForm;
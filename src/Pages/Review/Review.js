import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext';
import ReviewRow from './ReviewRow';

const Review = () => {
    const {user} = useContext(AuthContext)
    const [review, setReview] = useState([])


    useEffect(() => {
        fetch(`https://personal-server-site.vercel.app/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReview(data))
    }, [user?.email])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to cancel this order')
        if(proceed){
            fetch(`https://personal-server-site.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = review.filter(rv => rv._id !== id)
                    setReview(remaining)

                }
            })
            
        }
    }

    return (
        <div className='bg-slate-800  lg:p-40 p-10 py-40 h-full'> 
        <div className='text-white font-bold lg:text-5xl sm:text-4xl text-center'>
            {review.length > 0 ? 'My reviews' : "No reviews available" }
        </div>
        
           
        <div className="overflow-x-auto w-full text-center">
        <table className="table w-full ">

            <tbody className='text-start' >
                {
                    review.map(rv => <ReviewRow
                        key={rv._id}
                        review={rv}
                        handleDelete = {handleDelete}
                        // handleStatusUpdate= {handleStatusUpdate}
                    ></ReviewRow>)
                }
            </tbody>
            
        </table>
    </div>
   
    </div>
    );
};

export default Review;
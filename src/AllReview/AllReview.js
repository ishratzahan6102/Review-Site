import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/UserContext';
import { useLoaderData } from 'react-router-dom';
import Review from '../Pages/Review/Review';
import ReviewCard from '../ReviewCard';


const AllReview = () => {
    const {user} = useContext(AuthContext)
    const {books_name, photo, _id, description, img, price,book} = useLoaderData()
    console.log(_id)
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`https://personal-server-site.vercel.app/reviews2?book=${_id}`)
        .then(res => res.json())
        .then(data =>{ 
            console.log(data)
            
            setReviews(data)}
            )
    }, [_id])


    return (
        <div className='sm:p-10  '>
            
            <div className='py-20'>
           
            <h1 className='text-white'> Total Reviews : {reviews.length}</h1>
                {
                    reviews.map(review => <ReviewCard 
                    key={review._id}
                    review={review}
                    
                    ></ReviewCard>)
                }
            </div>



        </div>
    );
};

export default AllReview;
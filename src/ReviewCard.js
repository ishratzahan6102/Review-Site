import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from './Context/UserContext';

const ReviewCard = ({review}) => {
    const {user} = useContext(AuthContext)
    const {customer, message, photoURL, email} = review
    return (
        <div className='my-4'>
            <div className="card card-side align-middle bg-base-100 shadow-xl p-4">
                
                    <div className="w-24 rounded-xl">

                        
                        <img src={photoURL} alt='' />
                    </div>
                    
                <div className="card-body pt-0">
                    <h2 className="card-title">{customer}</h2>
                    <p className="text-sm text-gray-400">{email}</p>
                    <p>{message}</p>
                </div>

                </div>
        </div>
    );
};

export default ReviewCard;
// import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllReview from '../../AllReview/AllReview';
import AllReviewForm from '../../AllReviewForm/AllReviewForm';
import { AuthContext } from '../../Context/UserContext';
import Orders from '../Orders';
import Review from '../Review/Review';
import './Checkout.css'

const Checkout = () => {
    const {books_name, _id, description, img, price} = useLoaderData()
    const {user} = useContext(AuthContext)


    const handlePlaceOrder = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const phone = form.phone.value
      
        const email = user?.email || 'unregistered'
        console.log(name, phone,email);

        const order = {
            book: _id,
            books_name: books_name,
            price : price,
            customer: name,
            email: email,
        
        }

        console.log(order)
        fetch('https://personal-server-site.vercel.app/orders' , {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(order),
            
        })
        .then((res) => res.json())
        .then((data) =>{ 
            
            console.log(data);
            
            if(data.acknowledged){
                alert('Your order is placed')
                form.reset();
            }
        
        })
          
        .catch(err => console.error(err))
    }


    return (
        <div className='h-auto bg-base-300 lg:px-10 sm:px-6'  >


            {/* Details */}
            <div className="hero py-40 h-auto" >
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl w-64 h-80" />
                    <div className='lg:w-1/2 h-80'>
                    <h1 className="lg:text-5xl font-bold sm:text-4xl">{books_name}</h1>
                    <p className= 'text-gray-500'>Enayet Chowdhury (Author)</p>
                    <p className="pt-6  over">{description}</p>
                    <p className='text-gray-500'>Published on 6 May, 2021</p>
                    <p className='text-5xl py-6 '>{price}</p>

                    </div>

                </div>
            </div>
            {/* Details */}
            
       
            {/* Form */}
            <div className='bg-slate-800 grid lg:grid-cols-2 align-middle sm:grid-cols-1 px-6 py-40'>
                <form onSubmit={handlePlaceOrder} className=''>
                    <h4 className='text-3xl text-white font-bold pb-4'>Place an order</h4>
                    <div className='grid grid-cols-1 gap-3'>
                    <input name='name' type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                    <input name='phone' type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                    <input name='email' type="text" placeholder="Email" defaultValue={user?.email} readOnly className="input text-gray-400 input-bordered w-full max-w-xs" />
                    </div>

                    <input type="submit" className="btn btn-primary mt-4" value="Order" />
                </form>
                <div>

                    
                <div className='relative pt-8'>
                    <img src='https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src='https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80'  alt="" className="absolute right-7 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
                </div>
                    
                    
                </div>
            </div>
            {/* Form */}


            {/* All Reviews */}
            <div className='grid lg:grid-cols-2 justify-center'>



                {/* Form */}
                
                    <AllReviewForm></AllReviewForm>
                
                {/* Form */}


                {/* Reviews */}
               
                    <AllReview></AllReview>
                
                {/* Reviews */}


            </div>
            
            {/* All Reviews */}
        </div>
    );
};

export default Checkout


// text, name, img
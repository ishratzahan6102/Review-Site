import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/UserContext';
import Orderrow from './Orderrow';


const Orders = () => {
    const {user} = useContext(AuthContext)
    const [orders, setOrder] = useState([])


    useEffect(() => {
        fetch(`https://personal-server-site.vercel.app/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [user?.email])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to cancel this order')
        if(proceed){
            fetch(`https://personal-server-site.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = orders.filter(odr => odr._id !== id)
                    setOrder(remaining)

                }
            })
            
        }
    }

    return (
        <div className='bg-slate-800 lg:p-40 p-10 py-40'>
            <div className='h-auto '>
            
            <div className="overflow-x-auto w-full text-center">
            <table className="table w-full ">

            <h2 className='text-4xl font-bold text-white'>Your Orders</h2>
                <tbody  >
                    {
                        orders.map(order => <Orderrow
                            key={order._id}
                            order={order}
                            handleDelete = {handleDelete}
                            // handleStatusUpdate= {handleStatusUpdate}
                        ></Orderrow>)
                    }
                </tbody>
                
        </table>
        </div>
        </div>
        </div>
    );
};

export default Orders;
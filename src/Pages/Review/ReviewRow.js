import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';

const ReviewRow = ({ review, handleDelete}) => {
    const { user, logOut} = useContext(AuthContext)
    const {books_name, customer, message, phone, price, email, book, _id, status} = review
    const [orderBook, setOrderBook] = useState({})

    useEffect( () => {
        fetch(`https://personal-server-site.vercel.app/books/${book}`)
        .then(res => res.json())
        .then(data => setOrderBook(data));
    }, [book])
    return (

      <div className='my-4'>
      <tr  >
           
            <th >
              <label onClick={() => handleDelete(_id)}  htmlFor="my-modal"  className="btn btn-error btn-xs">{status ? status : 'Delete' }</label>

                  {/* Put this part before </body> tag */}
                  <input type="checkbox" id="my-modal" className="modal-toggle" />
                  <div className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Successfully Deleted!</h3>
                     
                      <div className="modal-action">
                        <label htmlFor="my-modal" className="btn btn-primary">Close</label>
                        
                      </div>
                    </div>
                  </div>
              </th>

            <td className='w-1/2'>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle  h-24">
                  {
                          orderBook?.img &&
                          <img src={orderBook.img} alt="Avatar Tailwind CSS Component" />
                      }
                  </div>
                </div>
                <div>
                <span className="">{books_name}</span>
                  <div className="text-sm opacity-50">{phone}</div>
                </div>
              </div>
            </td>

              <td className='w-1/2'>
                <p>Review :</p>
              <span className=" ">{message}</span>
              </td>
        
              <th>
              <label>
                <button   className='btn btn-primary'>Edit Review</button>
              </label>
            </th>
        </tr>
   
      
  
                   

                   </div>
    );
};

export default ReviewRow;
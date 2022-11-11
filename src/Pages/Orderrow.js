import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Orderrow = ({order, handleDelete}) => {
    const {books_name, customer, phone, price, email, book, _id, status} = order
    const [orderBook, setOrderBook] = useState({})

    useEffect( () => {
        fetch(`https://personal-server-site.vercel.app/books/${book}`)
        .then(res => res.json())
        .then(data => setOrderBook(data));
    }, [book])

    

    return (
        <div className='my-4'>
        <tr >
              <th>
                <label>
                  <button  onClick={() => handleDelete(_id)} className='btn btn-error'>X</button>
                </label>
              </th>

              <td className='w-full'>
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
                  <span className="badge badge-ghost">{books_name}</span>
                    <div className="text-sm opacity-50">{phone}</div>
                  </div>
                </div>
              </td>

                <td className='w-full'>
                <span className="badge badge-ghost badge-sm">{price}</span>
                </td>
          
                <th >
                <label htmlFor="my-modal"  className="btn btn-primary btn-xs">{status ? status : 'confirm' }</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Congratulations! Your order is confirmed.</h3>
                       
                        <div className="modal-action">
                          <Link to='/publications'><label htmlFor="my-modal" className="btn btn-primary">Shop more!</label></Link>
                          
                        </div>
                      </div>
                    </div>
                </th>
          </tr>
     
        </div>
    );
};

export default Orderrow;
import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const BooksCard = ({card}) => {
    const {_id, price, ratings, description, img, books_name} = card

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <h2 className="card-title">{books_name}</h2>
                        <p>{description.slice(0,100)}</p>
                    </div>
                    
                    <figure>
                        <PhotoProvider>
                        <PhotoView src="/1.jpg">
                        <img className='w-72 h-80 p-2'  src={img} alt="Shoes" />
                        </PhotoView>
                        </PhotoProvider>
                    </figure>
                    <div className='card-body'>
                    <div className="rating">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked/>
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    </div>
                    <p className='text-4xl'>{price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <p className="btn btn-active btn-secondary">View Details</p>
                    </Link>
                    </div>
            </div>
        </div>
    );
};

export default BooksCard;
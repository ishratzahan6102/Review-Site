import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BooksCard from './BooksCard';

const Publications = () => {
    const [cards, setCards] = useState([])
    
    useEffect(() => {
        fetch('https://personal-server-site.vercel.app/books')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
        <div className='text-center py-40 p-10 bg-slate-800'>
            <div className='text-start'>
                <h3 className='lg:text-4xl text-4xl text-primary font-extrabold btn-secondary'>Books & Research Papers</h3>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-16 gap-y-16 py-10'>
                {
                    cards.map(card => <BooksCard
                    key={card._id}
                    card={card}
                    ></BooksCard>)
                }
                </div>
            </div>
           
        </div>
    );
};

export default Publications;
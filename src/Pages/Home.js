import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import BooksCard from './BooksCard';
import Contact from './Contact';
import Media from './Media';
import Publications from './Publications';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Home = () => {
    const [cards, setCards] = useState([])
    
    useEffect(() => {
        fetch('https://personal-server-site.vercel.app/books')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        
        <div className=' bg-slate-800 text-center'>
            <Banner></Banner>
            <div>
            <div className='text-center pt-40 px-10 bg-slate-800'>
            <div className='text-start'>
                <h3 className='lg:text-4xl text-4xl text-primary font-extrabold btn-secondary'>Books & Research Papers</h3>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-16 gap-y-16 py-10'>
                {
                    cards.slice(0,3).map(card => <BooksCard
                    key={card._id}
                    card={card}
                    ></BooksCard>)
                }
                </div>
            </div>
           
        </div>
            </div>
            <Link to='/publications'>
                <p className="btn btn-active btn-secondary px-10 my-20">See All</p>
            </Link>

            <Media></Media>
            <Contact></Contact>
        </div>
    );
};

export default Home;
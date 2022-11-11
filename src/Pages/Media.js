import React from 'react';

const Media = () => {
    return (
        <div className='py-40'>
            <h2 className='text-4xl font-bold text-white'>My Media Appearances</h2>
             <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-6 p-10'>
            <div className="card  bg-base-100 shadow-xl image-full">
                <figure><img src="https://enayetchowdhury.com/wp-content/uploads/elementor/thumbs/cjBf1NWbJOY-HD-pov9hhftft9xtemh4r9g0e7nxum103stmmh7g8xvnk.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl" >Aired This month</h2>
                    <p>My Content Creation Journey by Channel i Positive Think</p>
                    <div className="card-actions justify-end">
                    <button className="btn bg-red-700"><a target='_blank' href='https://www.youtube.com/watch?v=cjBf1NWbJOY'>Youtube</a></button>
                    </div>
                </div>
            </div>

            <div className="card h-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://enayetchowdhury.com/wp-content/uploads/elementor/thumbs/TN2-pboxo3g4nh33m1cy03hqmpqd4bito9qlun8oi4bzwg.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl">Aired Today</h2>
                    <p>Padma Ferry</p>
                    <div className="card-actions justify-end">
                    <button className="btn bg-red-700"><a target='_blank' href='https://www.youtube.com/watch?v=xFkbkyw5kyY'>Youtube</a></button>
                    </div>
                </div>
            </div>


        </div>
        </div>
    );
};

export default Media;
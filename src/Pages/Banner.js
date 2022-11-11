import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://scontent.fdac11-2.fna.fbcdn.net/v/t1.6435-9/38207524_1837628619664636_3927351269789794304_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=ZA-7zVHAuwQAX_onq1_&_nc_ht=scontent.fdac11-2.fna&oh=00_AfADPGQngbNparOVI8ea82y-V11YlfrLSqooIjWGncMeUQ&oe=6392C012")` }}>

            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content relative text-start text-neutral-content ">
                
            <div className="absolute lg:top-0 lg:right-40 ">
                <h3 className="text-2xl font-bold">HEY! I AM</h3>
                <h1 className="text-6xl font-bold">Enayet</h1>
                <h1 className="text-6xl font-bold">Chowdhury</h1>
                <p className="py-6 text-2xl">A Teacher, Researcher, Writer.</p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import { FaMapMarked, FaLink, FaMailBulk } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 py-40">

            <div className="hero-content w-5/6 flex-col lg:flex-row">
                <div className="text-left lg:text-left">
                    <p>Keep in touch</p>
                <h1 className="text-5xl  font-bold pb-6 text-primary">Want To Connect With Me? Ok Let's Talk!</h1>
                <FaMapMarked></FaMapMarked><span className="py-2 pb-6">Dhaka, Bangladesh</span>
                
                <FaLink></FaLink><span className="py-2 pb-6">http://www.enayetchowdhury.com/</span>
                <FaMailBulk></FaMailBulk><span className="py-2 pb-6">enayetchowdhurybusiness@gmail.com</span>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Subject</span>
                    </label>
                    <input type="text" placeholder="" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="" className="input input-bordered" />
                    </div>
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea className="textarea textarea-primary" placeholder=""></textarea>
                    <div className="form-control mt-6">
                        {/* The button to open modal */}
                        <label htmlFor="my-modal-4" className="btn btn-primary">Submit</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                        <label htmlFor="my-modal-4" className="modal cursor-pointer">
                        <label className="modal-box relative" htmlFor="">
                            <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        </label>
                        </label>
                    
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;
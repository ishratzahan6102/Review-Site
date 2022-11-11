import React from 'react';

const Journal = () => {
    return (
        <div className='h-full py-20  pt-40 px-4'>
             <h2 className='text-4xl text-center font-bold text-primary py-10'>Read our journals</h2>
             <div className="mockup-window border border-base-300  ">
            <div className="flex justify-start p-10  border-t border-base-300">Hello!</div>
            <div className='p-10'>
                <p>Question 1 : Difference between SQL and NoSQL</p><br />
                <p>SQL databases are efficient at processing queries and joining data across tables, making it easier to perform complex queries against structured data, including ad hoc requests. NoSQL databases lack consistency across products and typically require more work to query data, particular as query complexity increases</p><br />

                <p>Question 2 : What is JWT, and how does it work?</p><br />
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.</p><br />

                <p>Question 3 : What is the difference between javascript and NodeJS?</p><br />
                <p>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. 

                2. JavaScript : 
                Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p><br />

                <p>Question 4 : How does NodeJS handle multiple requests at the same time?</p><br />
                <p>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. </p>
            </div>
        </div>
        </div>
       
    );
};

export default Journal;
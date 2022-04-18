import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='blog-items'>
                <h2 className='blue'>Difference between authorization and authentication</h2>
                <p>Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are.</p>
            </div>
            <div className='blog-items'>
                <h2 className='blue' >Why are you using firebase?</h2>
                <p>Firebase, Backend-as-a-Service (BaaS), is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too.</p>
                <h4 className='blue'>What other options do you have to implement authentication?</h4>
                <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </div>
            <div className='blog-items'>
                <h2 className='blue'> What other services does firebase provide other than authentication</h2>
                <p>Firebase continues to innovate and dominate the backend as a service (BaaS) market. It has grown so much that it has become a key component of Google’s mobile strategy. I was a Firebase enthusiastic user in the past, but my concerns about its complexity and cost led me to explore other cloud alternatives.

                    While Firebase offers an increasingly sophisticated array of services that takes care of various development requirements, it’s not always the easiest, fastest, or most affordable option. The article “Reasons Not to Use Firebase” also enlightened me about the risks of using Firebase.

                    In addition to some first-tier competitors such as Parse, the number of cloud providers has increased significantly.  These companies provide services that benefit small developers in unique ways, such as user-friendliness and affordability.</p>
            </div>
        </div>
    );
};

export default Blog;
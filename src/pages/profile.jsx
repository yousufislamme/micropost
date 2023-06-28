import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Head from 'next/head' 
import PostItem from './postitem';
import Loading from './Loading'; 


export default function profile({post}) {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);


  //for loading method.
  useEffect(() => {
    // Simulate an asynchronous task
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json()) 
      .then(data => setPost(data))
  }, []) 

   if (!posts) {
    return <h2>Loading...</h2>; // <-- or loading indicator/spinner/etc
  }
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Navbar/>
      {/* Profile main container */}
      <div
        className='container w-[90%] mx-auto '>
        
          {/* profile items */}
        <div className="flex flex-row gap-3">

          {/* Profile photo */}
          <div className=" flex flex-row w-20 h-20 ml-2 bg-emerald-400 rounded-full "></div>  

          {/* Profile Name */}
          <div className='mt-5'>
            <h1 className='font-semibold text-lg leading-none'>Md. Yousuf</h1>
 
            {/* username */}
            <p className='text-gray-400 leading-none'>@mdyousuf</p>
          </div>
        </div>

          {/* Bio */}
          <div className=' ml-3'>
            <p>I Love 💜 JavaScript🧠 | Next JS | PHP🐘 | 🪵Tailwind | Laravel🕸 | HTML🦴 | CSS 🎨 | WordPress 🎉🎊</p>
          </div>
        
      </div>
      <hr className="w-[80%] mt-2 mx-auto" />
      {/* <PostItem/> */}
         
      
      {/* my post */}
      <div className='grid grid-cols-3 px-10 py-3 gap-3  '>
            {
              posts.map(post => (
                <div className='p-2 rounded-lg border-2 border-slate-300 '>
                  <h2
                    key={post.id}
                    className='font-semibold text-xl'>
                        {post.title}
                  </h2>
                  <p>{post.body}</p> 
                </div>
            ))
            }

      </div>
    </>
  )
}

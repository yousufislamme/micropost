import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popup } from "reactjs-popup"; 



const Navbar = () => {
   const [showPopup, setShowPopup] = useState(false);
   const handleClick = () => {
    setShowPopup(true);
  };
   
  const router = useRouter();
//   for scroll top effect 
   const [isHidden, setIsHidden] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || 0;
    setIsHidden(scrollY >= window.innerHeight);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);


  function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
  };
   const scrollDirection = useScrollDirection();
  return (
    <>
      <div className={`sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"} `}>
        <div className="p-5 font-bold">
          <div
           className="header w-[95%] mx-auto px-5 py-3 bg-white/40 backdrop-blur border-[0.5px] border-purple-600 rounded-lg shadow-md">
        <div className="flex justify-between">
          <ul className='flex'>
            
              <li className='mr-2 font-semibold'>
                <Link className={router.pathname == "/" ? "text-orange-400 " : ""} href='/'>Home</Link></li>
              <li className='mr-2 font-semibold'>
                <Link className={router.pathname == "/profile" ? "text-purple-600" : ""} href='/profile'>Profile</Link></li>
              <li className='mr-2 font-semibold'>
                    <Link className={router.pathname == "/about" ? "text-green-600" : ""} href='/about'>About</Link></li> 
              <li className='mr-2 font-semibold'>
                    <Link className={router.pathname == "/admin" ? "text-cyan-600" : ""} href='/admin'>Admin</Link></li> 
        </ul>

        <ul className='flex '>
          <li className='font-semibold'>
              <Link onClick={handleClick} className={router.pathname == "" ? "text-rose-500" : ""} href='' >
        {showPopup && (
           <Popup
              open={showPopup}
              closeOnEsc={true}
              closeOnOverlayClick={true}
              onClose={() => setShowPopup(false)}
           >
              <div className='w-[300px] h-auto px-5 py-3 rounded-lg backdrop-blur-sm bg-white/30 border-2     duration-75 ease-in-out animate-blob'>
                 <h1 className='text-xl animate-loginText'>Login</h1>
                 <input className='w-full rounded-md my-1 px-3 py-2 outline-none border-[0.4px]' type="text" placeholder="Username" />
                 <input className='w-full rounded-md my-1 px-3 py-2 outline-none border-[0.4px]' type="password" placeholder="Password" />
                 <br />
                 <button className='px-5 py-[4.5px] rounded-md my-1 text-white bg-gradient-to-r from-sky-400 to-sky-700  animate-blob'>Login</button>
              </div>
           </Popup>
                )}
                Login
            </Link>
            </li>
            
        </ul>
           </div>
            
            
         </div>

      </div>
      </div>
        
     
     </>
  )
}

export default Navbar
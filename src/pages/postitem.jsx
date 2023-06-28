import React, { useState } from 'react'

const PostItem = () => { 
   // Character Counter 
  const [characterCount, setCharacterCount] = useState('');
   const [characterTitle, setCharacterTitle] = useState(0);

  const onChangeDesc = (event) => {
    setCharacterCount(event.target.value);
    
  };

  const dscCharCount = characterCount.length;
  

  // for title 
  const [titleCount, setTitleCount] = useState(0);
  const addTitleCount = (e) => {
    setTitleCount(e.target.value.length);
  }
   
   // Post option
const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const textLength = text.length;

  const totalLength = dscCharCount + textLength;

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation if needed

    // Make API request or update local storage
    // Here, we're just logging the post data to the console
    console.log('Title:', title);
    console.log('Content:', content);

    // Clear the form inputs
    setTitle('');
    setContent('');
  };
 
  return (
    <>
        <div className="w-[50%] mx-auto h-auto my-5 px-5 py-3 border-[0.5px] border-slate-700 rounded-lg">
           <form method="post">
              
               <label htmlFor="Title">Title</label>
              <input
                  id="title"
                  value={text}
                  onChange={handleInputChange}
                  className="w-full outline-none border-[0.3px] border-slate-700 rounded-md p-1 focus:ring-1 focus:ring-slate-700"
                  type="text"
                  placeholder="write a title"
          />
                  
               <label htmlFor="Title">Description</label>
              <textarea
                  id="content"
                  value={characterCount}
                  onChange={onChangeDesc}
                  placeholder="Enter some text" 
                  className="w-full h-24 outline-none border-[0.3px] border-slate-700 rounded-md p-1" type="text" />
              <div className='flex justify-between'>
                 <button className="bg-cyan-400 px-5 py-1 rounded-lg text-white font-semibold mt-3">Post</button>
                 <span>{totalLength}</span>

              </div>            
         </form>
        </div>   
       
 
    </>
  )
}

export default PostItem
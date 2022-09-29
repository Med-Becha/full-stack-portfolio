import React from 'react'


const LeftSide = () => {
  return (
   <div className='fixed left-0 bottom-0 px-7 sm:static'>
 <div className='flex flex-col items-center'>
        <div className='flex flex-col gap-3 sm:flex-row'>
            <a href="https://www.facebook.com/med.becha.frikha/" target="_blank" rel="noopener noreferrer"> 
                 <i className="ri-facebook-circle-line text-gray-400 text-xl"></i>
            </a>
            <a href="https://www.instagram.com/med.besha/?hl=fr"  target="_blank" rel="noopener noreferrer">
                 <i className="ri-instagram-line text-gray-400 text-xl"></i> 
            </a>
            <a href="https://www.linkedin.com/in/med-besha-380609238/" target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-box-line text-gray-400 text-xl"></i>
            </a>
            <a href="https://github.com/Med-Becha" target="_blank" rel="noopener noreferrer">
                <i className="ri-github-line text-gray-400 text-xl"></i>
            </a>
    
        
        </div>
        <div className='w-[1px] h-52 bg-[#125f63] sm:hidden'>

        </div>
    </div>
   </div>
  )
}

export default LeftSide
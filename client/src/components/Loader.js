import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[100]'>
        <div className="flex gap-5 text-8xl font-semibold sm:text-4xl">
            <h1 className='text-secondary m'>M</h1>
            <h1 className='text-white b'>B</h1>
            <h1 className='text-tertiary f'>F</h1>
        </div>
    </div>
  )
}

export default Loader
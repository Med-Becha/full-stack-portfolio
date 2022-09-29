import React from 'react'
import { useSelector } from 'react-redux'

import SectionTitle from '../../components/SectionTitle'




const Educations = () => {
    const [selecteditemindex, setselecteditemindex] = React.useState(0)
    const {protfolioData} = useSelector((state) => state.root)
    const {Education} = protfolioData;
  return (


    <div>
        <SectionTitle  title="Education"/>


        <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {Education.map((education, index) =>(
                        <div 
                         onClick={() =>{
                             setselecteditemindex(index)
                            }} className='cursor-pointer'
                            key={index}>

                            <h1
                             className={`text-xl px-5 
                             ${selecteditemindex === index
                                 ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:w-40"
                                 : "text-white"
                                 }`}>
                                    {education.title}
                            </h1>

                        </div>
                   ) )}

                </div>
                <div className='flex items-center justify-center gap-10 sm:flex-col'>
                   
                <div className='flex flex-col gap-5'>
                    <h1 className='text-secondary text-xl'>
                        {Education[selecteditemindex].title}
                    </h1>
                
                    <p className='text-white'>
                    {Education[selecteditemindex].description}   
                    </p>
                </div>
                <img src={Education[selecteditemindex].Image} alt=""  className='h-60 w-72'/>
                </div>
              
            </div>
    </div>
  )
}

export default Educations
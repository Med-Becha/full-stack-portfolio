import React from 'react'
import { useSelector } from 'react-redux';
import SectionTitle from '../../components/SectionTitle'

const Contact = () => {

    const { protfolioData } = useSelector((state) => state.root)
    const { Contact } = protfolioData;
   
    return (
        <div>
            <SectionTitle title={"let's work together"} />
            <div className='flex gap-1 items-center justify-between sm:flex-col'>
                <div className='flex flex-col gap-1'>
                    {Object.keys(Contact).map((key, index) =>
                     key !== "_id" && (
                        <h1 className='ml-5 text-sm' key={index}>
                            <span className='text-white text-2xl'>{key} : </span>
                            <span className='text-white text-2xl'>{Contact[key]}</span>
                        </h1>
                    )
                    )}
                </div>
                <div className='h-[300px]'>
                    <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_eroqjb7w.json" background="transparent" speed="1" autoplay loop ></lottie-player>

                </div>
            </div>
        </div>
    )
}

export default Contact
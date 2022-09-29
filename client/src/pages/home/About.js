import React from 'react'
import { useSelector } from 'react-redux';
import SectionTitle from '../../components/SectionTitle'

const About = () => {
  const {protfolioData} = useSelector((state) => state.root)
  const {About} = protfolioData;
  const {skills, lottieURL, description1,description2} = About;
  return (
    <div>
      <SectionTitle title="About" />
      <div className='flex w-full items-center sm:flex-col'>
        <div className='h-[70vh] w-1/2 sm:w-full'>
          <lottie-player src={lottieURL} background="transparent" speed="1" autoplay loop></lottie-player>
        </div>
        <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
          <p className='text-white'>
            {description1 || ''}
          </p>
          <p className='text-white'>{description2 || ''}
          </p>
        </div>
      </div>
      <div className='py-5'>
        <h1 className='text-tertiary text-xl'>Here are a few tchnologies I`ve been working with recently:</h1>
        <div className='flex flex-wrap gap-10 mt-5'>
          {skills.map((skill, idx)=>(
            <div className='border border-tertiary py-3 px-10' key={idx}>
              <h1 className='text-tertiary'>{skill}</h1>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
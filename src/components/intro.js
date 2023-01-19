import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  once: true
});

const Intro = ( {data} ) => {
   const textData = data.data
   const image = data.check.gatsbyImage
  return (
    <div id='service' className='py-16 '>
        <div data-aos="fade-right"  className='mx-8 mb-4 text-3xl md:text-4xl text-center leading-loose md:leading-loose font-black '>
        High Quality Output,<br/> Awesome Service
        </div>
        <div className='flex flex-col sm:grid sm:grid-cols-3 sm:gap-4 md:gap-8 sm:mx-16 lg:mx-44 items-center'>
            {
                textData.map( content => (
                    <>
                    <div data-aos="fade-right" className='w-4/5 sm:w-full text-center bg-white break-words py-8 mb-8'>
                    <div className=' flex flex-row  justify-center '>
                    <GatsbyImage className='z-10 w-16' alt='vector' image={image} />
                    </div>    
                        <div className='my-8  font-bold text-2xl '>
                           {content.title}
                        </div>
                        <div className='mx-4 lg:mx-12'>
                            {content.description}
                        </div>
                    </div>
                    </>
                ) 
                )
            }
        </div>

    </div>
  )
}

export default Intro
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Button from '../utilities/button'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../utilities/logo'


AOS.init({
  once: true
});
const Hero = ({ image, title, description,btnUrl,btnLabel }) => {
  const descriptionParsed = JSON.parse(description)
//   // raw description is data{ content : [
//     {...,  content : [
//      {
//      ... 
//        value : "   "
//       }
//        ]  
//     }
//   ] 
// }
  const finalDescription = descriptionParsed.content[0].content[0].value
    return (  
  <div data-aos="fade-right" className= 'bg-gray-700'>
    {/* {Header} */}
    <div className='flex h-12 md:pt-16 w-full items-center px-4 space-x-12 '>
      <div className='flex items-center '>
      <div className='hidden md:block md:w-8'></div>
        <Logo/>
        <div className='pl-2 md:pl-2 text-white font-bold text-sm md:text-lg inline-block'>Kinka<br/>Finance</div>
      </div>
      <div className='flex-1'></div>
      <a href="#service" className='text-sm h-full flex items-center text-gray-300' >Services</a>
      <a href="#calculator" className='text-sm h-full flex items-center text-gray-300'>Calculator</a>
      <div className='hidden md:block md:w-4'></div>
  </div>

  {/* {Hero} */}
    <div className='px-6 md:px-0 md:pl-8 py-16 text-center md:text-left  md:py-0 md:pt-16 lg:pt-40 lg:leading-loose md:grid md:grid-cols-2'>
      <div className='md:ml-8'>
    <div className='font-black text-5xl md:text-4xl lg:text-6xl text-white leading-normal '>
    {title}
    </div>
    <div className='mt-8 text-base md:text-lg text-gray-300'>
    {finalDescription}
    </div>
    <div className='mt-8'>
      <Button url={btnUrl} label={btnLabel} />
      </div>
    </div>
    <div className='relative hidden md:block lg:col-span-1'>
    {image && (
      <GatsbyImage className='z-10 w-full h-full' alt='vector' image={image} />
    )}
    </div>
    </div>
  </div>
)
}


export default Hero

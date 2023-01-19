import React from 'react'
import * as styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons'
import Logo from '../utilities/logo'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  once: true
});

const data = [
  {
    cate : 'Location',
    info  : [
      'America','Asia','Europe','Africa'
    ]
  },
  {
    cate : 'Contact',
    info  : [
      'About me','Teams','Profile','FAQ'
    ]
  },
  {
    cate : 'Legals',
    info  : [
      'Privacy','Disclaimer','Terms','Company'
    ]
  }
]

const Footer = () => (
    <div data-aos="fade-right"  className='mt-16 md:grid md:grid-cols-2'>
      <div className='md:order-2 grid grid-cols-3 items-center px-4'>
        {
          data.map( (content,index) => (
            <>
              <div key={index} className='col-span-1 font-bold text-base my-4 '>
                <div className='flex justify-center flex-col text-center md:text-left'>
                {content.cate}
            <ul>
              {
                content.info.map( info => (
                  <li className={`${styles.info} text-gray-500 cursor-pointer my-4 font-normal text-sm`}>{info}</li>
                  ) )
                }  
            </ul> 
                </div>
                </div>
            </>
          ) )
        }
      </div>
      <div>
      <div className='grid grid-cols-2 md:grid-cols-none md:grid-rows-2 my-4 md:px-16 lg:px-44'>
      <div className='ml-4 md:ml-0  flex items-center '>
        <Logo/>
        <div className='pl-2  text-black font-bold text-sm md:text-lg inline-block'>Kinka<br/>Finance</div>
      </div>
      <div className='text-gray-600 text-sm '>
      2021 Award winning Finance Advisor and Lorem ipsum dolor sit amet
      </div>
      </div>
        <div className='text-center font-bold my-4'>JOIN US</div>
      <div className='flex justify-center h-20 '>
      <div className='inline-flex space-x-4'>
        <div className={`${styles.icon} text-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer`}>
        <FontAwesomeIcon  icon={faFacebook} />
        </div>
        <div className={`${styles.icon} text-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer`}>
        <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className={`${styles.icon} text-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer`}>
        <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
      </div>
      </div>
    </div>
)

export default Footer

import React, { useEffect, useState } from 'react'
import Button from '../utilities/button'
import * as styles from './calculator.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  once: true
});

const Calculator = ({btnUrl,btnLabel}) => {
    const [purchase,setPurchase] = useState(500000)
    const [payment,setPayment] = useState(150000)
    const [year,setYear] = useState(15)
    const [rate,setRate] = useState(5)
    const [loanAmount,setLoanAmount] = useState('')
    const [repay,setRepay] = useState('')
    useEffect ( () => {
      setLoanAmount(purchase - payment)
      setRepay(prev => {
        // convert number to percentage
        let rateParse = rate/(100*12);
        let amountOfPayments = year*12
          // use as ( 1 + r ) ^ n
          let para = Math.pow(1+rateParse,amountOfPayments)
          let sum = loanAmount*((para*rateParse)/(para-1))
          return sum;
      })
    },[year,rate,purchase,payment,loanAmount])
  return (
    <div id='calculator' className='md:grid md:grid-cols-2'>
      {/* Text Block */}
      <div data-aos="fade-right"  className='md:order-2 h-fit pb-16 text-center  md:text-left px-4 md:pl-8 '>
        <div>
            <div className='text-xl md:text-3xl  font-bold mb-4'>
            Try our awesome<br/> Calculator
            </div>
            <div className='text-sm md:text-lg text-slate-700'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </div>
        </div>
      <div className='mt-8'>
      <Button url={btnUrl} label={btnLabel} />
      </div>
        </div>
        <div data-aos="fade-right" className='bg-gray-700 h-fit text-center md:text-left pl-4 pr-4 md:pl-4  pt-8 pb-16'>
         <div className='text-xl md:text-3xl  text-white font-bold'> 
        Mortgage Calculator
          </div>
          <div className='my-4 text-xs leading-6 text-slate-300 md:mr-44'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </div>
        <div>
            <form className='grid md:pr-2 md:gap-4 md:grid-cols-2'>

             {/* Purchase Price    */}
             <div>   
             <span  className='text-xl md:text-xs  font-bold text-white' >Purchase Price: ${purchase.toLocaleString('en-US')}</span>
             <input className={`${styles.slider} w-full h-4 mb-4 `} type="range" 
              min={payment} max="1000000" value={purchase} 
              onChange={ (e) => {
                let formatNumber = parseInt(e.target.value)
                setPurchase(formatNumber)} } 
              step="100"/> 
             </div>
            {/* Down Payment */}
             <div>   
             <span  className='text-xl md:text-xs  font-bold text-white' >Down Payment: ${payment.toLocaleString('en-US')}</span>
             <input className={`${styles.slider} w-full h-4 mb-4`} type="range" 
              min="0" max={purchase} value={payment} 
              onChange={ (e) => {
                let formatNumber = parseInt(e.target.value)
                setPayment(formatNumber)} } 
              step="100"/> 
             </div>
            {/* Repayment time */}
             <div>   
             <span  className='text-xl md:text-xs  font-bold text-white' >Repayment time: {year} years</span>
             <input className={`${styles.slider} w-full h-4 mb-4`} type="range" 
              min="1" max="30" value={year} 
              onChange={ (e) => {
                let formatNumber = parseInt(e.target.value)
                setYear(formatNumber)} } 
              step="1"/> 
             </div>


            {/* {Interest Rate} */}
             <div>   
             <span className='text-xl md:text-xs  font-bold text-white' >Monthly Interest Rate: {rate}%</span>
             <input className={`${styles.slider} w-full h-4 mb-4`} type="range" 
              min="1" max="10" value={rate} 
              onChange={ (e) => {
                let formatNumber = parseInt(e.target.value)
                setRate(formatNumber)} } 
              step="1"/> 
             </div>
            </form>
        <div className='text-white text-sm font-bold'>
            Loan amount: <span className='text-orange-500 font-bold text-lg'>${loanAmount.toLocaleString('en-US')}</span>
        </div>  
            <div className='text-white text-sm font-bold'>
            Estimated repayment per month: <span 
            className='text-orange-500 font-bold text-lg'>${repay.toLocaleString('en-US')}</span>
            </div>  
                   
        </div>  
   



         </div>
         
    </div>
  )
}

export default Calculator
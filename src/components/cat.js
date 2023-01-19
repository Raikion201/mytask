import React, { useEffect, useState } from 'react'

const Cat = () => {
    const [url,setUrl] = useState('') 
    useEffect(() =>{

     fetch("https://api.thecatapi.com/v1/images/search")
        .then((res) => res.json())
        .then((data) => {
            setUrl(data[0].url)
        })
    },[])
  return (
    <div className='flex justify-center flex-col items-center'>
        <div className='text-center text-3xl font-bold'>Thank you for taking the time interviewing me !!</div>
        <img className='h-40 w-fit ' src={url} alt='cat' />
    </div>
  )
}

export default Cat
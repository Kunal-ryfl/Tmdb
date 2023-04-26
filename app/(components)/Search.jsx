import React from 'react'
import Image from 'next/image'

const Search = () => {
  return (
    <div className=' pb-10  flex justify-center items-center '>
        <div className=' relative  w-full md:w-4/5 h-screen md:h-96  rounded-b-2xl'>
            <Image fill='true' style={{objectFit:'cover'}} src={'https://images.unsplash.com/photo-1559108318-39ed452bb6c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80'}
            className='  -z-20  filter  brightness-50'
            />

            <h1 className=''>Welcome</h1>
        </div>
        
        </div>
  )
}

export default Search
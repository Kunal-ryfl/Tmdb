import React from 'react'
import { CSSProperties } from 'react';
import ClipLoader from "react-spinners/ClipLoader";


const loading = () => {
  return (
    <div style={{height:"100vh",width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
 <div className='loader'></div>

    </div>
  )
}

export default loading
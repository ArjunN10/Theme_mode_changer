import React, { useState } from 'react'
import './Dark.css'
function DarkWhiteMode() {
const [darkmode,setconvert]=useState(false)
const change=()=>{
    setconvert(!darkmode)
}
   
  return (
    <div style={{background:darkmode?'black':'white'}} className='dark'>
    <div style={{marginBottom:110}}>  
      <h3 style={{color:darkmode?'white':'black'}}>Click the Button for Mode change </h3>
    <button onClick={change} className='btn'>click to change</button>
    </div>

    </div>
  )
}

export default DarkWhiteMode
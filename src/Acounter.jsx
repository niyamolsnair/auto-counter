import React, { useEffect, useState } from 'react'

function Acounter() {
    const[seconds,setSeconds] =useState(0);
    const[minutes,setMinutes] =useState(0);
  
    var acounter;
useEffect(()=>{
    
    acounter=setInterval(()=>{

        setSeconds(seconds+1);
       
        if(seconds===59){
            setMinutes(minutes+1);
            setSeconds(0);
        }
    },1000)
    return()=>clearInterval(acounter);
});

function reset(){
    setSeconds(0);
    setMinutes(0);
}
function stop(){
    clearInterval(acounter);
}


  return (
    <div className='text-center mt-5'>
      
        <h1 className='text-success'>Automatic Counter App</h1>
        <h1>{minutes<10? "0"+minutes: minutes}:{seconds<10?"0"+seconds:seconds}</h1>
       
        <div className='align-items-center'>
        <button className='reset btn btn-primary' onClick={reset} >Reset</button>
        <button className='stop btn btn-danger' onClick={stop}>Stop</button>
        </div>
        </div>
  )
}

export default Acounter
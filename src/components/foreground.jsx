
import Card from "./card"
import { useRef } from "react";

function Foreground() {
    const ref = useRef(null);
  return (
    <div  ref={ref} className='w-full h-screen fixed flex justify-evenly p-20'>
        <div className='w-full h-screen fixed flex justify-evenly p-20'>
        <Card reference={ref} />
        <Card reference={ref} />
        <Card reference={ref} /> 
        </div>
   
       


    </div>
  )
}

export default Foreground

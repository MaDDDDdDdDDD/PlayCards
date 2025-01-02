import { FaFileAlt } from "react-icons/fa";
import { SiAudiobookshelf } from "react-icons/si";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion"



function Card({reference }) {
   
  return (
    <>
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2}   dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className='w-40 absoloute h-60 rounded-[20px] text-white bg-neutral-700 overflow-hidden '>
    <div className=' p-5'>
   <FaFileAlt style={{color:"white"}} />
   <p className='leading-none text-balance mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
   <div className="flex justify-between mt-11">
    <SiAudiobookshelf />
   <FaDownload />
   </div>
   </div>
   <div className="bg-lime-500  w-40 h-10 flex left-0  mt-2 justify-center  items-center">Download Now</div>
   </ motion.div>
   </> 
  );
}

export default Card

import Image from 'next/image';
import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
const Homeu= () => {
  return (

<div className='w-full h-[100%] bg-white items-center gap-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 mx-auto'>
<Image src={"/kaka.jpg"} alt='iiioio' width={300} height={400} className='rounded-full  mt-4 mx-auto' />
<div className='mt-8'>
  <h1 className='text-3xl font-semibold mt-2 '>Hello its Me<br/><span className='font-bold text-3xl mt-2 md:text-4xl lg:text-5xl '>Rizwan Arain</span><br/>
  And I am a <span className='text-blue-600'>Fronted Developer</span></h1>
<p className='mt-10 font-semibold text-2xl md:text-1xl lg:text-1xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Quidem, minus atque nobis consequatur, laudantium velit sapiente omnis<br/> hic ab voluptas incidunt ipsum provident veniam debitis, quae sint soluta quis ducimus.</p>
 
 <div className='mt-8 flex space-x-12 '>
  <Link href={"https://www.youtube.com/@rizwanarain4031"}><FaYoutubeSquare className='w-[2rem] h-[2rem] text-red-600 hover:scale-50'/></Link>
<Link href={"https://www.linkedin.com/in/rizwan-arain-baa5102b7/"}><CiLinkedin className='w-[2rem] h-[2rem] text-blue-600 hover:scale-50'/></Link>
<Link href={"https://github.com/Code-Master-42"}><FaGithubSquare className='w-[2rem] h-[2rem] text-gray-600 hover:scale-50'/></Link>
<Link href={"https://www.instagram.com/rarain904/"}><FaInstagram className='w-[2rem] h-[2rem] text-red-600 hover:scale-50'/></Link>
 </div>
 <button className='mt-8 bg-blue-800 rounded-lg text-white w-40 h-10 font-semibold text-1xl hover:bg-blue-600 mb-6 transition-all duration-200 '>
  Download Cv
 </button></div>
 </div>
 
 
  )
}

export default Homeu


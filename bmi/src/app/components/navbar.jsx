import React from 'react'
import bmi from "../public/bmmi.png"
import Image from 'next/image'
import Link from "next/link"


function Navbar() {
  return (
<nav className={`bg-red-400 flex items-center text-gray-800 sm:text-2xl text-xl h-16 sm:justify-between justify-evenly  `}>
  <div className='sm:pl-10'>
    
    
  <Image
          src={bmi}
          alt="BMI Logo"
          width={60}
          height={50}
        />
  </div>
  <div  >
   <Link className='sm:pr-10 pr-2 hover:text-green-200 pl-3' href="/">BMI</Link>
    <Link className='sm:pr-10 pr-2  hover:text-green-200 ' href="/bminedir">BMI NEDİR?</Link>
    <Link className='sm:pr-10  hover:text-green-200' href="/beslenme">DİYET</Link>
  </div>
</nav>
  )
}

export default Navbar

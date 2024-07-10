import React from 'react'
import bmi from "../public/bmi.png"
import Image from 'next/image'
import Link from "next/link"


function Navbar() {
  return (
<nav className={`bg-red-400 flex items-center text-white sm:text-2xl text-xl h-16 sm:justify-between justify-evenly  `}>
  <div className='sm:pl-10'>
    
    
  <Image
          src={bmi}
          alt="BMI Logo"
          width={90}
          height={50}
        />
  </div>
  <div  >
   <Link className='sm:pr-10 pr-3 hover:text-green-200 pl-3' href="/home">Ana Sayfa</Link>
   <Link className='sm:pr-10 pr-3 hover:text-green-200' href="/beslenme">Beslenme</Link>

    <Link className='sm:pr-10  hover:text-green-200 ' href="/contact">İletişim</Link>
  </div>
</nav>
  )
}

export default Navbar

import React from 'react'
import styles from "./styles.module.css"
import bmi from "../../public/bmi.png"
import Image from 'next/image'
import Link from "next/link"
import { FaHeartbeat } from "react-icons/fa";

function Navbar() {
  return (
<nav className={`bg-red-400 flex items-center h-12 text-lg sm:justify-between justify-evenly  `}>
  <div className='sm:pl-10'>
    
    
  <Image
          src={bmi}
          alt="BMI Logo"
          width={90}
          height={50}
        />
  </div>
  <div  >
   <Link className='sm:pr-10 pr-3 hover:text-gray-700 pl-3' href="./">Ana Sayfa</Link>
   <Link className='sm:pr-10 pr-3 hover:text-gray-700' href="./">Beslenme</Link>
    <Link className='sm:pr-10 hover:text-gray-700 ' href="./">İletişim</Link>
  </div>
</nav>
  )
}

export default Navbar

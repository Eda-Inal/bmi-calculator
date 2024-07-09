import React from 'react'
import styles from "./styles.module.css"
import Link from "next/link"
import { FaHeartbeat } from "react-icons/fa";

function Navbar() {
  return (
<nav className={`${styles.bg} ${styles.font} flex justify-around items-center   mx-auto`}>
  
 
    <div >
    {<FaHeartbeat className='text-2xl' />}
    </div>
    
   <ul className= {`flex  items-center gap-4 ${styles.font}`} >
    <li>
    <Link className='hover:text-cyan-100' href="./">Ana Sayfa</Link>
    </li>
    <li>
    <Link className='hover:text-cyan-100' href="./">Vercel</Link>
    </li>
    <li>
    <Link  className='hover:text-cyan-100'href="./">Ana Sayfa</Link>
    </li>

   </ul>
 
   
</nav>
  )
}

export default Navbar

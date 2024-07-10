import React from 'react'
import body from '../public/body.png';
import Image from 'next/image';
import styles from "./styles.module.css"


function Home() {
  return (
    <div className='flex sm:flex-row flex-col justify-center text-2xl mt-10 '>
  <div className='w-2/5'>
  < Image className='sm:w-3/5 w-2/5'
        src={body}
        alt='body'
        />
  
  </div>



  <div className='2/5'>
  <div className='flex flex-col  mt-20 text-xl'>
  <div className='flex flex-row mb-10'>
    <div className='w-1/2 pr-2'>Boy:</div>
    <div>
    <input type="text" 
className='bg border-gray-500 border-2  w-40 pl-1 ' />
    </div>

  </div>
  < div className='flex  flex-row'>
  <div className='w-1/2 pr-2 mb-10'>Kilo:</div>
  <div>
  <input type="text" 
className='bg border-gray-500  border-2 w-40' />
  </div>

  </div>
  <div className='flex flex-row mb-10'>
    <div className='w-1/2 pr-2'>Yaş:</div>
    <div>
    <input type="text" 
className='bg border-gray-500  border-2 w-40' />
    </div>

  </div>
  <div className='flex flex-row'>
    <div className='w-1/2 pr-2'>Cinsiyet</div>
    <div >
      <select className='w-40 border-2 border-gray-500 ' value="Kadın">
      <option value="erkek">Erkek</option>
      <option value="kadin">Kadın</option>
      </select>
    </div>
  </div>
  <div className='mt-10 sm:mx-auto'>
  <button class="bg-red-400 hover:bg-red-300 text-black  py-2 px-4 border border-red-400 rounded">
  Button
</button>
  </div>
  </div>
 
  
  
  </div>
    </div>
  )
}

export default Home

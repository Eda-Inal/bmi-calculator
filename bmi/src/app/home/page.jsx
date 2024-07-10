import React from 'react'
import body from '../public/human.png';
import Image from 'next/image';
import styles from "./styles.module.css"


function Home() {
  return (
    <div className='flex sm:flex-row flex-col justify-center text-2xl mt-10 '>
  <div className='w-2/5 sm:mx-0 mx-auto  sm:mt-20 md:mt-16'>
  < Image className='sm:w-3/5 w-3/5'
        src={body}
        alt='body'
        />
  
  </div>



  <div className='2/5'>
  <div className='flex flex-col  mt-20 text-xl'>
  <div className='flex flex-row  mb-10'>
    <div className='sm:w-1/2 w-1/5  ml-20  sm:ml-0 pr-2'>Boy:</div>
    <div>
    <input type="text" 
className='bg border-gray-500 border-2 w-40 pl-1 ' />
    </div>

  </div>
  < div className='flex  flex-row'>
  <div className='sm:w-1/2 w-1/5 pr-2  ml-20  sm:ml-0 mb-10'>Kilo:</div>
  <div>
  <input type="text" 
className='bg border-gray-500  border-2 w-40' />
  </div>

  </div>
  <div className='flex flex-row mb-10'>
    <div className='sm:w-1/2 w-1/5  ml-20  sm:ml-0 pr-2'>Yaş:</div>
    <div>
    <input type="text" 
className='bg border-gray-500  border-2 w-40' />
    </div>

  </div>
  <div className='flex flex-row'>
    <div className='sm:w-1/2 w-1/5 ml-20  sm:ml-0  pr-2'>Cinsiyet</div>
    <div >
      <select className='w-40 border-2 border-gray-500 ' value="Kadın">
      <option value="erkek">Erkek</option>
      <option value="kadin">Kadın</option>
      </select>
    </div>
  </div>
  <div className='mt-10 sm:ml-36 flex justify-center'>
  <button class="bg-red-400 hover:bg-red-300 text-white  py-2 px-4 border border-red-400 rounded">
  Button
</button>
  </div>
  </div>
 
  
  
  </div>
    </div>
  )
}

export default Home

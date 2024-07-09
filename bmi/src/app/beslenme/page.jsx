import React from 'react'
import Image from 'next/image'
import goodfood from '../public/plate2.jpg';
import skin from '../public/skin.jpg'
import hair from '../public/hair.webp'
import body from '../public/body.png'

function Beslenme() {
  return (
    <div>
   <div className='flex sm:flex-row flex-col justify-center items-center mx:auto   sm:mx-auto sm:justify-center mt-12'>
     <div className='sm:w-1/3 w-1/2 '>
     <div className='w-full sm:w-3/4 mt-10 sm:mt-0'>
     <Image className='sm:w-[350] w-[200]'
        src={goodfood}
        alt="healthy food"
        />
     </div>

     
     </div>
      
     
      <div className='w-1/2 sm:w-1/3 sm:mt-3 mt-5'>
      <h1 className='sm:text-2xl text-xl'>Sağlıklı beslenmenin sırrı nedir ?</h1>
      <div>
        <ul className='mt-5 list-disc'>
            <li>Lifli besinleri tercih edin.</li>
            <li>Her öğün taze sebze-meyve tüketin.</li>
            <li>Sağlıklı yağları seçin.</li>
            <li>Daha az şeker ve şekerli besin tüketin.</li>
            <li>Fiziksel aktiviteyle beslenmenizi dengede tutun.</li>
        </ul>
      </div>
      
      
      </div>
    </div>
    <h1 className='sm:text-2xl text-xl text-center mt-10'>Peki sağlıklı beslenmek neden bu kadar önemli?</h1>
    < div className=' flex sm:flex-row items-center justify-between flex-col'>
        <div className='w-1/4'>
        <Image
        src={skin}
        alt='skin'
        />
        </div>
        <div className='w-1/4'>
        <Image
        src={hair}
        alt='hair'
        />
        </div>
        <div className='w-1/4'>
        <Image
        src={body}
        alt='body'
        />
        </div>
    </div>

    </div>
  
  )
}

export default Beslenme

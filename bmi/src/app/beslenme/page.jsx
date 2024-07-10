import React from 'react'
import Image from 'next/image'
import goodfood from '../public/plate2.jpg';
import breakfast from '../public/breakfast.png'
import lunch from '../public/lunch.png'
import dinner from '../public/dinner.png'
import { FaRegSmileBeam } from "react-icons/fa";


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
    <h1 className='flex sm:mt-8 mt-6  text-2xl   mx-auto justify-center'>1 Günlük Örnek Diyet Listesi
    <span><FaRegSmileBeam className='ml-2' /></span>
    </h1>
    <div className='flex sm:flex-row flex-col justify-center px-10 sm:mt-10 mt-6'>
      <div>
<div className='sm:mr-10 mb-5'> 
<div className='flex items-center'>
        <h1 className='text-2xl border-b-2 border-black'>Sabah Kahvaltısı</h1>
        <Image className='ml-2' src={breakfast} alt="healthy food" width={50} />
      </div>
<ul className='list-disc'>
  <li>1 tane haşlanmış yumurta</li>
  <li>1 kibrit kutusu kadar az yağlı peynir</li>
  <li>5-6 adet zeytin</li>
  <li>Domates, salatalık, yeşillik (serbest)</li>
</ul>

</div>
      </div>
      <div>
      <div>
<div className='sm:mr-10 mb-5' > 
<div className='flex items-center'>
        <h1 className='text-2xl border-b-2 border-black'>Öğlen Yemeği</h1>
        <Image className='ml-2' src={lunch} alt="healthy food" width={50} />
      </div>
<ul className='list-disc'>
  <li>3 köfte büyüklüğü kadar et/tavuk/hindi/balık</li>
  <li>1 ince dilim ekmek (tam buğday, bol tahıllı, çavdar)</li>
  <li>4 yemek kaşığı yoğurt veya 2 su bardağı ayran</li>
  <li>Sınırsız yağsız salata</li>
</ul>

</div>
      </div>
      </div>
      <div>
      <div>
<div> 
<div className='flex items-center'>
        <h1 className='text-2xl border-b-2 border-black'>Akşam Yemeği</h1>
        <Image className='ml-2' src={dinner} alt="healthy food" width={50} />
      </div>
<ul className='list-disc'>
  <li>8-10 yemek kaşığı sebze yemeği</li>
  <li>6-7 yemek kaşığı bulgur pilavı</li>
  <li>2-3 yemek kaşığı cacık</li>
  <li>Salata (serbest)</li>
</ul>

</div>
      </div>
      </div>
    </div>

    </div>
  
  )
}

export default Beslenme

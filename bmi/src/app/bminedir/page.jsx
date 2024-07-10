import React from 'react'
import Link from 'next/link'

function Contact() {
  return (
    <div>
     <div className='bg-green-300  text-black border-2 rounded-lg border-gray  sm:mt-5  mt-3 sm:w-2/3 w-full h-1/4 text-center mx-auto'>
   <div className=' mt-5'>
<h1 className='text-3xl text- mb-3'>Vücut Kitle İndeksi (BMI) Nedir? Nasıl Hesaplanır?</h1>
<div>
Vücut kitle indeksi (BMI), kişinin sahip olduğu vücut yağ miktarını tahmin etmek için boyun kiloya oranını ölçen tıbbi bir tarama aracıdır. BMI, kilogram cinsinden ağırlığı metre cinsinden boyun karesine bölerek hesaplanır.

Çoğu insanda vücut kitle indeksi, vücut yağıyla ilişkilidir. Sayı ne kadar yüksekse, o kadar fazla vücut yağı olabilir ancak bazı durumlarda bu ilişki doğru olmayabilir. BMI tek başına sağlık durumunu teşhis edemez. Sağlık uzmanları, bir kişinin sağlık durumunu ve muhtemel risklerini değerlendirmek için vücut kitle indeksi ile beraber diğer araçları ve testleri kullanırlar.

Yüksek vücut yağı; kalp hastalığı, felç ve tip 2 diyabete yol açabilir. Düşük vücut yağı ise yetersiz beslenme ile ilişkili olabilir. Doğru miktardaki vücut yağı, vitamin ve minerallerin vücuda girmesine yardımcı olur. Ayrıca vücut için bir enerji kaynağı sağlar, vücut ısısının korunmasına yardımcı olur ve organları korur.

Bir çocuğun veya gencin kilosunu değerlendirmek için standart BMI çizelgesi kullanılmamalıdır. Yaşa ve boya göre en uygun ağırlık aralığı hakkında çocuk doktoruyla konuşulmalıdır.

Vücut Kitle İndeksi (BMI) ne için kullanılır?
Sağlık uzmanları, ağırlık türlerini teşhis etmeye yardımcı olması amacıyla ve belirli sağlık durumları için bir tarama aracı olarak vücut kitle indeksini kullanırlar.
</div>
   </div>
    </div> 
    <div className='flex flex-col items-center justify-center mt-10'>
    <button className='bg-red-400 hover:bg-red-300 rounded-lg p-4 text-xl text-black'>
      <Link href='/'> BMI HESAPLA</Link>
     
      </button>
    </div>
   
    </div>
    
  )
}

export default Contact

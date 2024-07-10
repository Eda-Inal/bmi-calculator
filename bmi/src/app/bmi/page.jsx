'use client';
import React from 'react'
import body from '../public/human.png';
import Image from 'next/image';
import styles from "./styles.module.css"
import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";



function Home() {
  const[height,setHeight] = useState("");
  const[weight,setWeight] = useState("");
const[age,setAge] = useState("");
const [alert,setAlert] = useState(false);
const [bmiResult, setBmiResult] = useState(null);
const [invalidInputAlert, setInvalidInputAlert] = useState(false);
const handleBtn = () => {
  if (height === "" || weight === "" || age === "") {
    setAlert(true);
  } 

  else if (isNaN(height) || isNaN(weight) || isNaN(age)) {
    setInvalidInputAlert(true);
  } else {
    setAlert(false);
    setInvalidInputAlert(false);
    calculate();
  }
};
const closeAlert = () => {
  setAlert(false);
};
const closeInvalidInputAlert = () => {
  setInvalidInputAlert(false);
  setAge("");
    setHeight("");
    setWeight("");
};

const closeBmiResult = () => {
  setBmiResult(null);
  setAge("");
    setHeight("");
    setWeight("");
};
const calculate = () => {
  if (height !== "" && weight !== "") {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    let category = "";
    if (bmi <= 18.5) {
      category = "Zayıf";
    } else if (bmi > 18.5 && bmi <= 24.9) {
      category = "Normal ağırlıkta";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      category = "Kilolu";
    } else if (bmi >= 30.0 && bmi <= 34.9) {
      category = "1. derece obezite";
    } else if (bmi >= 35.0 && bmi <= 39.9) {
      category = "2. derece obezite";
    } else {
      category = "3. derece obezite";
    }
    setBmiResult({ bmi: bmi.toFixed(1), category });
  }
};

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
              onChange={(e)=>setHeight(e.target.value)}
              value={height}
                className='bg border-gray-500 border-2 w-40 pl-1 ' />
            </div>

          </div>
          < div className='flex  flex-row'>
            <div className='sm:w-1/2 w-1/5 pr-2  ml-20  sm:ml-0 mb-10'>Kilo:</div>
            <div>
              <input type="text"
              onChange={(e)=>setWeight(e.target.value)}
              value={weight}
                className='bg border-gray-500 pl-1 border-2 w-40' />
            </div>

          </div>
          <div className='flex flex-row mb-10'>
            <div className='sm:w-1/2 w-1/5  ml-20  sm:ml-0 pr-2'>Yaş:</div>
            <div>
              <input type="text"
              onChange={(e)=>setAge(e.target.value)}
              value={age}
                className='bg border-gray-500 pl-1  border-2 w-40' />
            </div>

          </div>
          
          <div className='mt-2 sm:ml-36 flex justify-center'>
            <button class="bg-red-400 hover:bg-red-300 text-white  py-2 px-4 border border-red-400 rounded" onClick={handleBtn}>
              Button
            </button>
          </div>
        </div>



      </div>
      {alert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-red-400 text-white p-4 rounded relative w-80">
            <FaExclamationCircle className="inline-block mr-2" />
            Oops, bu alanları doldurmanız gerekmektedir!
            <button onClick={closeAlert} className="absolute top-2 right-2">
              <IoMdCloseCircle size={24} />
            </button>
          </div>
        </div>
      )}
        {invalidInputAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-red-400 text-white p-4 rounded relative w-80">
            <FaExclamationCircle className="inline-block mr-2" />
            Geçersiz sayı girdiniz!
            <button onClick={closeInvalidInputAlert} className="absolute top-2 right-2">
              <IoMdCloseCircle size={24} />
            </button>
          </div>
        </div>
      )}
      {bmiResult && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-green-400 text-black p-4 rounded relative w-80">
            <p>
            BMI Değeriniz: <br />
             {bmiResult.bmi} ({bmiResult.category})
            </p>
            
            <button onClick={closeBmiResult} className="absolute top-2 right-2">
              <IoMdCloseCircle className='text-red-400' size={24} />
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

export default Home

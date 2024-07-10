import React from 'react';
import { FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <div className='fixed bottom-0 left-0 w-full bg-gray-200 py-4'>
      <div className='flex flex-row items-center justify-center'>
        <div>
          <a href="https://github.com/Eda-Inal" target="_blank" rel="noopener noreferrer" className='text-black hover:text-gray-500 '>
            Developed by Eda-Inal
          </a>
        </div>
        <div>
          <FaHeart className='text-red-400 ml-2' />
        </div>
      </div>
    </div>
  );
}

export default Footer;


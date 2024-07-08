import React, { useContext } from 'react';
import Link from 'next/link';
import { UserLocation } from '@/context/locationContext';

const Header = () => {
  const { address } = useContext(UserLocation);

  return (
    <header className='absolute z-20 shadow w-full'>
      <Link
        href='/setLocation'
        className='flex cursor-pointer flex-row justify-center gap-1 p-4'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6 align-middle text-blue-500'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
          />
        </svg>

        {address !== '' ? (
          <div className='flex flex-row gap-1'>
            <p className='pointer align-middle text-blue-500'>{address}</p>
          </div>
        ) : (
          <p className='align-middle text-blue-500 underline'>
            Ingresa tu dirección
          </p>
        )}
      </Link>
    </header>
  );
};

export default Header;

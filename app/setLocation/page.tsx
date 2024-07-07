'use client';
import React, { useContext } from 'react';
import { UserLocation } from '@/context/locationContext';
import { useRouter, useParams } from 'next/navigation';
import MapSelector from '@/components/MapSelector';

const SetLocation = () => {
  const { location, setLocation, setAddress, address, setLocationURL } =
    useContext(UserLocation);

  const router = useRouter();

  return (
    <div className='container m-auto flex min-h-screen flex-col gap-y-6 bg-gradient-to-t from-stone-100 to-white p-4 lg:max-w-3xl'>
      <h1 className='text-center text-3xl font-semibold'>
        Marca en el mapa tu ubicación
      </h1>
      <MapSelector
        location={location}
        setLocation={setLocation}
        setAddress={setAddress}
        setLocationURL={setLocationURL}
      />
      <button
        className='w-full rounded-lg bg-blue-500 px-4 py-2 text-white disabled:bg-gray-400'
        onClick={() => {
          router.push('/');
        }}
        disabled={address === ''}
      >
        Guardar ubicación
      </button>
    </div>
  );
};

export default SetLocation;

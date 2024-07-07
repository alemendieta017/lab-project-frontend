'use client';
import React, { useState, useCallback } from 'react';
import InputFileDropdown from '@/components/InputFileDropdown';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '@/config/config';

function UploadRecipe() {
  const [files, setFiles] = useState([]);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null,
  );
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY || '',
  });

  const handleMapClick = useCallback((event) => {
    setLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append('location', JSON.stringify(location));

    try {
      const response = await fetch('/api/submit-recipe', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        alert('Datos enviados con éxito');
      } else {
        alert('Error al enviar datos');
      }
    } catch (error) {
      console.error('Error al enviar datos', error);
      alert('Error al enviar datos');
    }
  };

  return (
    <div className='container m-auto min-h-screen overflow-x-hidden bg-stone-100 p-4'>
      <div className='flex flex-col gap-6 py-10 text-center'>
        <h1 className='text-4xl font-semibold'>
          Sube tu receta médica y nos encargamos del resto
        </h1>
        <p className='text-lg'>
          ¿No entiendes la letra de tu doctor? Nosotros cotizamos tus estudios
          clínicos por ti.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className='divide-black-300 flex flex-col gap-y-6 rounded-lg bg-white p-4'
      >
        <InputFileDropdown files={files} setFiles={setFiles} />
        <p className='pt-6'>
          Si no tienes una receta médica puedes agendar desde aquí
        </p>
        <div className='divide-black-300 flex flex-col gap-y-6 divide-y bg-white'>
          <div className='flex flex-col gap-4'>
            <label htmlFor='name' className='text-lg'>
              Nombre
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='rounded-md border border-gray-300 p-2'
            />
            <label htmlFor='lastname' className='text-lg'>
              Apellido
            </label>
            <input
              type='text'
              id='lastname'
              name='lastname'
              className='rounded-md border border-gray-300 p-2'
            />
            <label htmlFor='phone' className='text-lg'>
              Telefono
            </label>
            <input
              type='text'
              id='phone'
              name='phone'
              className='rounded-md border border-gray-300 p-2'
            />
            <label htmlFor='email' className='text-lg'>
              Correo
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='rounded-md border border-gray-300 p-2'
            />
            <label htmlFor='address' className='text-lg'>
              Direccion
            </label>
            <input
              type='text'
              id='address'
              name='address'
              className='rounded-md border border-gray-300 p-2'
            />
            <label htmlFor='location' className='text-lg'>
              Ubicación
            </label>
            {isLoaded ? (
              <div className='h-64 w-full'>
                <GoogleMap
                  mapContainerStyle={{ width: '100%', height: '100%' }}
                  zoom={12}
                  center={{ lat: -25.520202, lng: -54.627405 }}
                  onClick={handleMapClick}
                >
                  {location && <Marker position={location} />}
                </GoogleMap>
              </div>
            ) : (
              <p>Cargando mapa...</p>
            )}
            <button className='rounded-md bg-blue-500 p-4 text-center text-white'>
              Agendar estudios
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UploadRecipe;

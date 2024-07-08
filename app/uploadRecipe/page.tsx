'use client';
import React, { useState, useContext } from 'react';
import InputFileDropdown from '@/components/InputFileDropdown';
import { UserLocation } from '@/context/locationContext';
import MapSelector from '@/components/MapSelector';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function UploadRecipe() {
  const searchParams = useSearchParams();
  const recipe: Boolean = searchParams.get('recipe') === 'true';
  const [files, setFiles] = useState([]);
  const { location, setLocation, address, setAddress, setLocationURL } =
    useContext(UserLocation);

  console.log(recipe);
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
    <div className='container m-auto min-h-screen overflow-x-hidden bg-stone-100 p-4 py-14 lg:max-w-5xl fade-in-animation'>
      <div className='flex flex-col gap-6 py-10 text-center'>
        <h1 className='text-4xl font-semibold'>
          {recipe
            ? 'Sube tu receta médica y nos encargamos del resto'
            : 'Agenda tu cita en línea para estudios clínicos'}
        </h1>
        <p className='text-lg'>
          {recipe
            ? '¿No entiendes la letra de tu doctor? Nosotros cotizamos tus estudios clínicos por ti.'
            : 'Rellena tus datos y nos ponemos en contacto contigo. ¡Es fácil y rápido!'}
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className='divide-black-300 flex flex-col gap-y-6 rounded-lg bg-white p-4'
      >
        {recipe && (
          <>
            {' '}
            <InputFileDropdown files={files} setFiles={setFiles} />
            <p className='border-t-2 pt-6'>
              Si no tienes una receta médica puedes{' '}
              <Link
                href='/uploadRecipe?recipe=false'
                className='pointer text-gray-500 underline'
              >
                agendar desde aquí
              </Link>
            </p>
          </>
        )}
        <div className='divide-black-300 flex flex-col gap-y-6 divide-y bg-white'>
          <div className='flex flex-col gap-4'>
            {!recipe && (
              <>
                <label htmlFor='studies' className='text-lg'>
                  Estudios clínicos
                </label>
                <textarea
                  id='studies'
                  name='studies'
                  className='min-h-40 rounded-md border border-gray-300 p-2'
                  placeholder='Describa aquí los estudios clínicos que necesita...'
                />
              </>
            )}
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
              Tu ubicación
            </label>
            <MapSelector
              location={location}
              setLocation={setLocation}
              setAddress={setAddress}
              setLocationURL={setLocationURL}
            />
            <span className='text-sm font-extralight'>{address}</span>
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

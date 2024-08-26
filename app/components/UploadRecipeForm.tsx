'use client';
import React, { useState, useContext, useRef } from 'react';
import InputFileDropdown from '@/components/InputFileDropdown';
import { UserLocation } from '@/context/locationContext';
import MapSelector from '@/components/MapSelector';
import Link from 'next/link';
import { toast } from 'react-toastify';

const UploadRecipeForm = ({ recipe }: { recipe: Boolean }) => {
  const [files, setFiles] = useState([]);
  const { location, setLocation, address, setAddress, setLocationURL } =
    useContext(UserLocation);

  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const formDataObj: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });
    formDataObj['latitude'] = location.lat;
    formDataObj['longitude'] = location.lng;
    const jsonFormData = JSON.stringify(formDataObj);

    try {
      console.log(formData);
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + '/scheduling',
        {
          method: 'POST',
          body: jsonFormData,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.ok) {
        toast.success('Datos enviados con éxito');
      } else {
        toast.error('Error al enviar datos');
      }
    } catch (error) {
      console.error('Error al enviar datos', error);
      toast.error('Error al enviar datos');
    }
  };

  return (
    <form
      ref={formRef}
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
            name='firstName'
            className='rounded-md border border-gray-300 p-2'
          />
          <label htmlFor='lastname' className='text-lg'>
            Apellido
          </label>
          <input
            type='text'
            id='lastname'
            name='lastName'
            className='rounded-md border border-gray-300 p-2'
          />
          <label htmlFor='phone' className='text-lg'>
            Telefono
          </label>
          <input
            type='text'
            id='phone'
            name='phoneNumber'
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
  );
};

export default UploadRecipeForm;

import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UploadRecipeForm from '@/components/UploadRecipeForm';

function UploadRecipe({ searchParams }: { searchParams: any }) {
  const recipe: Boolean = searchParams.recipe === 'true';
  return (
    <div className='fade-in-animation container m-auto min-h-screen overflow-x-hidden bg-stone-100 p-4 py-14 lg:max-w-5xl'>
      <ToastContainer className="z-50" />
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
      <UploadRecipeForm recipe={recipe} />
    </div>
  );
}

export default UploadRecipe;
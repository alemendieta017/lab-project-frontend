'useClient';
import React, { useRef, useState } from 'react';

const InputFileDropdown = ({
  files,
  setFiles,
}: {
  files: File[];
  setFiles: any;
}) => {
  const [dragging, setDragging] = useState(false);
  const inputFileRef = useRef<HTMLInputElement>(null);

  function handleOnDrop(e: any) {
    e.preventDefault();
    const addedFiles: File[] = [];
    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      const file = e.dataTransfer.files[i];
      // Verificar si el archivo ya existe en la lista
      const existingFile = files.find(
        (f) => f.name === file.name && f.size === file.size,
      );
      if (!existingFile) {
        addedFiles.push(file);
      }
    }
    setFiles([...files, ...addedFiles]);
    setDragging(false);
  }

  function handleChange(e: any) {
    e.preventDefault();
    const addedFiles: File[] = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      // Verificar si el archivo ya existe en la lista
      const existingFile = files.find(
        (f) => f.name === file.name && f.size === file.size,
      );
      if (!existingFile) {
        addedFiles.push(file);
      }
    }
    // Limpia el input file HTML una vez capturado los archivos en addedFiles
    if (inputFileRef.current) {
      inputFileRef.current.value = '';
    }
    setFiles([...files, ...addedFiles]);
  }

  function handleDelete(index: number) {
    setFiles((prevFiles: File[]) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles.length > 0 ? updatedFiles : []; // Si no quedan archivos en la lista, retornamos null
    });
  }

  return (
    <div>
      <div
        className={files.length > 0 ? 'mb-4' : ''}
        draggable
        onDragEnter={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDrop={handleOnDrop}
        onDragLeave={(e) => {
          e.preventDefault();
          setDragging(false);
        }}
      >
        <input
          type='file'
          name='images'
          id='file'
          className='sr-only'
          ref={inputFileRef}
          onChange={handleChange}
          multiple
        />
        <div
          className={`relative flex min-h-[200px] items-center justify-center rounded-lg border-2 border-dashed border-blue-400 p-12 text-center ${dragging ? 'bg-blue-200 bg-gradient-to-tr' : 'bg-blue-100'}`}
        >
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='mx-auto mb-4 block h-16 w-16 text-blue-500'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
              />
            </svg>
            <p className='text-gray mb-2 block font-bold text-blue-500 underline'>
              Arrastra aquí tus archivos
            </p>
            <p className='text-gray mb-2 block text-blue-500'>
              Se admiten archivos JPG y PDF (max. 15MB)
            </p>
            <span className='mb-2 block text-xs text-blue-500'>o</span>
            <span
              className='text-gray inline-flex rounded border border-[#e0e0e0] bg-white px-7 py-2 text-sm text-gray-500'
              onClick={() => {
                inputFileRef.current?.click();
              }}
            >
              Subir desde tu dispositivo
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='m-auto ml-1 inline size-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5'
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        {files.map((file, index) => {
          // Crear una URL de datos para la vista previa del archivo
          const imageUrl = URL.createObjectURL(file);
          return (
            <div
              key={`${file.name}${index}`}
              className='rounded-md bg-[#F5F7FB] px-2 py-2'
            >
              <div className='aspect-w-1 aspect-h-1 mb-2'>
                <img
                  src={imageUrl}
                  alt={file.name}
                  className='h-full w-full rounded-md object-cover'
                />
              </div>
              <div className='flex items-center justify-between'>
                <span className='truncate text-sm font-medium text-gray-500'>
                  {file.name}
                </span>
                <button
                  onClick={() => {
                    handleDelete(index);
                  }}
                  className='text-gray-500'
                >
                  <svg
                    width='10'
                    height='10'
                    viewBox='0 0 10 10'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z'
                      fill='currentColor'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z'
                      fill='currentColor'
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InputFileDropdown;

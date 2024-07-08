'use client';
import Link from 'next/link';
import { WHATSAPP_CHAT_URL } from './config/config';
import { UserLocation } from './context/locationContext';
import { useContext } from 'react';

export default function Home() {
  const { locationURL } = useContext(UserLocation);

  const chatUrl =
    locationURL !== ''
      ? WHATSAPP_CHAT_URL + locationURL
      : WHATSAPP_CHAT_URL + 'Adjuntar%20ubicaci%C3%B3n.';

  return (
    <>
      <main className='relative bg-gradient-to-t from-gray-300 to-30%'>
        <div className='container relative z-10 m-auto min-h-screen px-4 py-14 lg:max-w-3xl'>
          <div className='flex flex-col gap-y-6 py-10 text-center'>
            <h1 className='text-4xl font-medium'>
              Estudios de laboratorio y salud preventiva{' '}
              <span className='text-blue-600'>a domicilio</span>
            </h1>
            <h3>
              Agenda en minutos y ahorra tiempo tomando tus estudios desde casa
              con nuestros profesionales certificados.
            </h3>
          </div>
          <div className='flex flex-col gap-y-4'>
            <Link
              href='/uploadRecipe?recipe=false'
              className='rounded-md bg-blue-500 p-4 text-center text-white'
            >
              Agendar estudios
            </Link>
            <a
              href={chatUrl}
              className='rounded-md bg-green-400 p-4 text-center text-white'
            >
              <div className='flex items-center justify-center'>
                Agendar por WhatsApp
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24'
                  width='24'
                  viewBox='0 0 448 512'
                  className='ml-2 inline-block'
                >
                  <path
                    fill='#ffffff'
                    d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'
                  />
                </svg>
              </div>
            </a>
            <Link
              href='/uploadRecipe?recipe=true'
              className='rounded-md bg-blue-500 p-4 text-center text-white'
            >
              Agenda con receta médica
            </Link>
          </div>
        </div>
        <div className='custom-shape-divider-bottom-1720393814'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
              opacity='.25'
              className='shape-fill'
            ></path>
            <path
              d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
              opacity='.5'
              className='shape-fill'
            ></path>
            <path
              d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
              className='shape-fill'
            ></path>
          </svg>
        </div>
      </main>
    </>
  );
}

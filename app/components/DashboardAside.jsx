'use client';
import React from 'react';
import Link from 'next/link';
import { logout } from '@/actions/auth';
import { usePathname } from 'next/navigation';

const DashboardAside = () => {
  const pathname = usePathname();
  return (
    <aside className='hidden w-64 bg-gray-800 py-20 text-white md:block'>
      <nav className='p-4 text-center'>
        <ul>
          <li>
            <Link
              href='/dashboard?menu=agendamientos'
              className={`w-full p-2 text-left ${pathname === '/dashboard/schedulings' ? 'bg-gray-700' : ''}`}
            >
              Agendamientos
            </Link>
          </li>
          <li>
            <form action={logout}>
              <button
                type='submit'
                className={`text-lef w-full p-2`}
              >
                Cerrar sesión
              </button>
            </form>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardAside;

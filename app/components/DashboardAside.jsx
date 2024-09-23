'use client';
import React from 'react';
import Link from 'next/link';
import { logout } from '@/actions/auth';
import { usePathname } from 'next/navigation';

const DashboardAside = () => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <aside className='w-64 bg-gray-800 py-20 text-white hidden md:block'>
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
            <button className={`text-lef w-full p-2`} onClick={logout}>
              Cerrar sesión
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardAside;

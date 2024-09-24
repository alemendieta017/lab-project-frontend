import DashboardAside from '@/components/DashboardAside';
import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) {
    redirect('/login');
  }
  return (
    <div className='flex h-screen'>
      <DashboardAside />
      <main className='flex-1'>{children}</main>
    </div>
  );
}

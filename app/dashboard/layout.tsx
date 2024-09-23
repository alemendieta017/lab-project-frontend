import DashboardAside from '@/components/DashboardAside';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen'>
      <DashboardAside />
      <main className='flex-1 p-4'>
        {children}
      </main>
    </div>
  );
}


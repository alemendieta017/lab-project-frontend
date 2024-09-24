import Filters from '@/components/Filters';
import SchedulingsTable from '@/components/SchedulingsTable';

export default async function Dashboard({searchParams}: {searchParams: {search: string}}) {
  const search = searchParams?.search || '';
  return (
    <div className='flex md:min-h-screen'>
      <main className='flex-1 p-4'>
        <h1 className='text-3xl font-bold my-6'>Agendas</h1>
        <Filters placeholder='Buscar por nombre'/>
        <SchedulingsTable search={search} />
      </main>
    </div>
  );
}

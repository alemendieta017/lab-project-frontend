export default async function SchedulingsTable({ search }: { search: string }) {
  const HOST = process.env.NEXT_PUBLIC_API_URL;
  let schedulings = [];
  let error = null;

  try {
    const response = await fetch(`${HOST}/scheduling?firstName=${search}`, {
      cache: 'no-cache',
    });
    if (!response.ok) {
      throw new Error('Error fetching schedulings');
    }
    const { data } = await response.json();
    schedulings = data;
  } catch (err: any) {
    error = err.message;
  }
  return (
    <table className='min-w-full overflow-scroll bg-white'>
      <thead>
        <tr>
          <th className='border-b px-4 py-2'>ID</th>
          <th className='border-b px-4 py-2'>Nombre</th>
          <th className='border-b px-4 py-2'>Apellido</th>
          <th className='border-b px-4 py-2'>Direccion</th>
          <th className='border-b px-4 py-2'>Telefono</th>
          <th className='border-b px-4 py-2'>Email</th>
          <th className='border-b px-4 py-2'>Latitud</th>
          <th className='border-b px-4 py-2'>Longitud</th>
        </tr>
      </thead>
      <tbody>
        {schedulings.map((scheduling: any) => (
          <tr key={scheduling.id}>
            <td className='border-b px-4 py-2'>{scheduling.id}</td>
            <td className='border-b px-4 py-2'>{scheduling.firstName}</td>
            <td className='border-b px-4 py-2'>{scheduling.lastName}</td>
            <td className='border-b px-4 py-2'>{scheduling.address}</td>
            <td className='border-b px-4 py-2'>{scheduling.phoneNumber}</td>
            <td className='border-b px-4 py-2'>{scheduling.email}</td>
            <td className='border-b px-4 py-2'>{scheduling.latitude}</td>
            <td className='border-b px-4 py-2'>{scheduling.longitude}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

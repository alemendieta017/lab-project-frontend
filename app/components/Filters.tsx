'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Filters({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }

    replace(`${pathName}?${params.toString()}`);
  }

  return (
    <div className='relative flex flex-1 flex-shrink-0 py-6'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <input
        className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('search')?.toString()}
      />
    </div>
  );
}

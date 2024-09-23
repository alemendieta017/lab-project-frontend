import { login } from '@/actions/auth';
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';

export default async function LoginPage() {
  const session = await getSession();

  console.log(session);

  const handleSubmit = async (formData: FormData) => {
    'use server';
    try {
      await login(formData);
      redirect('/dashboard');
    } catch (err) {
      return 'Invalid email or password';
    }
  };

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <form
        className='mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md'
        action={login}
      >
        <h1 className='mb-8 text-center text-4xl font-bold'>Ingresar</h1>
        <div className='mb-4'>
          <label
            className='mb-2 block text-sm font-bold text-gray-700'
            htmlFor='email'
          >
            Email
          </label>
          <input
            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            id='email'
            type='email'
            name='email'
            placeholder='Email'
          />
        </div>
        <div className='mb-6'>
          <label
            className='mb-2 block text-sm font-bold text-gray-700'
            htmlFor='password'
          >
            Password
          </label>
          <input
            className='border-red focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            id='password'
            type='password'
            name='password'
            placeholder='******************'
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
            type='submit'
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

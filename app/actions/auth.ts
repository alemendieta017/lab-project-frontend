'use server'
import { createSession, deleteSession } from '@/lib/session'
import { redirect } from 'next/navigation'

export async function logout() {
  deleteSession()
  redirect('/login')
}

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  let fakeUser = {
    email: "test@gmail.com",
    password: "123"
  }

  // Aquí deberías validar el email y la contraseña con tu base de datos
  if (email !== fakeUser.email || password !== fakeUser.password) {
    throw new Error('Invalid email or password');
  }
  // Si la validación es exitosa, crea una sesión
  const userId = 'user-id-from-db'; // Reemplaza esto con el ID real del usuario
  await createSession({
    userId,
    email,
  });

  redirect('/dashboard');
}
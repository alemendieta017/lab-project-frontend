// src/app/dashboard/page.tsx
import { redirect } from 'next/navigation';

export default function DashboardRedirect() {
  // Redirige automáticamente a /dashboard/schedulings
  redirect('/dashboard/schedulings');
}

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NavBar } from '../components/NavBar';

// Пример: user сохраняется в state (или из auth hook/context)
export default function App({ Component, pageProps }: AppProps) {
  const user = pageProps.user || null; // Заглушка, можно заменить на useAuth()
  return (
    <>
      <NavBar user={user} />
      <Component {...pageProps} user={user} />
    </>
  );
}

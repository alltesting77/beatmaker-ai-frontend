import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NavBar } from '../components/NavBar';

type User = {
  email: string;
} | null;

function getUserFromProps(pageProps: any): User {
  // Здесь можно реализовать получение user из pageProps или context/hook
  return pageProps.user || null;
}

export default function App({ Component, pageProps }: AppProps) {
  const user = getUserFromProps(pageProps);
  return (
    <>
      <NavBar user={user} />
      <Component {...pageProps} user={user} />
    </>
  );
}

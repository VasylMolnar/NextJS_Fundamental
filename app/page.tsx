import Link from 'next/link';
import style from './page.module.css';

export default function Home() {
  return (
    <main className={style.main}>
      <h1>Home Page</h1>

      <Link href="/about">ABOUT</Link>
    </main>
  );
}

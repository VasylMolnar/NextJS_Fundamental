import Link from 'next/link';
import style from './page.module.css';

export default function Home() {
  return (
    <main className={style.main}>
      <h1 style={{ marginBottom: '50px', color: 'red' }}>Home Page</h1>

      <Link href="/feedback">Add Feedback</Link>
    </main>
  );
}

'use client';
import Link from 'next/link';
//import { useEffect } from 'react';
import styles from './styles.module.css';

const About = () => {
  //Check error.tsx
  // useEffect(() => {
  //   throw new Error('ERROR FILE');
  // }, []);

  return (
    <>
      <h1 className={styles.h1}>About Page</h1>
      <Link href="/" className={styles.link}>
        HOME
      </Link>
    </>
  );
};

export default About;

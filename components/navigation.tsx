'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/navigation.module.css';

export default function Navigation() {
  const path = usePathname();

  return (
    <div className={styles.nav}>
      <ul>
        <Link href="/">
          <li>Home</li> {path === '/' ? '🎈' : ''}
        </Link>
        <Link href="/about-us">
          <li>About Us</li> {path === '/about-us' ? '🎈' : ''}
        </Link>
      </ul>
    </div>
  );
}

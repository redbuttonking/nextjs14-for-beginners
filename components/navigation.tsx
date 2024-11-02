'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/navigation.module.css';

export default function Navigation() {
  const path = usePathname();

  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <img src="https://image.tving.com/ntgs/operation/logo/2023/09/18/1695032536_1.svg" alt="티빙 아이콘" />
          </Link>
        </li>

        <li>
          <Link href="/">
            <div className={styles.text}>Home {path === '/' ? '🎈' : ''}</div>
          </Link>
        </li>

        <li>
          <Link href="/about-us">
            <div className={styles.text}>About Us {path === '/about-us' ? '🎈' : ''}</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

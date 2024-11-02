'use client';

import { API_URL } from '../app/contants';
import styles from '../styles/movie-similar.module.css';

import Link from 'next/link';
import Xscroll from './xscroll';

async function getMovieSimilar(id: string) {
  const res = await fetch(`${API_URL}/${id}/similar`);

  return res.json();
}

export default async function MovieSimilar({ id }: { id: string }) {
  const similar = await getMovieSimilar(id);

  return (
    <Xscroll
      content={similar.map((similar) => (
        <div className={styles.container}>
          <div className={styles.poster}>
            <Link prefetch href={`/movie/${similar.id}`}>
              <img src={similar.poster_path} alt={similar.title} />
            </Link>
            <div className={styles.title}>{similar.title}</div>
          </div>
        </div>
      ))}
    />
  );
}

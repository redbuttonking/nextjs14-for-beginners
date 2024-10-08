'use client';

import Link from 'next/link';
import styles from '../styles/movie.module.css';
import { useRouter } from 'next/navigation';

interface IMovieProps {
  title: string;
  poster_path: string;
  id: string;
}

export default function Movie({ title, poster_path, id }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movie/${id}`);
  };

  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link prefetch href={`/movie/${id}`}>
        {title}
      </Link>
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import Movie from '../../components/movie';
import styles from '../../styles/homepage.module.css';

export const metadata: Metadata = {
  title: 'Home',
};

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  // console.log('기다리는중...');

  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <div>
          <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
        </div>
      ))}
    </div>
  );
}

// JSON.stringify(movies)

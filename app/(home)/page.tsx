import { Metadata } from 'next';
import Movie from '../../components/movie';
import styles from '../../styles/homepage.module.css';
import { API_URL } from '../contants';
import BigMovieImg from '../../components/big-movie-img';

export const metadata: Metadata = {
  title: 'Home',
};

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
    <div>
      {/* {movies.map((movie) => (
        <BigMovieImg key={movie.id} backdrop_path={movie.backdrop_path} title={movie.title} />
      ))} */}
      <div className={styles.container}>
        {movies.map((movie) => (
          <div>
            <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
}

import { API_URL } from '../app/contants';
import styles from '../styles/movie-info.module.css';
import MovieProviders from './movie-providers';

export async function getMovie(id: string) {
  const res = await fetch(`${API_URL}/${id}`);

  return res.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} className={styles.poster} />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3 className={styles.avg}>⭐{movie.vote_average.toFixed(1)}</h3>
        <p className={styles.info}>{movie.overview}</p>
        <div className={styles.hompage}>
          <MovieProviders id={id} />
        </div>
      </div>
    </div>
  );
}

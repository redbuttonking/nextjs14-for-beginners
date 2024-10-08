import { API_URL } from '../app/(home)/page';
import styles from '../styles/movie-info.module.css';

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
        <h3>**{movie.vote_average.toFixed(1)}</h3>
        <p className={styles.info}>{movie.overview}</p>
        <a href={movie.hompage} target={'_blank'}>
          HomePage &rarr;
        </a>
      </div>
    </div>
  );
}

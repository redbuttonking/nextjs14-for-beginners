import { API_URL } from '../app/contants';
import styles from '../styles/movie-providers.module.css';

async function getMovieProviders(id: string) {
  const res = await fetch(`${API_URL}/${id}/providers`);
  return res.json();
}

export default async function MovieProviders({ id }: { id: string }) {
  const providers = await getMovieProviders(id);

  return (
    <div className={styles.container}>
      <a href={providers.KR.link} target={'_blank'}>
        HomePage &rarr;
      </a>
    </div>
  );
}

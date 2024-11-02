import { API_URL } from '../app/contants';
import styles from '../styles/movie-credits.module.css';
import Xscroll from './xscroll';

async function getMovieCredits(id: string) {
  const res = await fetch(`${API_URL}/${id}/credits`);

  return res.json();
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getMovieCredits(id);

  return (
    <div className={styles.container}>
      <Xscroll
        content={credits.map((credits) => (
          <div className={styles.item}>
            <img src={credits.profile_path} alt="profile_path" />
            <div className={styles.name}> {credits.name}</div>
          </div>
        ))}
      />
    </div>
  );
}

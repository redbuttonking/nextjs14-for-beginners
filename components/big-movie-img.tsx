import { API_URL } from '../app/contants';
import styles from '../styles/big-movie-img.module.css';

interface IMovieProps {
  backdrop_path: string;
  title: string;
}

export default function BigMovieImg({ backdrop_path, title }: IMovieProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <img src={backdrop_path} alt="backdrop_path" />
    </div>
  );
}

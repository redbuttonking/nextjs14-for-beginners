import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../components/movie-info';
import MovieVideos from '../../../components/movie-videos';
import MovieCredits from '../../../components/movie-credits';
import MovieSimilar from '../../../components/movie-similar';
import LoodingComponent from '../../../components/loading-component';
import styles from '../movie.module.css';

interface Iparams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: Iparams) {
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
}

export default function MovieDetailPage({ params: { id } }: Iparams) {
  return (
    <div>
      <Suspense fallback={<LoodingComponent content="movie info" />}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<LoodingComponent content="videos" />}>
        <div className={styles.title}>Videos</div>
        <MovieVideos id={id} />
      </Suspense>

      <Suspense fallback={<LoodingComponent content="movie credits" />}>
        <div className={styles.title}>Credits</div>
        <MovieCredits id={id} />
      </Suspense>

      <Suspense fallback={<LoodingComponent content="movie similar" />}>
        <div className={styles.title}>Similar</div>
        <MovieSimilar id={id} />
      </Suspense>
    </div>
  );
}

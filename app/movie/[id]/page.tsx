import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../components/movie-info';
import MovieVideos from '../../../components/movie-videos';

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
      <Suspense fallback={<h2>movie info Loading...</h2>}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<h2>movie videos Loading...</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

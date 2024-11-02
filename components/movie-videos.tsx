import { API_URL } from '../app/contants';
import styles from '../styles/movie-videos.module.css';
import Xscroll from './xscroll';

async function getVideos(id: string) {
  const res = await fetch(`${API_URL}/${id}/videos`);

  return res.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return (
    <div className={styles.container}>
      <Xscroll
        content={videos.map((video) => (
          <iframe
            key={video.id}
            src={`https://youtube.com/embed/${video.key}`}
            title={video.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      />
    </div>
  );
}

import styles from '../styles/loading-component.module.css';

export default function LoodingComponent({ content }: { content: string }) {
  return <div className={styles.container}>{content}Loading...</div>;
}

// pages/_app.js
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // 스타일을 수동으로 불러옴
config.autoAddCss = false; // 자동 CSS 추가 방지

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

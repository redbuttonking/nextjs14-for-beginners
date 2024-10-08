import { Metadata } from 'next';
import { title } from 'process';
import MovieDetail from '../movie/[id]/page';

export const metadata: Metadata = {
  title: 'About Us!',
  description: 'sdsd',
};

export default function AboutUs() {
  return (
    <div>
      <h1>About Us!!</h1>
    </div>
  );
}

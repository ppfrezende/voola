import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-hammersmith-one">
      <Header />
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

import React from 'react';
import '../styles/globals.css';
import { UserActivityProvider } from '../contexts/UserActivityContext';
import MusicPlayer from '../components/MusicPlayer';

function MyApp({ Component, pageProps }) {
  return (
    <UserActivityProvider>
      <MusicPlayer />
      <Component {...pageProps} />
    </UserActivityProvider>
  );
}

export default MyApp;

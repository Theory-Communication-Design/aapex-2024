import React from 'react';
import '../styles/globals.css';
import { UserActivityProvider } from '../contexts/UserActivityContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserActivityProvider>
      <Component {...pageProps} />
    </UserActivityProvider>
  );
}

export default MyApp;

// contexts/UserActivityContext.js
import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const UserActivityContext = createContext();

export const UserActivityProvider = ({ children }) => {
  const [lastActivityTime, setLastActivityTime] = useState(Date.now());
  const [fullScreenVideoSrc, setFullScreenVideoSrc] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const resetActivityTimer = () => setLastActivityTime(Date.now());

    const handleInactivity = () => {
      // Only redirect to index.js if not on the Landing page and no full-screen video is playing
      if (
        !fullScreenVideoSrc &&
        Date.now() - lastActivityTime >= 60000 &&
        router.pathname !== '/'
      ) {
        router.push('/');
      }
    };

    // Add event listeners to detect user interactions
    const events = ['click', 'mousemove', 'keypress', 'scroll'];
    events.forEach((event) => window.addEventListener(event, resetActivityTimer));

    // Check for inactivity every second
    const intervalId = setInterval(handleInactivity, 1000);

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetActivityTimer));
      clearInterval(intervalId);
    };
  }, [lastActivityTime, fullScreenVideoSrc, router]);

  return (
    <UserActivityContext.Provider value={{ fullScreenVideoSrc, setFullScreenVideoSrc }}>
      {children}
    </UserActivityContext.Provider>
  );
};

export default UserActivityContext;

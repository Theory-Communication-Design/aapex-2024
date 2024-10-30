import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const UserActivityContext = createContext();

export const UserActivityProvider = ({ children }) => {
  const [lastActivityTime, setLastActivityTime] = useState(Date.now());
  const [fullScreenVideoSrc, setFullScreenVideoSrc] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const resetActivityTimer = () => {
      setLastActivityTime(Date.now());
    };

    const handleInactivity = () => {
      const timeoutDuration = 300000;

      // Redirect if inactivity exceeds the timeoutDuration and user is not on the landing page
      if (Date.now() - lastActivityTime >= timeoutDuration && router.pathname !== '/') {
        router.push('/');
      }
    };

    const events = ['click'];
    events.forEach((event) => window.addEventListener(event, resetActivityTimer));

    const intervalId = setInterval(handleInactivity, 1000);

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetActivityTimer));
      clearInterval(intervalId);
    };
  }, [lastActivityTime, router]);

  return (
    <UserActivityContext.Provider value={{ fullScreenVideoSrc, setFullScreenVideoSrc }}>
      {children}
    </UserActivityContext.Provider>
  );
};

export default UserActivityContext;

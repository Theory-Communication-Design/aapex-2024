import { useEffect, useRef, useState } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      const audio = audioRef.current;
      if (audio && !isPlaying) {
        audio.play().catch(error => console.error("Playback error:", error));
        setIsPlaying(true);
      }
      // Remove event listener once audio starts playing
      window.removeEventListener('click', handleInteraction);
    };

    // Add listener for the first user interaction
    window.addEventListener('click', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
    };
  }, [isPlaying]);

  return (
    <audio ref={audioRef} src="/music/bg-music.mp3" loop />
  );
}

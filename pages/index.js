import { useEffect } from 'react';
import Link from 'next/link';

export default function Landing() {
  useEffect(() => {
    const videoElement = document.querySelector('video');

    const handleVideoPlay = () => {
      // Check if video is paused or ended and attempt to play it
      if (videoElement.paused || videoElement.ended) {
        videoElement.play().catch(error => {
          console.error('Error playing video:', error);
        });
      }
    };

    const onCanPlayThrough = () => {
      // Video can play through without stopping, ensure it starts
      handleVideoPlay();
    };

    videoElement.addEventListener('canplaythrough', onCanPlayThrough);
    videoElement.addEventListener('playing', handleVideoPlay);
    videoElement.addEventListener('pause', handleVideoPlay);

    return () => {
      videoElement.removeEventListener('canplaythrough', onCanPlayThrough);
      videoElement.removeEventListener('playing', handleVideoPlay);
      videoElement.removeEventListener('pause', handleVideoPlay);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center min-h-screen text-white pt-20">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/video-posters/lockscreen-poster.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: -1, aspectRatio: "16/9" }}
      >
        <source src="./videos/lockscreen.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" style={{ zIndex: -1 }} />

      {/* Heading Text */}
      <h1 className="relative text-center text-[2vw] font-emprintSemiBold mt-[20vh] z-10">
        Experience the power of the Mobil 1™ brand<br />
        as we push the boundaries of performance and innovation.
      </h1>

      {/* Call to Action */}
      <Link href="./home/">
        <img
          src="/images/landing-cta.png"
          alt="Call to Action"
          className="relative mt-[10vh] z-10"
          style={{ width: '15vw', height: 'auto' }}
        />
      </Link>
    </div>
  );
}

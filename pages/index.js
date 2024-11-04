import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Landing() {
  const [videoSrc, setVideoSrc] = useState('./videos/lockscreen-part1.mp4');

  useEffect(() => {
    const videoElement = document.querySelector('video');

    const handleVideoEnded = () => {
      if (videoSrc === './videos/lockscreen-part1.mp4') {
        setVideoSrc('./videos/lockscreen-part2.mp4');
      } else {
        setVideoSrc('./videos/lockscreen-part1.mp4');
      }
    };

    videoElement.addEventListener('ended', handleVideoEnded);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnded);
    };
  }, [videoSrc]);

  return (
    <div className="relative flex flex-col items-center min-h-screen text-white pt-20">
      {/* Background Video */}
      <video
        key={videoSrc}
        autoPlay
        muted
        playsInline
        preload="metadata" // Load only metadata initially
        poster="/video-posters/lockscreen-poster.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: -1, aspectRatio: "16/9" }}
      >
        <source src={videoSrc} type="video/mp4" />
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

import Link from 'next/link';
import { useState } from 'react';

const buttonImages = [
  { image: '/images/hagerty-home.png', link: '/hagerty/' },
  { image: '/images/hotwheels-home.png', link: '/hotwheels/' },
  { image: '/images/oem-home.png', link: '/oem/' },
  { image: '/images/redbull-home.png', link: '/redbullracing/' },
  { image: '/images/rocketLeague-home.png', link: '/rocketleague/' },
  { image: '/images/steer-home.png', link: '/steer/' },
  { image: '/images/xoverland-home.png', link: '/xoverland/' },
  { image: '/images/products-home.png', link: '/products/' },
];

export default function Home() {
  const [loaded, setLoaded] = useState({});

  const handleImageLoad = (index) => {
    setLoaded((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/video-posters/menu-poster.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: -1, aspectRatio: "16/9" }}
      >
        <source src="/videos/menu.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-15" style={{ zIndex: -1 }} />

      {/* Top Bar */}
      <div className="relative z-10 bg-white h-[9.4vw] flex justify-center items-center w-full shadow-md">
        <Link href="/" passHref prefetch={true}>
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-auto"
            style={{ height: '5vh' }}
          />
        </Link>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex-grow flex flex-col justify-center items-center">
        <p className="text-white text-center text-[1.5vw] pb-[6vh] mt-[-6vh] font-emprintSemiBold">
          Dive deeper into our wide-ranging partnerships by clicking below.
        </p>

        {/* Button Container */}
        <div className="flex flex-wrap justify-center gap-x-[6vw] gap-y-[7vh] w-full">
          {buttonImages.map((button, index) => (
            <Link key={index} href={button.link} passHref>
              <img
                src={button.image}
                onLoad={() => handleImageLoad(index)}
                data-loaded={loaded[index] ? 'true' : 'false'}
                className="menu-button-image"
                style={{ width: '40vw', height: 'auto', objectFit: 'contain' }}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

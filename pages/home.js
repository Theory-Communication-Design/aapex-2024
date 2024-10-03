import Link from 'next/link';

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
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: -1 }}
      >
        <source src="/videos/menu.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Top Bar */}
      <div className="relative z-10 bg-white h-[361px] flex justify-center items-center w-full shadow-md">
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{ width: '653px', height: '133px' }}
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex-grow flex flex-col justify-center">
        <p className="text-white text-center text-[70px] pb-[120px] mt-[-100px] font-emprintSemiBold">
          Dive deeper into our wide-ranging partnerships by clicking below.
        </p>

        {/* Adjusted container for buttons */}
        <div className="flex flex-wrap justify-center gap-x-[250px] gap-y-[150px] w-full">
          {buttonImages.map((button, index) => (
            <Link key={index} href={button.link} passHref>
                <img
                  src={button.image}
                  style={{ width: '1505px', height: 'auto', objectFit: 'contain' }}
                  className="mr-10"
                />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

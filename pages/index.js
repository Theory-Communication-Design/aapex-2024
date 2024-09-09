import Link from 'next/link';
import Image from 'next/image';

const buttonData = [
  { text: 'HAGERTY', logo: '/button-logo1.png', link: '/hagerty' },
  { text: 'HOT WHEELS', logo: '/button-logo2.png', link: '/hotwheels' },
  { text: 'OEM', logo: '/button-logo3.png', link: '/oem' },
  { text: 'RED BULL RACING', logo: '/button-logo4.png', link: '/redbullracing' },
  { text: 'ROCKET LEAGUE', logo: '/button-logo5.png', link: '/rocketleague' },
  { text: 'STEER', logo: '/button-logo6.png', link: '/steer' },
  { text: 'XOVERLAND', logo: '/button-logo7.png', link: '/xoverland' },
  { text: 'MOBIL 1 PRODUCTS', logo: '/button-logo8.png', link: '/products' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-white h-16 flex justify-center items-center w-full shadow-md">
        <Image src="/logo.png" alt="Logo" width={100} height={50} />
      </div>

      {/* Content Section */}
      <div className="flex-grow flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/bg.png)' }}>
        <p className="text-white text-center mt-10 text-lg">
          Dive deeper into our wide-ranging partnerships by clicking below.
        </p>
        <div className="grid grid-cols-2 gap-4 w-full max-w-4xl p-10 mt-4">
          {buttonData.map((button, index) => (
            <Link key={index} href={button.link} passHref>
              <div className="bg-white flex justify-between items-center p-3 rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
                <span className="text-black text-lg font-semibold">{button.text}</span>
                <Image src={button.logo} alt={button.text} width={40} height={40} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

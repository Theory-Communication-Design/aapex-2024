import Link from 'next/link';

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

export default function home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-white h-[361px] flex justify-center items-center w-full shadow-md">
        <img
          src="/logo.png"
          alt="Logo"
          style={{ width: '653px', height: '133px' }}
        />
      </div>

      {/* Content Section */}
      <div className="flex-grow flex flex-col justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/bg.png)' }}>
        <p className="text-white text-center text-[70px] pb-[120px] mt-[-100px] font-emprintSemiBold">
          Dive deeper into our wide-ranging partnerships by clicking below.
        </p>

        {/* Adjusted container for buttons */}
        <div className="flex flex-wrap justify-center gap-x-[250px] gap-y-[150px] w-full">
          {buttonData.map((button, index) => (
            <Link key={index} href={button.link} passHref>
              <div
                className="bg-white flex justify-between items-center p-3 rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer w-[1505px] h-[197px]"
              >
                <span className="ml-10 text-black text-[70px] font-semibold font-emprint">{button.text}</span>
                <img
                  src={button.logo}
                  alt={button.text}
                  style={{ maxWidth: '369px', maxHeight: '145px', objectFit: 'contain' }}
                  className="mr-10"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

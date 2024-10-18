import Link from 'next/link';
import { useRouter } from 'next/router';

const tabs = [
  { name: 'HOME', link: '/home' },
  { name: 'HAGERTY', link: '/hagerty' },
  { name: 'HOT WHEELS', link: '/hotwheels' },
  { name: 'OEM', link: '/oem' },
  { name: 'RED BULL RACING', link: '/redbullracing' },
  { name: 'ROCKET LEAGUE', link: '/rocketleague' },
  { name: 'STEER', link: '/steer' },
  { name: 'XOVERLAND', link: '/xoverland' },
  { name: 'PRODUCTS', link: '/products' },
];

const Header = () => {
  const router = useRouter();

  return (
    <div className="bg-white h-[9.4vw] flex items-center w-full z-20 shadow-2xl">
      <div className="ml-[5.5vw] mr-[4vw]">
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{ width: 'auto', height: '2.7vw' }}
        />
      </div>
      <nav className="flex space-x-[1.1vw]">
        {tabs.map((tab, index) => (
          <Link key={index} href={tab.link} passHref prefetch={true}>
            <div
              className={`w-[7vw] h-[2.7vw] flex justify-center items-center font-emprint text-black cursor-pointer px-[1vw] text-[1vw] text-center leading-[1.2vw] ${
                router.pathname === tab.link || (tab.name === 'PRODUCTS' && router.pathname.startsWith('/products'))
                  ? 'bg-[#b0976b] text-white'
                  : 'bg-[#e1e1e1]'
              }`}
            >
              {tab.name}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;

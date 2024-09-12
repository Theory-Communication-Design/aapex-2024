import Link from 'next/link';
import { useRouter } from 'next/router';

const tabs = [
  { name: 'HOME', link: '/' },
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
    <div
      className="bg-white h-[361px] flex items-center w-full z-20 shadow-2xl"
    >
      <div className="ml-[250px] mr-[150px]">
        <img
          src="/logo.png"
          alt="Logo"
          style={{ width: '480px', height: '98px' }}
        />
      </div>
      <nav className="flex space-x-[50px]">
        {tabs.map((tab, index) => (
          <Link key={index} href={tab.link} passHref>
            <div
              className={`w-[270px] h-[102px] flex justify-center items-center font-emprint text-black cursor-pointer p-4 text-[40px] text-center leading-[40px] ${
                router.pathname === tab.link
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

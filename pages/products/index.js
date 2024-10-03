import Link from 'next/link';
import Header from 'components/Header';

const menuItems = [
  { text: 'FS European Car Formula', link: '/products/europeanCarFormula' },
  { text: 'ESP', link: '/products/esp' },
  { text: 'Mobil 1 Classic Car', link: '/products/classicCar' },
  { text: 'Advanced Fuel Economy', link: '/products/advancedFuelEconomy' },
  { text: 'Extended Performance High Mileage', link: '/products/extendedPerformanceHM' },
  { text: 'Supercar', link: '/products/supercar' },
  { text: 'Truck & SUV', link: '/products/truckSUV' },
  { text: 'Mobil 1 Full Synthetic', link: '/products/fullSynthetic' },
  { text: 'Extended Performance', link: '/products/extendedPerformance' },
  { text: 'Mobil 1 Racing', link: '/products/racing' },
];

export default function Products() {
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

      {/* Header Component */}
      <Header />

      {/* Content Section */}
      <div className="relative z-10 flex-grow flex flex-col justify-center items-center">
        <p className="text-white text-center text-[70px] pb-[100px] mt-[-50px] font-emprintSemiBold">
          Learn more about specific Mobil 1 products by clicking below.
        </p>

        {/* Menu Buttons */}
        <div className="flex flex-wrap justify-center gap-x-[250px] gap-y-[100px] w-full">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.link} passHref>
              <div
                className="bg-white flex justify-center items-center p-3 rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer w-[1505px] h-[197px]"
              >
                <span className="text-black text-[75px] font-emprint text-center">{item.text}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

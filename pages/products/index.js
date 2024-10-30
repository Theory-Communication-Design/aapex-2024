import Link from 'next/link';
import Header from 'components/Header';

const menuItems = [
  { text: 'Advanced Full Synthetic', link: '/products/fullSynthetic' },
  { text: 'Mobil 1 Racing™', link: '/products/racing' },
  { text: 'Truck & SUV', link: '/products/truckSUV' },
  { text: 'Advanced Fuel Economy', link: '/products/advancedFuelEconomy' },
  { text: 'Classic Car', link: '/products/classicCar' },
  { text: 'Supercar', link: '/products/supercar' },
  { text: 'Extended Performance High Mileage', link: '/products/extendedPerformanceHM' },
  { text: 'Extended Performance', link: '/products/extendedPerformance' },
  { text: 'ESP', link: '/products/esp' },
  { text: 'FS European Car Formula', link: '/products/europeanCarFormula' },
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
        poster="/video-posters/menu-products-poster.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: -1 }}
      >
        <source src="/videos/menu-products.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Header Component */}
      <Header />

      {/* Content Section */}
      <div className="relative z-10 flex-grow flex flex-col justify-center items-center">
        <p className="text-white text-center text-[1.5vw] pb-[5vh] mt-[-4vh] font-emprintSemiBold">
          Learn more about specific Mobil 1™ products by clicking below.
        </p>

        {/* Menu Buttons */}
        <div className="flex flex-wrap justify-center gap-x-[6vw] gap-y-[3vw] w-full">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.link} passHref prefetch={true}>
              <div
                className="bg-white flex justify-center items-center p-3 rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer w-[40vw] h-[4.5vw]"
              >
                <span className="text-black text-[2vw] font-emprint text-center">{item.text}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

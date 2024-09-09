import Image from 'next/image';
import Link from 'next/link';

const HomeButtons = ({ text, logo, link }) => {
  return (
    <Link href={link}>
      <div className="bg-white flex justify-between items-center px-6 py-4 shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300">
        <span className="text-lg font-semibold">{text}</span>
        <Image src={logo} alt={`${text} Logo`} width={100} height={50} />
      </div>
    </Link>
  );
};

export default HomeButtons;

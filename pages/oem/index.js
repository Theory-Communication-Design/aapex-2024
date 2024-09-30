import Link from 'next/link';
import Header from 'components/Header';

export default function OEM() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Header Component */}
      <Header />

      {/* Image Stack */}
      <div className="flex flex-col items-center gap-[20px]">
        <Link href="/oem/toyota" passHref>
          <img
            src="/toyota-menu.png"
            alt="Toyota Menu"
            className="cursor-pointer w-full"
            style={{ maxWidth: '3840px' }}
          />
        </Link>
        <Link href="/oem/porsche" passHref>
          <img
            src="/porsche-menu.png"
            alt="Porsche Menu"
            className="cursor-pointer w-full"
            style={{ maxWidth: '3840px' }}
          />
        </Link>
        <Link href="/oem/generalMotors" passHref>
          <img
            src="/gm-menu.png"
            alt="GM Menu"
            className="cursor-pointer w-full"
            style={{ maxWidth: '3840px' }}
          />
        </Link>
      </div>
    </div>
  );
}

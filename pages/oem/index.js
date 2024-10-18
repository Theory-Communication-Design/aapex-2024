import Link from 'next/link';
import Header from 'components/Header';

export default function OEM() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Header Component */}
      <Header />

      {/* Image Stack */}
      <div className="flex flex-col items-center gap-[1vh]">
        <Link href="/oem/toyota" passHref prefetch={true}>
          <img
            src="/images/toyota-menu.png"
            alt="Toyota Menu"
            className="cursor-pointer w-full"
            style={{ width: '100vw', height: 'auto' }}
          />
        </Link>
        <Link href="/oem/porsche" passHref prefetch={true}>
          <img
            src="/images/porsche-menu.png"
            alt="Porsche Menu"
            className="cursor-pointer w-full"
            style={{ width: '100vw', height: 'auto' }}
          />
        </Link>
        <Link href="/oem/generalMotors" passHref prefetch={true}>
          <img
            src="/images/gm-menu.png"
            alt="GM Menu"
            className="cursor-pointer w-full"
            style={{ width: '100vw', height: 'auto' }}
          />
        </Link>
      </div>
    </div>
  );
}

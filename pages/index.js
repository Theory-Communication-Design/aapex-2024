import Link from 'next/link';

export default function Landing() {
  return (
    <div
      className="flex flex-col items-center min-h-screen bg-cover bg-center text-white pt-20"
      style={{ backgroundImage: "url('/landing-bg.png')" }}
    >
      <h1 className="text-center text-[90px] font-emprintSemiBold mt-[400px]">
        Experience the power of the Mobil 1™ brand<br />
        as we push the boundaries of performance and innovation.
      </h1>
      <Link href="/home">
        <img
          src="/landing-cta.png"
          alt="Call to Action"
          className="mt-[250px]"
          style={{ width: '622px', height: 'auto' }}
        />
      </Link>
    </div>
  );
}

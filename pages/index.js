// import Link from 'next/link';

// export default function Landing() {
//   return (
//     <div
//       className="flex flex-col items-center min-h-screen bg-cover bg-center text-white pt-20"
//       style={{ backgroundImage: "url('/landing-bg.png')" }}
//     >
//       <h1 className="text-center text-[90px] font-emprintSemiBold mt-[400px]">
//         Experience the power of the Mobil 1™ brand<br />
//         as we push the boundaries of performance and innovation.
//       </h1>
//       <Link href="/home">
//         <img
//           src="/landing-cta.png"
//           alt="Call to Action"
//           className="mt-[250px]"
//           style={{ width: '622px', height: 'auto' }}
//         />
//       </Link>
//     </div>
//   );
// }

import Link from 'next/link';

export default function Landing() {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white pt-20">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: -1 }}
      >
        <source src="/videos/testVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="relative text-center text-[90px] font-emprintSemiBold mt-[400px] z-10">
        Experience the power of the Mobil 1™ brand<br />
        as we push the boundaries of performance and innovation.
      </h1>
      <Link href="/home">
        <img
          src="/landing-cta.png"
          alt="Call to Action"
          className="relative mt-[250px] z-10"
          style={{ width: '622px', height: 'auto' }}
        />
      </Link>
    </div>
  );
}

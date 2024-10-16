import Link from 'next/link';
import { useState, useRef, useContext } from 'react';
import UserActivityContext from '../contexts/UserActivityContext';

const PartnerPage = ({
  headerImage,
  headerMt,
  paragraph,
  paragraphMt,
  paragraphTextSize,
  products,
  productsMt,
  subheaderTop,
  videoSrc,
  fullScreenVideoSrc
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fullScreenVideoRef = useRef(null);
  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  const handlePlayClick = () => {
    setIsModalOpen(true);
    setFullScreenVideoSrc(fullScreenVideoSrc);

    setTimeout(() => {
      if (fullScreenVideoRef.current) {
        fullScreenVideoRef.current.play();
      }
    }, 100);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFullScreenVideoSrc(null);

    window.dispatchEvent(new Event('mousemove'));

    if (fullScreenVideoRef.current) {
      fullScreenVideoRef.current.pause();
      fullScreenVideoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Left Side */}
      <div
        className="pl-[5.5vw] pt-[4.5vw] absolute w-[80%] h-full bg-no-repeat bg-cover bg-top text-white p-10 z-10"
        style={{
          backgroundImage: 'url(/images/leftside.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'top',
        }}
      >
        {/* Header as an Image */}
        <div className="flex items-center" style={{ marginTop: headerMt }}>
          <img
            src={headerImage}
            alt="Header"
            className="h-auto w-[12vw]"
          />
        </div>

        {/* Paragraph */}
        <p className="font-emprint" style={{ marginTop: paragraphMt, fontSize: paragraphTextSize }}>
          {paragraph}
        </p>

        {/* Subheader */}
        <h2 className="relative text-[2vw] font-emprintSemiBold" style={{ top: subheaderTop }}>
          Feature Products:
        </h2>

        {/* Product Images */}
        <div className="flex space-x-[2vw]" style={{ marginTop: productsMt }}>
          {products.map((product, index) => (
            <Link key={index} href={product.link} passHref>
              <div className="cursor-pointer">
                <img
                  src={product.image}
                  alt={product.text}
                  style={{ width: 'auto', height: '22vw' }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Side - Video */}
      <div className="absolute right-0 h-full">
        {/* Background looping video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Button */}
        <div className="absolute inset-0 flex justify-center items-center ml-[50%] mt-[-15vw]">
          <img
            src="/images/play-icon.png"
            alt="Play Icon"
            className="w-[9vw] h-auto cursor-pointer z-10"
            onClick={handlePlayClick}
            style={{ pointerEvents: 'auto' }}
          />
        </div>
      </div>

      {/* Modal for Fullscreen Video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          <video
            ref={fullScreenVideoRef}
            controls={false}
            muted
            className="w-full h-full object-contain"
            onEnded={handleCloseModal}
            onLoadedMetadata={() => {
              if (fullScreenVideoRef.current) {
                fullScreenVideoRef.current.play();
              }
            }}
          >
            <source src={fullScreenVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={handleCloseModal} className="absolute top-7 right-16 text-white text-[100px]">
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default PartnerPage;

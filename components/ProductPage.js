import Link from 'next/link';
import { useState, useRef, useContext, useEffect } from 'react';
import UserActivityContext from '../contexts/UserActivityContext';

const ProductPage = ({
  header,
  headerTextSize,
  headerLineHeight,
  image,
  imageHeight,
  paragraph,
  paragraphTextSize,
  viscosity,
  viscosityMt,
  button1,
  button2,
  button3,
  button1Href,
  button2Href,
  button3Href,
  buttonsMt,
  sectionMt,
  videoSrc,
  posterSrc, // Passed poster prop
  fullScreenVideoSrc
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fullScreenVideoRef = useRef(null);
  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  useEffect(() => {
    if (isModalOpen) {
      setFullScreenVideoSrc(fullScreenVideoSrc);
    } else {
      setFullScreenVideoSrc(null);
    }
  }, [isModalOpen, fullScreenVideoSrc, setFullScreenVideoSrc]);

  const handlePlayClick = () => {
    setIsModalOpen(true);
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
        className="pl-[5.5vw] pt-[4.5vw] absolute top-0 left-0 w-[80%] h-full bg-no-repeat bg-cover bg-top text-white p-10 z-10"
        style={{
          backgroundImage: 'url(/images/leftside-product.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'top',
        }}
      >
        <h1 className="font-emprintSemiBold" style={{ fontSize: headerTextSize, lineHeight: headerLineHeight }}>
          {header}
        </h1>
        <div className="flex items-start" style={{ marginTop: sectionMt }}>
          <img src={image} style={{ height: imageHeight, width: 'auto' }} alt="Product Image" />
          <div className="flex flex-col ml-20">
            <p className="font-emprint" style={{ fontSize: paragraphTextSize, marginTop: '-15px' }}>
              {paragraph}
            </p>
            <div className="mt-24" style={{ marginTop: viscosityMt }}>
              <h2 className="text-[1.5vw] font-emprintSemiBold">Available Viscosities:</h2>
              <p className="text-[1.4vw] font-emprintSemiBold mt-1">{viscosity}</p>
            </div>
            <div className="flex items-center" style={{ marginTop: buttonsMt }}>
              <h2 className="text-[1.5vw] font-emprintSemiBold">Featured in:</h2>
              {button1 && button1Href && (
                <Link href={button1Href} passHref>
                  <div className="ml-10 cursor-pointer">
                    <img src={button1} style={{ height: '3vw', width: 'auto' }} />
                  </div>
                </Link>
              )}
              {button2 && button2Href && (
                <Link href={button2Href} passHref>
                  <div className="ml-5 cursor-pointer">
                    <img src={button2} style={{ height: '3vw', width: 'auto' }} />
                  </div>
                </Link>
              )}
              {button3 && button3Href && (
                <Link href={button3Href} passHref>
                  <div className="ml-5 cursor-pointer">
                    <img src={button3} style={{ height: '3vw', width: 'auto' }} />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Video */}
      <div className="absolute right-0 h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={posterSrc} // Use passed posterSrc prop
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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

      {/* Modal for Full-Screen Video */}
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
          <button onClick={handleCloseModal} className="absolute top-5 right-10 text-white text-[3vw]">
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductPage;

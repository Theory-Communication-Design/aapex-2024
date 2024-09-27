import Link from 'next/link';
import { useState, useRef } from 'react';

const ProductPage = ({
  header,
  headerTextSize,
  image,
  paragraph,
  paragraphTextSize,
  viscosity,
  viscosityMt,
  button1,
  button2,
  button3,
  button1Height,
  button2Height,
  button3Height,
  button1Href,
  button2Href,
  button3Href,
  buttonsMt,
  sectionMt,
  videoSrc,
  fullScreenVideoSrc
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fullScreenVideoRef = useRef(null);

  // Function to handle play button click
  const handlePlayClick = () => {
    setIsModalOpen(true);

    setTimeout(() => {
      if (fullScreenVideoRef.current) {
        fullScreenVideoRef.current.play();
      }
    }, 100);
  };

  // Function to close the modal (and stop video)
  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (fullScreenVideoRef.current) {
      fullScreenVideoRef.current.pause();
      fullScreenVideoRef.current.currentTime = 0;
    }
  };

  // Event handler for when the video ends
  const handleVideoEnded = () => {
    handleCloseModal();
  };

  return (
    <div className="relative min-h-screen">
      {/* Left Side */}
      <div
        className="pl-[225px] pt-[200px] absolute top-0 left-0 w-[80%] h-full bg-no-repeat bg-cover bg-top text-white p-10 z-10"
        style={{
          backgroundImage: 'url(/leftside-product.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'top',
        }}
      >
        {/* Header */}
        <h1 className="font-emprintSemiBold" style={{ fontSize: headerTextSize }}>{header}</h1>

        {/* Image, Paragraph, Viscosity, and Featured Section */}
        <div className="flex items-start" style={{ marginTop: sectionMt }}>
          <img
            src={image}
            className="mr-10"
            style={{ height: '1346px', width: 'auto' }}
          />

          {/* Paragraph, Viscosity, and Featured beside Image */}
          <div className="flex flex-col ml-28">
            <p className="font-emprint" style={{ fontSize: paragraphTextSize, marginTop: '-20px' }}>
              {paragraph}
            </p>

            <div className="mt-24" style={{ marginTop: viscosityMt }}>
              <h2 className="text-[55px] font-emprintSemiBold">Available Viscosities:</h2>
              <p className="text-[60px] font-emprintSemiBold mt-5">{viscosity}</p>
            </div>

            {/* Featured In Section */}
            <div className="flex items-center" style={{ marginTop: buttonsMt }}>
              <h2 className="text-[60px] font-emprintSemiBold">Featured in:</h2>

              <Link href={button1Href} passHref>
                <div className="ml-10 cursor-pointer">
                  <img
                    src={button1}
                    style={{ height: button1Height, width: 'auto' }}
                  />
                </div>
              </Link>

              <Link href={button2Href} passHref>
                <div className="ml-5 cursor-pointer">
                  <img
                    src={button2}
                    style={{ height: button2Height, width: 'auto' }}
                  />
                </div>
              </Link>

              {button3 && button3Href && (
                <Link href={button3Href} passHref>
                  <div className="ml-5 cursor-pointer">
                    <img
                      src={button3}
                      style={{ height: button3Height, width: 'auto' }}
                    />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Video */}
      <div className="absolute right-0  h-full">
        {/* Background looping video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Button Icon */}
        <div className="absolute inset-0 flex justify-center items-center ml-[50%] mt-[-500px]">
          <img
            src="/play-icon.png"
            alt="Play Icon"
            className="w-[356px] h-auto cursor-pointer z-10"
            onClick={handlePlayClick}
            style={{ pointerEvents: 'auto' }}
          />
        </div>
      </div>

      {/* Modal for fullscreen video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          <video
            ref={fullScreenVideoRef}
            controls={false}
            muted
            className="w-full h-full object-contain"
            onEnded={handleVideoEnded}
          >
            <source src={fullScreenVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Close button for the modal */}
          <button
            onClick={handleCloseModal}
            className="absolute top-5 right-5 text-white text-[40px]"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductPage;

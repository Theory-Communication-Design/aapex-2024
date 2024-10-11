import Link from 'next/link';
import { useState, useRef, useContext } from 'react';
import UserActivityContext from '../contexts/UserActivityContext';

const PartnerPage = ({
  headerImage,
  headerHeight,
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

  // Function to handle play button click
  const handlePlayClick = () => {
    setIsModalOpen(true);
    setFullScreenVideoSrc(fullScreenVideoSrc); // Update fullScreenVideoSrc when the video starts

    setTimeout(() => {
      if (fullScreenVideoRef.current) {
        fullScreenVideoRef.current.play();
      }
    }, 100);
  };

  // Function to close the modal (and stop video)
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFullScreenVideoSrc(null); // Reset fullScreenVideoSrc when video ends

    if (fullScreenVideoRef.current) {
      fullScreenVideoRef.current.pause();
      fullScreenVideoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Left Side */}
      <div
        className="pl-[250px] pt-[200px] absolute top-[-2px] left-0 w-[80%] h-full bg-no-repeat bg-cover bg-top text-white p-10 z-10"
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
            className="w-auto"
            style={{ height: headerHeight }}
          />
        </div>

        {/* Paragraph */}
        <p className="font-emprint" style={{ marginTop: paragraphMt, fontSize: paragraphTextSize }}>
          {paragraph}
        </p>

        {/* Subheader with relative positioning */}
        <h2 className="relative text-[70px] font-emprintSemiBold" style={{ top: subheaderTop }}>
          Feature Products:
        </h2>

        {/* Product Images as Buttons */}
        <div className="flex space-x-[75px]" style={{ marginTop: productsMt }}>
          {products.map((product, index) => (
            <Link key={index} href={product.link} passHref>
              <div className="cursor-pointer">
                <img
                  src={product.image}
                  alt={product.text}
                  style={{ width: 'auto', height: '821px' }}
                />
              </div>
            </Link>
          ))}
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
            src="/images/play-icon.png"
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
            onEnded={handleCloseModal}
          >
            <source src={fullScreenVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Close button for the modal */}
          <button
            onClick={handleCloseModal}
            className="absolute top-7 right-16 text-white text-[100px]"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default PartnerPage;

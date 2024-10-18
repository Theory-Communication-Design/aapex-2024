import ProductPage from 'components/ProductPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function TruckSUV() {
  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  const productData = {
    header: 'Mobil 1™ Truck & SUV',
    headerTextSize: '2vw',
    image: '/images/truckSUV.png',
    paragraph: (
      <>
        For some of the world’s hardest-working<br />
        engines, Mobil 1 Truck and SUV delivers<br />
        protection for towing, hauling and more.<br />
        Three viscosities of the advanced full synthetic<br />
        formula are available and are all designed to go<br />
        10,000 miles between oil changes.*<br />
        <span className='text-[0.6vw]'>*Protects for up to 10,000 miles or 1 year, whichever comes first</span>
      </>
    ),
    paragraphTextSize: '1vw',
    viscosity: '0W-20  |  5W-20  |  5W-30',
    viscosityMt: '4vw',
    sectionMt: '4vw',
    button1: '/images/xoverland-button.png',
    button2: '/images/toyota-button.png',
    button1Href: '/xoverland',
    button2Href: '/oem/toyota',
    buttonsMt: '7vw',
    videoSrc: '/videos/truckSUV-preview.mp4',
    fullScreenVideoSrc: '/videos/testVideo.mp4'
  };

  // Set the fullScreenVideoSrc when this page is loaded
  useEffect(() => {
    setFullScreenVideoSrc(productData.fullScreenVideoSrc);

    return () => {
      // Reset fullScreenVideoSrc when leaving the page
      setFullScreenVideoSrc(null);
    };
  }, [setFullScreenVideoSrc, productData.fullScreenVideoSrc]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ProductPage
        header={productData.header}
        headerTextSize={productData.headerTextSize}
        image={productData.image}
        imageHeight="36vw"
        paragraph={productData.paragraph}
        paragraphTextSize={productData.paragraphTextSize}
        viscosity={productData.viscosity}
        viscosityMt={productData.viscosityMt}
        sectionMt={productData.sectionMt}
        button1={productData.button1}
        button2={productData.button2}
        button1Href={productData.button1Href}
        button2Href={productData.button2Href}
        buttonsMt={productData.buttonsMt}
        videoSrc={productData.videoSrc}
        fullScreenVideoSrc={productData.fullScreenVideoSrc}
      />
    </div>
  );
}

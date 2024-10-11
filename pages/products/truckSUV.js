import ProductPage from 'components/ProductPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function TruckSUV() {
  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  const productData = {
    header: 'Mobil 1™ Truck & SUV',
    headerTextSize: '90px',
    image: '/images/truckSUV.png',
    paragraph: (
      <>
        For some of the world’s hardest-working<br />
        engines, Mobil 1 Truck and SUV delivers<br />
        protection for towing, hauling and more.<br />
        Three viscosities of the advanced full synthetic<br />
        formula are available and are all designed to go<br />
        10,000 miles between oil changes.*<br />
        <span className='text-[23.5px]'>*Protects for up to 10,000 miles or 1 year, whichever comes first</span>
      </>
    ),
    paragraphTextSize: '40px',
    viscosity: '0W-20  |  5W-20  |  5W-30',
    viscosityMt: '130px',
    sectionMt: '150px',
    button1: '/images/xoverland-button.png',
    button2: '/images/toyota-button.png',
    button1Height: '122px',
    button2Height: '122px',
    button1Href: '/xoverland',
    button2Href: '/oem/toyota',
    buttonsMt: '260px',
    videoSrc: '/videos/preview.mp4',
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
        imageHeight="1346px"
        paragraph={productData.paragraph}
        paragraphTextSize={productData.paragraphTextSize}
        viscosity={productData.viscosity}
        viscosityMt={productData.viscosityMt}
        sectionMt={productData.sectionMt}
        button1={productData.button1}
        button2={productData.button2}
        button1Height={productData.button1Height}
        button2Height={productData.button2Height}
        button1Href={productData.button1Href}
        button2Href={productData.button2Href}
        buttonsMt={productData.buttonsMt}
        videoSrc={productData.videoSrc}
        fullScreenVideoSrc={productData.fullScreenVideoSrc}
      />
    </div>
  );
}

import ProductPage from 'components/ProductPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function AdvancedFuelEconomy() {
  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  const productData = {
    header: 'Mobil 1™ Advanced Fuel Economy',
    headerTextSize: '80px',
    image: '/images/advancedFuelEconomy.png',
    paragraph: (
      <>
        For drivers who demand the best in<br />
        performance and fuel efficiency, Mobil 1™<br />
        Advanced Fuel Economy is engineered to<br />
        optimize your vehicle's performance while<br />
        minimizing fuel consumption. This advanced full<br />
        synthetic motor oil was designed to provide superior<br />
        wear protection, cleaning power, and keeps your engine<br />
        running like new.
      </>
    ),
    paragraphTextSize: '40px',
    viscosity: '0W-8  |  0W-16  |  0W-20  |  0W-30',
    viscosityMt: '120px',
    sectionMt: '160px',
    button1: '/images/toyota-button1.png',
    button1Height: '122px',
    button1Href: '/oem/toyota',
    buttonsMt: '210px',
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
        imageHeight="1265px"
        paragraph={productData.paragraph}
        paragraphTextSize={productData.paragraphTextSize}
        viscosity={productData.viscosity}
        viscosityMt={productData.viscosityMt}
        sectionMt={productData.sectionMt}
        button1={productData.button1}
        button1Height={productData.button1Height}
        button1Href={productData.button1Href}
        buttonsMt={productData.buttonsMt}
        videoSrc={productData.videoSrc}
        fullScreenVideoSrc={productData.fullScreenVideoSrc}
      />
    </div>
  );
}
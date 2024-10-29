import ProductPage from 'components/ProductPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function AdvancedFuelEconomy() {
  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  const productData = {
    header: 'Mobil 1™ Advanced Fuel Economy',
    headerTextSize: '2vw',
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
    paragraphTextSize: '1vw',
    viscosity: '0W-8  |  0W-16  |  0W-20  |  0W-30',
    viscosityMt: '3.5vw',
    sectionMt: '4vw',
    button1: '/images/toyota-button1.png',
    button1Href: '/oem/toyota',
    buttonsMt: '6.5vw',
    videoSrc: '/videos/advanced-preview.mp4',
    posterSrc: '/video-posters/advanced-preview-poster.jpg',
    fullScreenVideoSrc: '/videos/advanced-video.mp4'
  };

  useEffect(() => {
    setFullScreenVideoSrc(productData.fullScreenVideoSrc);

    return () => {
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
        imageHeight="33.5vw"
        paragraph={productData.paragraph}
        paragraphTextSize={productData.paragraphTextSize}
        viscosity={productData.viscosity}
        viscosityMt={productData.viscosityMt}
        sectionMt={productData.sectionMt}
        button1={productData.button1}
        button1Href={productData.button1Href}
        buttonsMt={productData.buttonsMt}
        videoSrc={productData.videoSrc}
        posterSrc={productData.posterSrc}
        fullScreenVideoSrc={productData.fullScreenVideoSrc}
      />
    </div>
  );
}

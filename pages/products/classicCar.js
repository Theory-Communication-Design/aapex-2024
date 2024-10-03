import ProductPage from 'components/ProductPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function ClassicCar() {
  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  const productData = {
    header: 'Mobil 1™ Classic Car',
    headerTextSize: '90px',
    image: '/images/classicCar.png',
    paragraph: (
      <>
        The perfect choice for owners of classic<br />
        cars who want to ensure their vehicles<br />
        receive the highest level of care and<br />
        protection. Designed to protect and preserve<br />
        these prized vehicles, it offers exceptional<br />
        performance and longevity.
      </>
    ),
    paragraphTextSize: '40px',
    viscosity: '10W-30',
    viscosityMt: '170px',
    sectionMt: '150px',
    button1: '/images/hagerty-button.png',
    button1Height: '121px',
    button1Href: '/hagerty',
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
        imageHeight="1347px"
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

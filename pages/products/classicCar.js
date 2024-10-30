import ProductPage from 'components/ProductPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function ClassicCar() {
  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  const productData = {
    header: 'Mobil 1™ Classic Car',
    headerTextSize: '2vw',
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
    paragraphTextSize: '1vw',
    viscosity: '10W-30',
    viscosityMt: '5vw',
    sectionMt: '4vw',
    button1: '/images/hagerty-button.png',
    button1Href: '/hagerty',
    buttonsMt: '7.5vw',
    videoSrc: '/videos/classicCar-preview.mp4',
    posterSrc: '/video-posters/classicCar-preview-poster.jpg',
    fullScreenVideoSrc: '/videos/classicCar-video.mp4'
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
        imageHeight="36vw"
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

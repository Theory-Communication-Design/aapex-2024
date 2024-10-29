import ProductPage from 'components/ProductPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function EuropeanCarFormula() {
  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  const productData = {
    header: 'Mobil 1™ FS European Car Formula',
    headerTextSize: '2vw',
    image: '/images/euro.png',
    paragraph: (
      <>
        The ideal choice for drivers who demand<br />
        the best in engine protection and performance.<br />
        Mobil 1™ FS European Car Formula was designed<br />
        to shield your engine from wear, deposits and<br />
        corrosion, ensuring long-lasting reliability.
      </>
    ),
    paragraphTextSize: '1vw',
    viscosity: '0W-40  |  5W-30  |  5W-40  |  5W-50',
    viscosityMt: '6vw',
    sectionMt: '4vw',
    button1: '/images/porsche-button1.png',
    button1Href: '/oem/porsche',
    buttonsMt: '8.5vw',
    videoSrc: '/videos/european-preview.mp4',
    posterSrc: '/video-posters/european-preview-poster.jpg',
    fullScreenVideoSrc: '/videos/european-video.mp4'
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

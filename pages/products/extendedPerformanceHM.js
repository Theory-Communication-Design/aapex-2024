import ProductPage from 'components/ProductPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function ExtendedPerformanceHM() {
  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  const productData = {
    header: (<>Mobil 1™ Extended Performance<br />High Mileage</>),
    headerTextSize: '2vw',
    image: '/images/extendedPerformanceHM.png',
    paragraph: (
      <>
        The ideal choice for drivers who demand<br />
        the best in engine protection and<br />
        performance. This advanced full synthetic<br />
        motor oil is designed to deliver outstanding wear <br />
        protection, cleaning power, and overall <br />
        performance for high-mileage vehicles.
      </>
    ),
    paragraphTextSize: '1vw',
    viscosity: '0W-20  |  5W-20  |  5W-30',
    viscosityMt: '4.5vw',
    sectionMt: '4vw',
    button1: '/images/hagerty-button.png',
    button1Href: '/hagerty',
    buttonsMt: '7vw',
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
        headerLineHeight='2.5vw'
        image={productData.image}
        imageHeight="31vw"
        paragraph={productData.paragraph}
        paragraphTextSize={productData.paragraphTextSize}
        viscosity={productData.viscosity}
        viscosityMt={productData.viscosityMt}
        sectionMt={productData.sectionMt}
        button1={productData.button1}
        button1Href={productData.button1Href}
        buttonsMt={productData.buttonsMt}
        videoSrc={productData.videoSrc}
        fullScreenVideoSrc={productData.fullScreenVideoSrc}
      />
    </div>
  );
}

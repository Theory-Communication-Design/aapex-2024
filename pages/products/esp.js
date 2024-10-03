import ProductPage from 'components/ProductPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function ESP() {
  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  const productData = {
    header: 'Mobil 1™ ESP',
    headerTextSize: '90px',
    image: '/images/esp.png',
    paragraph: (
      <>
        The ideal choice for drivers of gasoline<br />
        and diesel-powered vehicles who demand<br />
        the best in performance and engine<br />
        cleanliness. This advanced full synthetic motor oil<br />
        is engineered to meet the demands of modern<br />
        high-performance engines.
      </>
    ),
    paragraphTextSize: '40px',
    viscosity: '0W-40',
    viscosityMt: '170px',
    sectionMt: '150px',
    button1: '/images/porsche-button1.png',
    button1Height: '121px',
    button1Href: '/oem/porsche',
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
        imageHeight="1260px"
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

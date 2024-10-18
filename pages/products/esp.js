import ProductPage from 'components/ProductPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function ESP() {
  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  const productData = {
    header: 'Mobil 1™ ESP',
    headerTextSize: '2vw',
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
    paragraphTextSize: '1vw',
    viscosity: '0W-20 | 0W-30 | 0W-40  | 5W-30',
    viscosityMt: '5vw',
    sectionMt: '4vw',
    button1: '/images/porsche-button1.png',
    button1Href: '/oem/porsche',
    buttonsMt: '8vw',
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
        fullScreenVideoSrc={productData.fullScreenVideoSrc}
      />
    </div>
  );
}

import ProductPage from 'components/ProductPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function Racing() {
  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  const productData = {
    header: 'Mobil 1 Racing™',
    headerTextSize: '100px',
    image: '/images/racing.png',
    paragraph: (
      <>
        This full synthetic motor oil was specifically<br />
        formulated for high-performance racing<br />
        applications. Engineered to withstand the<br />
        extreme demands of motorsports, it delivers<br />
        exceptional protection, performance and reliability.
      </>
    ),
    paragraphTextSize: '40px',
    viscosity: '0W-30  |  0W-50',
    viscosityMt: '200px',
    sectionMt: '140px',
    button1: '/images/redbull-button.png',
    button1Height: '121px',
    button1Href: '/redbullracing',
    buttonsMt: '300px',
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
        imageHeight="1246px"
        paragraph={productData.paragraph}
        paragraphTextSize={productData.paragraphTextSize}
        viscosity={productData.viscosity}
        viscosityMt={productData.viscosityMt}
        sectionMt={productData.sectionMt}
        button1={productData.button1}
        button1Height={productData.button1Height}
        button2Height={productData.button2Height}
        button1Href={productData.button1Href}
        buttonsMt={productData.buttonsMt}
        videoSrc={productData.videoSrc}
        fullScreenVideoSrc={productData.fullScreenVideoSrc}
      />
    </div>
  );
}

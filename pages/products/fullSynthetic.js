import ProductPage from 'components/ProductPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function FullSynthetic() {
  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  const productData = {
    header: 'Mobil 1™ Full Synthetic',
    headerTextSize: '90px',
    image: '/fullSynthetic.png',
    paragraph: (
      <>
        Engineered to provide exceptional<br />
        performance and protection for a<br />
        wide range of vehicles, this advanced<br />
        formula offers superior wear, protection,<br />
        cleaning power, and overall engine health<br />
        for drivers who demand the best in engine<br />
        protection and performance.
      </>
    ),
    paragraphTextSize: '45px',
    viscosity: '5W-20  |  5W-30  |  15W-50',
    viscosityMt: '110px',
    sectionMt: '150px',
    button1: '/porsche-button.png',
    button2: '/hotwheels-button.png',
    button1Height: '121px',
    button2Height: '121px',
    button1Href: '/oem/porsche',
    button2Href: '/hotwheels',
    buttonsMt: '220px',
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

import ProductPage from 'components/ProductPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function FullSynthetic() {
  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  const productData = {
    header: 'Mobil 1™ Advanced Full Synthetic',
    headerTextSize: '2vw',
    image: '/images/fullSynthetic.png',
    paragraph: (
      <>
        Engineered to help extend engine<br />
        life, even in severe driving conditions.<br />
        This advanced formula offers superior<br />
        wear protection, cleaning power, and<br />
        overall engine health for drivers who<br />
        demand the best in engine protection<br/>
        and performance.
      </>
    ),
    paragraphTextSize: '1vw',
    viscosity: '5W-20  |  5W-30  |  10W-30  |  15W-50',
    viscosityMt: '4vw',
    sectionMt: '4vw',
    button1: '/images/rocketLeague-button.png',
    button2: '/images/hotwheels-button.png',
    button1Href: '/rocketleague',
    button2Href: '/hotwheels',
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
        image={productData.image}
        imageHeight="36vw"
        paragraph={productData.paragraph}
        paragraphTextSize={productData.paragraphTextSize}
        viscosity={productData.viscosity}
        viscosityMt={productData.viscosityMt}
        sectionMt={productData.sectionMt}
        button1={productData.button1}
        button2={productData.button2}
        button1Href={productData.button1Href}
        button2Href={productData.button2Href}
        buttonsMt={productData.buttonsMt}
        videoSrc={productData.videoSrc}
        fullScreenVideoSrc={productData.fullScreenVideoSrc}
      />
    </div>
  );
}

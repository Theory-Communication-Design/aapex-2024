import ProductPage from 'components/ProductPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function Supercar() {
  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  const productData = {
    header: 'Mobil 1™ Supercar',
    headerTextSize: '90px',
    image: '/supercar.png',
    paragraph: (
      <>
        For some of the highest-performing<br />
        sports cars out there, Mobil 1™ Supercar is<br />
        specifically engineered to handle the extreme<br />
        demands of track days and everyday driving.<br />
        This formula delivers exceptional protection,<br />
        performance and longevity for your turbocharged,<br />
        supercharged or naturally aspirated engine.
      </>
    ),
    paragraphTextSize: '40px',
    viscosity: '0W-40  |  5W-50',
    viscosityMt: '150px',
    sectionMt: '150px',
    button1: '/gm-button.png',
    button1Height: '121px',
    button1Href: '/oem/generalMotors',
    buttonsMt: '250px',
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
        preview={productData.preview}
        videoSrc={productData.videoSrc}
        fullScreenVideoSrc={productData.fullScreenVideoSrc}
      />
    </div>
  );
}

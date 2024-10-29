import ProductPage from 'components/ProductPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function Supercar() {
  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  const productData = {
    header: 'Mobil 1™ Supercar',
    headerTextSize: '2vw',
    image: '/images/supercar.png',
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
    paragraphTextSize: '1vw',
    viscosity: '0W-40  |  5W-50',
    viscosityMt: '4vw',
    sectionMt: '4vw',
    button1: '/images/gm-button.png',
    button1Href: '/oem/generalMotors',
    buttonsMt: '7vw',
    videoSrc: '/videos/supercar-preview.mp4',
    posterSrc: '/video-posters/supercar-preview-poster.jpg',
    fullScreenVideoSrc: '/videos/supercar-video.mp4'
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

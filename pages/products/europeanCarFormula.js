import ProductPage from 'components/ProductPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function EuropeanCarFormula() {
  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  const productData = {
    header: 'Mobil 1™ FS European Car Formula',
    headerTextSize: '80px',
    image: '/images/euro.png',
    paragraph: (
      <>
        The ideal choice for drivers who demand the <br />
        best in engine protection and performance. <br />
        Mobil 1™ FS European Car Formula was designed<br />
        to shield your engine from wear, deposits and<br />
        orrosion, ensuring long-lasting reliability.
      </>
    ),
    paragraphTextSize: '40px',
    viscosity: '0W-40  |  5W-30  |  5W-40  |  5W-50',
    viscosityMt: '170px',
    sectionMt: '170px',
    button1: '/images/redbull-button.png',
    button1Height: '121px',
    button1Href: '/redbullracing',
    buttonsMt: '330px',
    videoSrc: '/videos/preview.mp4',
    fullScreenVideoSrc: '/videos/testVideo.mp4'
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ProductPage
        header={productData.header}
        headerTextSize={productData.headerTextSize}
        image={productData.image}
        imageHeight="1349px"
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

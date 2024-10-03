import PartnerPage from 'components/PartnerPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function Toyota() {
  const partnerData = {
    headerImage: '/toyota-header.png',
    headerHeight: '139px',
    headerMt: '-80px',
    paragraph: (
      <>
        The relationship between Toyota and the Mobil 1™ brand focuses on<br />
        developing lubricants that optimize engine life and fuel economy. As a<br />
        result, Mobil 1 advanced full synthetic motor oil is the factory fill for numerous<br />
        Toyota models. This relationship has also extended into motorsports, where TRD<br />
        teams have earned hundreds of wins across circle track, sports car, drag and<br />
        off-road racing, demonstrating the combined performance of Toyota vehicles and<br />
        Mobil 1 lubricants under extreme conditions. Dozens of racers like Pro Formula DRIFT<br />
        driver Ryan Tuerck, a representative of both the Toyota and Mobil 1 brands and a<br />
        champion of the collaboration, are living proof of what this collaboration has to offer.
      </>
    ),
    paragraphMt: '100px',
    paragraphTextSize: '40px',
    products: [
      { image: '/toyota-product1.png', link: '/products/truckSUV' },
      { image: '/toyota-product2.png', link: '/products/advancedFuelEconomy' }
    ],
    productsMt: '20px',
    subheaderTop: '160px',
    videoSrc: '/videos/preview.mp4',
    fullScreenVideoSrc: '/videos/testVideo.mp4'
  };

  // Get the context to update fullScreenVideoSrc state
  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  useEffect(() => {
    // Update the fullScreenVideoSrc when this page is loaded
    setFullScreenVideoSrc(partnerData.fullScreenVideoSrc);

    return () => {
      // Reset fullScreenVideoSrc when leaving the page
      setFullScreenVideoSrc(null);
    };
  }, [setFullScreenVideoSrc, partnerData.fullScreenVideoSrc]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PartnerPage
        headerImage={partnerData.headerImage}
        headerHeight={partnerData.headerHeight}
        headerMt={partnerData.headerMt}
        paragraph={partnerData.paragraph}
        paragraphMt={partnerData.paragraphMt}
        paragraphTextSize={partnerData.paragraphTextSize}
        products={partnerData.products}
        productsMt={partnerData.productsMt}
        subheaderTop={partnerData.subheaderTop}
        videoSrc={partnerData.videoSrc}
        fullScreenVideoSrc={partnerData.fullScreenVideoSrc}
      />
    </div>
  );
}

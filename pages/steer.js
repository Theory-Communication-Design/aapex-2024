import PartnerPage from 'components/PartnerPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../contexts/UserActivityContext';

export default function Steer() {
  const partnerData = {
    headerImage: '/steer-header.png',
    headerHeight: '165px',
    headerMt: '-80px',
    paragraph: (
      <>
        Steer is revolutionizing the automotive service industry by providing<br />
        innovative solutions for repair shops. The Mobil 1™ brand is committed to<br />
        enhancing the customer experience and leverages Steer’s platform to enable<br />
        shops to focus on their trade. Shops and consumers alike benefit from the<br />
        increased ease of booking and service updates. By aligning your business with the <br />
        Mobil 1 team and Steer, you can create a seamless experience for existing clients and<br />
        attract new customers. For more information and a demo, visit the Steer representative <br />
        located inside the Mobil 1 booth.
      </>
    ),
    paragraphMt: '90px',
    paragraphTextSize: '40px',
    products: [
      { image: '/steer-product1.png', link: '/products/extendedPerformance' }
    ],
    productsMt: '60px',
    subheaderTop: '180px',
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

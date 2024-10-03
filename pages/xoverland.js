import PartnerPage from 'components/PartnerPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../contexts/UserActivityContext';

export default function XOverland() {
  const partnerData = {
    headerImage: '/xoverland-header.png',
    headerHeight: '234px',
    headerMt: '-80px',
    paragraph: (
      <>
        XOverland is a decade-plus partner of Toyota producing cinematic<br />
        adventure-themed overlanding content with authentic individuals. In the<br />
        network’s Creator Series, extraordinary people doing extraordinary things<br />
        have earned over a million hours viewed to date. Content includes series like<br />
        Desk to Glory, We Will Roam and Bound for Nowhere, in which overlanders<br />
        document their global adventures with a unique twist. Other programs include Roam<br />
        Overland in which an African overlander rediscovers his homeland, and Gon Cookin’,<br />
        highlighting a guest’s favorite dish adapted for camping. The Mobil 1™ brand shares the<br />
        same spirit of adventure, and a Retailer can reap the rewards of showcasing individuals<br />
        overcoming the harshest conditions.
      </>
    ),
    paragraphMt: '0px',
    paragraphTextSize: '40px',
    products: [
      { image: '/xoverland-product1.png', link: '/products/truckSUV' },
      { image: '/xoverland-product2.png', link: '/products/extendedPerformance' }
    ],
    productsMt: '-40px',
    subheaderTop: '100px',
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

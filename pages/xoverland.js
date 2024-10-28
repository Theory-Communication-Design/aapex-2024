import PartnerPage from 'components/PartnerPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../contexts/UserActivityContext';

export default function XOverland() {
  const partnerData = {
    headerImage: '/images/xoverland-header.png',
    headerMt: '-1.5vw',
    paragraph: (
      <>
        XOverland is a decade-plus partner of Toyota producing cinematic<br />
        adventure-themed overlanding content with authentic individuals. In the<br />
        network’s Creator Series driven by Mobil 1™, ordinary people doing extraordinary<br />
        things have earned over a million hours viewed to date. Content includes series like<br />
        <i>Desk to Glory</i>, <i>We Will Roam</i>, and <i>Bound for Nowhere</i>, in which overlanders document<br />
        their global adventures with a unique twist. Other programs include <i>Roam Overland</i> in which<br />
        an African overlander rediscovers his homeland and <i>Gon Cookin’</i>, highlighting a guest’s favorite<br />
        dish adapted for camping. The Mobil 1™ brand shares the same spirit of adventure. As a Retailer,<br />
        you have the opportunity to align yourself with a demographic of outdoor enthusiasts who put<br />
        their vehicles to the test.
      </>
    ),
    paragraphMt: '2.5vw',
    paragraphTextSize: '1vw',
    products: [
      { image: '/images/xoverland-product1.png', link: '/products/truckSUV/' },
      { image: '/images/xoverland-product2.png', link: '/products/extendedPerformance/' }
    ],
    productsMt: '-1vw',
    subheaderTop: '3vw',
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

import PartnerPage from 'components/PartnerPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../contexts/UserActivityContext';

export default function Steer() {
  const partnerData = {
    headerImage: '/images/steer-header.png',
    headerMt: '-2vw',
    headerWidth: '22vw',
    paragraph: (
      <>
        Steer is an industry-leading shop marketing and communications<br />
        platform designed to bring customers to shops and grow shop sales<br />
        through increased car count and ticket averages. As part of the<br />
        long-term collaboration with Steer, the Mobil marketing team is working with<br />
        Steer to deliver new fluid service communications aimed at increasing consumer<br />
        engagement, knowledge and usage of Mobil 1™ products.<br />
        <span style={{ display: 'block', marginBottom: '1vw' }}></span>
        Also, Steer and the industry-leading shop scheduling platform called Auto Ops have just<br />
        merged, allowing consumers to easily book Mobil 1™ oil changes. Learn more about these<br />
        platforms at the Steer table inside our booth.
      </>
    ),
    paragraphMt: '2vw',
    paragraphTextSize: '1vw',
    products: [
      { image: '/images/steer-product1.png', link: '/products/extendedPerformance/' }
    ],
    productsMt: '0.2vw',
    subheaderTop: '4vw',
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
        headerWidth={partnerData.headerWidth}
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

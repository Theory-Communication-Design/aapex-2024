import PartnerPage from 'components/PartnerPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../contexts/UserActivityContext';

export default function Hagerty() {
  const partnerData = {
    headerImage: '/images/hagerty-header.png',
    headerMt: '-1vw',
    paragraph: (
      <>
        The relationship between Hagerty and the Mobil 1™ brand is dedicated<br />
        to preserving automotive history and culture and protecting iconic vehicles for<br />
        future generations by providing the essential care classic cars deserve. Together<br />
        we developed and premiered the documentary “Racing with Giants: Porsche at<br />
        Le Mans”, narrated by Le Mans podium finisher Patrick Dempsey, which currently<br />
        sits at over 900K views on YouTube. We also collaborate on “The Driver’s Seat”, a series<br />
        with 3.9M views hosted by Henry Catchpole, offering a look at some of the world's most<br />
        exciting cars. Retailers can benefit from the passionate market this sponsorship taps into<br />
        through experiences and content.
      </>
    ),
    paragraphMt: '3vw',
    paragraphTextSize: '1vw',
    products: [
      { image: '/images/hagerty-product1.png', link: '/products/extendedPerformanceHM' },
      { image: '/images/hagerty-product2.png', link: '/products/classicCar' }
    ],
    productsMt: '0.5vw',
    subheaderTop: '4vw',
    videoSrc: '/videos/hagerty-preview.mp4',
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

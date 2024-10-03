import PartnerPage from 'components/PartnerPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function Porsche() {
  const partnerData = {
    headerImage: '/porsche-header.png',
    headerHeight: '45px',
    headerMt: '-30px',
    paragraph: (
      <>
        Porsche is synonymous with luxury, performance, and engineering<br />
        excellence, and we share this vision. These teams have collaborated to<br />
        develop content for the Rennsport Reunion, a gathering for Porsche<br />
        enthusiasts of all ages. The Mobil 1 DR1VRS CLUB  also hosted a 3-month<br />
        campaign to drive consumers to Porsche dealerships, in this case by giving away a<br />
        IP trip to Pikes Peak International Hill Climb. The partnership between the Mobil 1™<br />
        brand and Porsche’s racing team has also resulted in more than 30,000 victories since<br />
        its inception. Retailers can be sure to find value in both brands’ commitment to innovation<br />
        and consumer experience.
      </>
    ),
    paragraphMt: '120px',
    paragraphTextSize: '40px',
    products: [
      { image: '/porsche-product1.png', link: '/products/fullSynthetic' },
      { image: '/porsche-product2.png', link: '/products/esp' }
    ],
    productsMt: '30px',
    subheaderTop: '170px',
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

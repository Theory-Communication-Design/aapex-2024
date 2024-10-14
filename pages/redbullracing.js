import PartnerPage from 'components/PartnerPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../contexts/UserActivityContext';

export default function RedBullRacing() {
  const partnerData = {
    headerImage: '/images/redbull-header.png',
    headerHeight: '160px',
    headerMt: '-80px',
    paragraph: (
      <>
        Our sponsorship with this high-performance team is a testament to our<br />
        commitment to pushing the boundaries of lubricant technology. Together,<br />
        Red Bull Racing and the Mobil 1™ brand strive to include consumers in the<br />
        high-adrenaline, high-achievement world of Formula 1. The Pit Stop tour has multiple<br />
        stops around the country, inviting consumers to try their hand at being part of a pit crew.<br />
        Show runs allow spectators to witness the power of the brands up close and personal.<br />
        Through this sponsorship, Retailers have the opportunity to engage consumers through unique<br />
        and exciting promotions. Promotions can be customized to fit each retailer go to market strategy<br/>
        and can include everything from Oracle Red Bull Racing branded merchandise to exclusive tours<br/>
        of the ORBR factory in London, UK.
      </>
    ),
    paragraphMt: '90px',
    paragraphTextSize: '40px',
    products: [
      { image: '/images/redbull-product1.png', link: '/products/racing/' }
    ],
    productsMt: '-60px',
    subheaderTop: '80px',
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

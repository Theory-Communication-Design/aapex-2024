import PartnerPage from 'components/PartnerPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../contexts/UserActivityContext';

export default function HotWheels() {
  const partnerData = {
    headerImage: '/images/hotwheels-header.png',
    headerMt: '-2vw',
    paragraph: (
      <>
        Since 1968, Hot Wheels has been a global phenomenon capturing the<br />
        imagination of both kids and adults. The Mobil 1™ brand shares in the<br />
        excitement of the limitless possibilities Hot Wheels inspires. As part of our<br />
        sponsorship, we have worked alongside well-known automotive personalities<br />
        like Patrick Long and Ryan Tuerck to develop projects like Long’s Mobil 1 Porsche<br />
        Dirtmeister 914 Safari, and Tuerck’s Toyota Stout Drift Truck. Since 2018, the Hot<br />
        Wheels Legends Tour presented by Mobil 1 has celebrated custom car culture and<br />
        offered enthusiasts a platform to showcase their unique, hand-crafted builds.These<br />
        programs, as well as numerous contests and giveaways, provide Retailers with a world<br/>
        of fun and imaginative opportunities for all demographics.
      </>
    ),
    paragraphMt: '2vw',
    paragraphTextSize: '1vw',
    products: [
      { image: '/images/hotwheels-product1.png', link: '/products/fullSynthetic' }
    ],
    productsMt: '0vw',
    subheaderTop: '3.5vw',
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

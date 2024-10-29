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
        imagination of both kids and adults. The Mobil 1™ brand shares in the excitement<br />
        of the limitless possibilities Hot Wheels inspires. As part of our sponsorship, we have<br />
        worked alongside well-known automotive personalities like Patrick Long and Ryan<br />
        Tuerck to develop projects like Long’s Mobil 1 Porsche Dirtmeister 944 and the Mobil 1<br />
        Porsche 914 Safari, and Tuerck’s Toyota Stout Drift Truck. Since 2018, the Hot Wheels<br />
        Legends Tour presented by Mobil 1 has celebrated custom car culture and offered enthusiasts<br />
        a platform to showcase their their unique, hand-crafted builds. These programs, as well as<br />
        numerous contests and giveaways, provide Retailers with a world of fun and imaginative<br/>
        opportunities for all demographics.
      </>
    ),
    paragraphMt: '2vw',
    paragraphTextSize: '1vw',
    products: [
      { image: '/images/hotwheels-product1.png', link: '/products/fullSynthetic' }
    ],
    productsMt: '0vw',
    subheaderTop: '3.5vw',
    videoSrc: '/videos/hotWheels-preview.mp4',
    posterSrc: '/video-posters/hotWheels-preview-poster.jpg',
    fullScreenVideoSrc: '/videos/hotWheels-video.mp4'
  };

  const { setFullScreenVideoSrc } = useContext(UserActivityContext);

  useEffect(() => {
    setFullScreenVideoSrc(partnerData.fullScreenVideoSrc);

    return () => {
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
        posterSrc={partnerData.posterSrc}
        fullScreenVideoSrc={partnerData.fullScreenVideoSrc}
      />
    </div>
  );
}

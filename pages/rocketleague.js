import PartnerPage from 'components/PartnerPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../contexts/UserActivityContext';

export default function RocketLeague() {
  const partnerData = {
    headerImage: '/images/rocketLeague-header.png',
    headerMt: '-1.5vw',
    paragraph: (
      <>
        Rocket League is an arcade-style, automotive soccer game that allows<br />
        millions of players to drive for the win. The Mobil 1™ brand has joined forces<br />
        with Rocket League to bring together the worlds of gaming and performance.<br />
        This is achieved through in-game items and decals and real-life giveaways.<br />
        Additionally, the well-known North American Rocket League team GenG Mobil 1<br />
        Racing was formed as a result of a sponsorship between American eSports<br />
        organization Gen.G eSports and the Mobil 1 brand. The seamless integration of the<br />
        Mobil 1 brand into a video game with an extensive reach allows sponsors to tap into a<br />
        young, dynamic and engaged audience.
      </>
    ),
    paragraphMt: '2.5vw',
    paragraphTextSize: '1vw',
    products: [
      { image: '/images/rocketLeague-product1.png', link: '/products/fullSynthetic/' }
    ],
    productsMt: '-0.4vw',
    subheaderTop: '3vw',
    videoSrc: '/videos/rocketLeague-preview.mp4',
    posterSrc: '/video-posters/rocketLeague-preview-poster.jpg',
    fullScreenVideoSrc: '/videos/rocketLeague-video.mp4'
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

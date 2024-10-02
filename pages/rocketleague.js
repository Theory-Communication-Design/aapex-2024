import PartnerPage from 'components/PartnerPage';
import Header from 'components/Header';

export default function RocketLeague() {
  const partnerData = {
    headerImage: '/rocketLeague-header.png',
    headerHeight: '165px',
    headerMt: '-80px',
    paragraph: (
      <>
        Rocket League is an arcade-style, automotive soccer game that allows<br />
        millions of players to drive for the win. The Mobil 1™ brand has joined forces<br />
        with Rocket League to bring together the worlds of gaming and performance.<br />
        This is achieved through in-game items and decals, and real-life giveaways.<br />
        Additionally, the well-known North American Rocket League team, GenG Mobil 1<br />
        Racing, was formed as a result of a sponsorship between American eSports<br />
        organization Gen.G eSports and the Mobil 1 brand. The seamless integration of the<br />
        Mobil 1 brand into a video game with an extensive reach allows sponsors to tap into a<br />
        young, dynamic, and engaged audience.
      </>
    ),
    paragraphMt: '90px',
    paragraphTextSize: '40px',
    products: [
      { image: '/rocketLeague-product1.png', link: '/products/advancedFuelEconomy' }
    ],
    productsMt: '0px',
    subheaderTop: '130px',
    videoSrc: '/videos/preview.mp4',
    fullScreenVideoSrc: '/videos/testVideo.mp4'
  };

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

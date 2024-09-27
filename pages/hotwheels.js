import PartnerPage from 'components/PartnerPage';
import Header from 'components/Header';

export default function HotWheels() {
  const partnerData = {
    headerImage: '/hotwheels-header.png',
    headerHeight: '131px',
    headerMt: '-80px',
    paragraph: (
      <>
        Since 1968, Hot Wheels has been a global phenomenon capturing the<br />
        imagination of both kids and adults. The Mobil 1™ brand shares in the<br />
        excitement of the limitless possibilities Hot Wheels inspires. As part of our<br />
        partnership, we have worked alongside well-known automotive personalities<br />
        Patrick Long and Jay Leno to develop projects like Long’s Porsche 944 Dirtmeister<br />
        and the Twin Mill with Jay Leno. Additionally, since 2018, the Hot Wheels Legends<br />
        Tour has visited several major cities each year. A promotional event and competition, the<br />
        tour celebrates custom car culture and provides enthusiasts a platform to showcase their<br />
        unique, hand-crafted builds. These programs, as well as numerous contests and giveaways,<br />
        provide Retailers with a world of fun and imaginative opportunities.
      </>
    ),
    paragraphMt: '90px',
    paragraphTextSize: '40px',
    products: [
      { image: 'hotwheels-product1.png', link: '/products/fullSynthetic' }
    ],
    productsMt: '-30px',
    preview: '/xoverland-preview.png',
    subheaderTop: '100px',
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
        preview={partnerData.preview}
        subheaderTop={partnerData.subheaderTop}
        videoSrc={partnerData.videoSrc}
        fullScreenVideoSrc={partnerData.fullScreenVideoSrc}
      />
    </div>
  );
}

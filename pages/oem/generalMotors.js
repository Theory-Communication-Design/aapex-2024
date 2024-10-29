import PartnerPage from 'components/PartnerPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function GeneralMotors() {
  const partnerData = {
    headerImage: '/images/gm-header.png',
    headerMt: '-1.5vw',
    paragraph: (
      <>
        General Motors has a rich history of automotive innovation, and the<br />
        Mobil 1™ brand is proud to be a part of that legacy. Mobil 1 advanced full<br />
        synthetic motor oil is the factory fill and recommended oil for numerous GM<br />
        vehicles, including the iconic Chevrolet Corvette. With nearly 1 million Corvettes<br />
        rolling off the line factory-filled, Mobil 1™ Supercar was developed to capture the<br />
        true essence of our performance heritage. Mobil 1 motor oils are also the Official<br />
        Motor Oil of Chevrolet Performance, which features multiple custom crate engine<br />
        builds used as display vehicles for various Retail needs. These collaborations allow<br />
        Retailers to take advantage of the trust and loyalty associated with both powerful<br />
        automotive brands.
      </>
    ),
    paragraphMt: '2.5vw',
    paragraphTextSize: '1vw',
    products: [
      { image: '/images/gm-product1.png', link: '/products/supercar' }
    ],
    productsMt: '-0.8vw',
    subheaderTop: '3vw',
    videoSrc: '/videos/gm-preview.mp4',
    posterSrc: '/video-posters/gm-preview-poster.jpg',
    fullScreenVideoSrc: '/videos/gm-video.mp4'
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

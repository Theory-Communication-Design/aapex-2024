import PartnerPage from 'components/PartnerPage';
import Header from 'components/Header';
import React, { useEffect, useContext } from 'react';
import UserActivityContext from '../../contexts/UserActivityContext';

export default function Porsche() {
  const partnerData = {
    headerImage: '/images/porsche-header.png',
    headerMt: '-0vw',
    paragraph: (
      <>
        Porsche is synonymous with luxury, performance, and engineering<br />
        excellence and we share this vision. These teams have collaborated to<br />
        develop content for the Rennsport Reunion, a gathering for Porsche<br />
        enthusiasts of all ages. The Mobil 1 DR1VRS CLUB℠ also hosted a 3-month<br />
        campaign to drive consumers to Porsche dealerships, in this case by giving away a<br />
        VIP trip to Pikes Peak International Hill Climb. The relationship between the Mobil 1™<br />
        brand and Porsche has also resulted in more than 30,000 victories on the track since<br />
        its inception. Retailers can align themselves with a brand that promotes meticulous car care<br />
        and inspires driving in the moment.
      </>
    ),
    paragraphMt: '3.5vw',
    paragraphTextSize: '1vw',
    products: [
      { image: '/images/porsche-product1.png', link: '/products/europeanCarFormula' },
      { image: '/images/porsche-product2.png', link: '/products/esp' }
    ],
    productsMt: '0.6vw',
    subheaderTop: '4vw',
    videoSrc: '/videos/porsche-preview.mp4',
    posterSrc: '/video-posters/porsche-preview-poster.jpg',
    fullScreenVideoSrc: '/videos/porsche-video.mp4'
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

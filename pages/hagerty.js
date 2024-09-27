import PartnerPage from 'components/PartnerPage';
import Header from 'components/Header';

export default function Hagerty() {
  const partnerData = {
    headerImage: '/hagerty-header.png',
    headerHeight: '87px',
    headerMt: '-80px',
    paragraph: (
      <>
        The partnership between Hagerty and the Mobil 1™ brand is dedicated<br />
        to preserving automotive history and culture, protecting iconic vehicles for<br />
        future generations by providing the essential care classic cars deserve. This<br />
        collaboration supports the RADwood show series, which offers an exclusive<br />
        opportunity to celebrate classic cars from the 80s and 90s, with thousands of<br />
        attendees from all over the country. It has also offered the opportunity for Rod<br />
        Emory to participate in Hagerty events and promote Mobil 1 products, thus reinforcing<br />
        both brands’ ideologies and contributing to social content. Retailers can benefit from the<br />
        passionate market this partnership taps into.
      </>
    ),
    paragraphMt: '100px',
    paragraphTextSize: '40px',
    products: [
      { image: 'hagerty-product1.png', link: '/products/extendedPerformance' },
      { image: '/hagerty-product2.png', link: '/products/product2' }
    ],
    productsMt: '60px',
    preview: '/xoverland-preview.png',
    subheaderTop: '170px',
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

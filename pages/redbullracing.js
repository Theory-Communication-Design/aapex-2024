import PartnerPage from 'components/PartnerPage';
import Header from 'components/Header';

export default function RedBullRacing() {
  const partnerData = {
    headerImage: '/redbull-header.png',
    headerHeight: '160px',
    headerMt: '-80px',
    paragraph: (
      <>
        Our partnership with this high-performance team is a testament to our<br />
        commitment to pushing the boundaries of lubricant technology. Together,<br />
        Red Bull Racing and the Mobil 1™ brand strive to include consumers in the<br />
        high-adrenaline, high-achievement world of Formula 1. The Pit Stop tour has<br />
        multiple stops around the country, inviting consumers to try their hand at being<br />
        art of a pit crew. Show runs allow spectators to witness the power of the brands up<br />
        close and personal. Through this partnership, Retailers have the opportunity to keep<br />
        consumers engaged with first-person experiences.
      </>
    ),
    paragraphMt: '90px',
    paragraphTextSize: '40px',
    products: [
      { image: 'redbull-product1.png', link: '/products/truckSUV' }
    ],
    productsMt: '50px',
    preview: '/xoverland-preview.png',
    subheaderTop: '170px',
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
      />
    </div>
  );
}

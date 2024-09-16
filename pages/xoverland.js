import PartnerPage from 'components/PartnerPage';
import Header from 'components/Header';

export default function XOverland() {

  const partnerData = {
    header: 'Expedition Overland',
    logo: '/xoverland-logo.png',
    paragraph: 'Expedition Overland is a global adventure team that embodies the spirit of exploration. The Mobil 1™ brand shares that same spirit as we push the boundaries of performance in the harshest conditions. As a Retailer, imagine the impact of showcasing this adventurous lifestyle.',
    products: [
      { image: 'xoverland-product1.png', link: '/truckSUV' },
      { image: '/xoverland-product2.png', link: '/product2' }
    ],
    preview: '/xoverland-preview.png'
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PartnerPage
        header={partnerData.header}
        logo={partnerData.logo}
        paragraph={partnerData.paragraph}
        products={partnerData.products}
        preview={partnerData.preview}
      />
    </div>
  );
}

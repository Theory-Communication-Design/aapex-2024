import ProductPage from 'components/ProductPage';
import Header from 'components/Header';

export default function TruckSUV() {

  const productData = {
    header: 'Mobil 1™ Truck & SUV',
    headerTextSize: '90px',
    image: '/truckSUV.png',
    paragraph: (
      <>
        For some of the world’s hardest-working<br />
        engines, Mobil 1 Truck and SUV delivers<br />
        protection for towing, hauling and more.<br />
        Three viscosities of the advanced full synthetic<br />
        formula are available and are all designed to go<br />
        10,000 miles between oil changes*.<br/>
        <span className='text-[23.5px]'>*Protects for up to 10,000 miles or 1 year, whichever comes first</span>
      </>
    ),
    paragraphTextSize: '40px',
    viscosity: '0W-20  |  5W-20  |  5W-30',
    viscosityMt: '130px',
    sectionMt: '125px',
    button1: '/xoverland-button.png',
    button2: '/toyota-button.png',
    button1Height: '122px',
    button2Height: '120px',
    button1Href: '/xoverland',
    button2Href: '/toyota',
    buttonsMt: '260px',
    preview: '/truckSUV-preview.png'
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ProductPage
        header={productData.header}
        headerTextSize={productData.headerTextSize}
        image={productData.image}
        paragraph={productData.paragraph}
        paragraphTextSize={productData.paragraphTextSize}
        viscosity={productData.viscosity}
        viscosityMt={productData.viscosityMt}
        sectionMt={productData.sectionMt}
        button1={productData.button1}
        button2={productData.button2}
        button1Height={productData.button1Height}
        button2Height={productData.button2Height}
        button1Href={productData.button1Href}
        button2Href={productData.button2Href}
        buttonsMt={productData.buttonsMt}
        preview={productData.preview}
      />
    </div>
  );
}
import ProductPage from 'components/ProductPage';
import Header from 'components/Header';

export default function TruckSUV() {

  const productData = {
    header: 'Mobil 1™ Truck & SUV',
    image: '/truckSUV.png',
    paragraph: (
      <>
        For some of the world’s<br />
        hardest-working engines, Mobil 1™<br />
        Truck and SUV delivers protection for<br />
        towing, hauling and more. Three<br />
        viscosities of the advanced synthetic<br />
        formula are available – all designed to<br />
        go 10,000 miles between oil changes.
      </>
    ),
    viscosity: '0W-20  |  5W-20  |  5W-30',
    button: '/xoverland-button.png',
    preview: '/truckSUV-preview.png'
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ProductPage
        header={productData.header}
        image={productData.image}
        paragraph={productData.paragraph}
        viscosity={productData.viscosity}
        button={productData.button}
        preview={productData.preview}
      />
    </div>
  );
}

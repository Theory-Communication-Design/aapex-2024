import ProductPage from 'components/ProductPage';
import Header from 'components/Header';

export default function FullSynthetic() {

  const productData = {
    header: 'Mobil 1™ Full Synthetic',
    headerTextSize: '90px',
    image: '/fullSynthetic.png',
    paragraph: (
      <>
        Engineered to provide exceptional<br />
        performance and protection for a<br />
        wide range of vehicles, this advanced<br />
        formula offers superior wear, protection,<br />
        cleaning power, and overall engine health<br />
        for drivers who demand the best in engine<br/>
        protection and performance.
      </>
    ),
    paragraphTextSize: '45px',
    viscosity: '5W-20  |  5W-30  |  15W-50',
    viscosityMt: '80px',
    sectionMt: '150px',
    button1: '/porsche-button.png',
    button2: '/toyota-button.png',
    button3: '/hotwheels-button.png',
    button1Height: '105px',
    button2Height: '105px',
    button3Height: '105px',
    button1Href: '/oem/porsche',
    button2Href: '/oem/toyota',
    button3Href: '/hotwheels',
    buttonsMt: '180px',
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
        button3={productData.button3}
        button1Height={productData.button1Height}
        button2Height={productData.button2Height}
        button3Height={productData.button3Height}
        button1Href={productData.button1Href}
        button2Href={productData.button2Href}
        button3Href={productData.button3Href}
        buttonsMt={productData.buttonsMt}
        preview={productData.preview}
      />
    </div>
  );
}

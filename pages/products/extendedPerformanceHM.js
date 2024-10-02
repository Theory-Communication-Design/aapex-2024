import ProductPage from 'components/ProductPage';
import Header from 'components/Header';

export default function ExtendedPerformanceHM() {

  const productData = {
    header: (<>Mobil 1™ Extended Performance<br/>High Mileage</>),
    headerTextSize: '80px',
    image: '/extendedPerformanceHM.png',
    paragraph: (
      <>
        The ideal choice for drivers who demand<br />
        the best in engine protection and<br />
        performance. This advanced full synthetic<br />
        motor oil is designed to deliver outstanding wear <br />
        protection, cleaning power, and overall <br />
        performance for high-mileage vehicles.
      </>
    ),
    paragraphTextSize: '45px',
    viscosity: '0W-20  |  5W-20  |  5W-30',
    viscosityMt: '150px',
    sectionMt: '100px',
    button1: '/hagerty-button.png',
    button1Height: '121px',
    button1Href: '/hagerty',
    buttonsMt: '250px',
    videoSrc: '/videos/preview.mp4',
    fullScreenVideoSrc: '/videos/testVideo.mp4'
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ProductPage
        header={productData.header}
        headerTextSize={productData.headerTextSize}
        headerLineHeight='90px'
        image={productData.image}
        imageHeight="1261px"
        paragraph={productData.paragraph}
        paragraphTextSize={productData.paragraphTextSize}
        viscosity={productData.viscosity}
        viscosityMt={productData.viscosityMt}
        sectionMt={productData.sectionMt}
        button1={productData.button1}
        button1Height={productData.button1Height}
        button1Href={productData.button1Href}
        buttonsMt={productData.buttonsMt}
        videoSrc={productData.videoSrc}
        fullScreenVideoSrc={productData.fullScreenVideoSrc}
      />
    </div>
  );
}

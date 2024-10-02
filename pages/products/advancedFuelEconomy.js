import ProductPage from 'components/ProductPage';
import Header from 'components/Header';

export default function AdvancedFuelEconomy() {

  const productData = {
    header: 'Mobil 1™ Advanced Fuel Economy',
    headerTextSize: '80px',
    image: '/advancedFuelEconomy.png',
    paragraph: (
      <>
        For drivers who demand the best in<br />
        performance and fuel efficiency, Mobil 1™<br />
        Advanced Fuel Economy is engineered to<br />
        optimize your vehicle's performance while<br />
        minimizing fuel consumption. This advanced full<br />
        synthetic motor oil was designed to provide superior<br />
        wear protection, cleaning power, and keeps your engine<br />
        running like new.
      </>
    ),
    paragraphTextSize: '40px',
    viscosity: '0W-8  |  0W-16  |  0W-20  |  0W-30',
    viscosityMt: '120px',
    sectionMt: '160px',
    button1: '/rocketLeague-button.png',
    button2: '/toyota-button.png',
    button1Height: '122px',
    button2Height: '122px',
    button1Href: '/rocketleague',
    button2Href: '/oem/toyota',
    buttonsMt: '210px',
    videoSrc: '/videos/preview.mp4',
    fullScreenVideoSrc: '/videos/testVideo.mp4'
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ProductPage
        header={productData.header}
        headerTextSize={productData.headerTextSize}
        image={productData.image}
        imageHeight="1265px"
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
        videoSrc={productData.videoSrc}
        fullScreenVideoSrc={productData.fullScreenVideoSrc}
      />
    </div>
  );
}
// import ProductPage from 'components/ProductPage';
import Header from 'components/Header';

export default function ClassicCar() {

  // const productData = {
  //   header: 'Mobil 1™ Extended Performance',
  //   headerTextSize: '80px',
  //   image: '/extendedPerformance.png',
  //   paragraph: (
  //     <>
  //       The ideal choice for drivers who<br />
  //       demand higher endurance and<br />
  //       long-lasting protection for their engines.<br />
  //       This full synthetic motor oil is designed to<br />
  //       deliver outstanding wear protection, cleaning<br />
  //       power and overall performance for up to 20,000<br/>
  //       miles between oil changes*.<br/>
  //       <span className='text-[23.5px]'>*Protects for up to 20,000 miles or 1 year, whichever comes first</span>
  //     </>
  //   ),
  //   paragraphTextSize: '45px',
  //   viscosity: '0W-20  |  5W-20  |  5W-30  |  10W-30',
  //   viscosityMt: '80px',
  //   sectionMt: '150px',
  //   button1: '/xoverland-button.png',
  //   button2: '/steer-button.png',
  //   button1Height: '122px',
  //   button2Height: '122px',
  //   button1Href: '/xoverland',
  //   button2Href: '/steer',
  //   buttonsMt: '180px',
  //   videoSrc: '/videos/preview.mp4',
  //   fullScreenVideoSrc: '/videos/testVideo.mp4'
  // };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* <ProductPage
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
        videoSrc={productData.videoSrc}
        fullScreenVideoSrc={productData.fullScreenVideoSrc}
      /> */}
    </div>
  );
}

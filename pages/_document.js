import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload videos */}
        <link rel="preload" href="/videos/landing1.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/menu.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/preview.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/testVideo.mp4" as="video" type="video/mp4" />

        <link rel="preload" href="/videos/toyota-preview.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/hagerty-preview.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/truckSUV-preview.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/classicCar-preview.mp4" as="video" type="video/mp4" />

        {/* Preload images */}
        <link rel="preload" href="/images/xoverland-header.png" as="image" />
        <link rel="preload" href="/images/xoverland-product1.png" as="image" />
        <link rel="preload" href="/images/xoverland-product2.png" as="image" />
        <link rel="preload" href="/images/advancedFuelEconomy.png" as="image" />
        <link rel="preload" href="/images/classicCar.png" as="image" />
        <link rel="preload" href="/images/esp.png" as="image" />
        <link rel="preload" href="/images/euro.png" as="image" />
        <link rel="preload" href="/images/extendedPerformance.png" as="image" />
        <link rel="preload" href="/images/extendedPerformanceHM.png" as="image" />
        <link rel="preload" href="/images/fullSynthetic.png" as="image" />
        <link rel="preload" href="/images/gm-button.png" as="image" />
        <link rel="preload" href="/images/gm-header.png" as="image" />
        <link rel="preload" href="/images/gm-menu.png" as="image" />
        <link rel="preload" href="/images/gm-product1.png" as="image" />
        <link rel="preload" href="/images/hagerty-button.png" as="image" />
        <link rel="preload" href="/images/hagerty-header.png" as="image" />
        <link rel="preload" href="/images/hagerty-home.png" as="image" />
        <link rel="preload" href="/images/hagerty-product1.png" as="image" />
        <link rel="preload" href="/images/hagerty-product2.png" as="image" />
        <link rel="preload" href="/images/hotwheels-button.png" as="image" />
        <link rel="preload" href="/images/hotwheels-header.png" as="image" />
        <link rel="preload" href="/images/hotwheels-home.png" as="image" />
        <link rel="preload" href="/images/hotwheels-product1.png" as="image" />
        <link rel="preload" href="/images/landing-cta.png" as="image" />
        <link rel="preload" href="/images/leftside-product.png" as="image" />
        <link rel="preload" href="/images/leftside.png" as="image" />
        <link rel="preload" href="/images/logo.png" as="image" />
        <link rel="preload" href="/images/oem-home.png" as="image" />
        <link rel="preload" href="/images/play-icon.png" as="image" />
        <link rel="preload" href="/images/porsche-button.png" as="image" />
        <link rel="preload" href="/images/porsche-button1.png" as="image" />
        <link rel="preload" href="/images/porsche-header.png" as="image" />
        <link rel="preload" href="/images/porsche-menu.png" as="image" />
        <link rel="preload" href="/images/porsche-product1.png" as="image" />
        <link rel="preload" href="/images/porsche-product2.png" as="image" />
        <link rel="preload" href="/images/products-home.png" as="image" />
        <link rel="preload" href="/images/racing.png" as="image" />
        <link rel="preload" href="/images/redbull-button.png" as="image" />
        <link rel="preload" href="/images/redbull-header.png" as="image" />
        <link rel="preload" href="/images/redbull-home.png" as="image" />
        <link rel="preload" href="/images/redbull-product1.png" as="image" />
        <link rel="preload" href="/images/rocketLeague-button.png" as="image" />
        <link rel="preload" href="/images/rocketLeague-header.png" as="image" />
        <link rel="preload" href="/images/rocketLeague-home.png" as="image" />
        <link rel="preload" href="/images/rocketLeague-product1.png" as="image" />
        <link rel="preload" href="/images/steer-button.png" as="image" />
        <link rel="preload" href="/images/steer-header.png" as="image" />
        <link rel="preload" href="/images/steer-home.png" as="image" />
        <link rel="preload" href="/images/steer-product1.png" as="image" />
        <link rel="preload" href="/images/supercar.png" as="image" />
        <link rel="preload" href="/images/toyota-button.png" as="image" />
        <link rel="preload" href="/images/toyota-button1.png" as="image" />
        <link rel="preload" href="/images/toyota-header.png" as="image" />
        <link rel="preload" href="/images/toyota-menu.png" as="image" />
        <link rel="preload" href="/images/toyota-product1.png" as="image" />
        <link rel="preload" href="/images/toyota-product2.png" as="image" />
        <link rel="preload" href="/images/truckSUV.png" as="image" />
        <link rel="preload" href="/images/xoverland-button.png" as="image" />
        <link rel="preload" href="/images/xoverland-header.png" as="image" />
        <link rel="preload" href="/images/xoverland-home.png" as="image" />
        <link rel="preload" href="/images/xoverland-logo.png" as="image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

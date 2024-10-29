import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload videos */}
        <link rel="preload" href="/videos/landing1.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/menu.mp4" as="video" type="video/mp4" />

        <link rel="preload" href="/videos/toyota-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/hagerty-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/truckSUV-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/classicCar-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/gm-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/porsche-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/advanced-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/esp-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/european-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/EP-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/EPHM-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/fullSynthetic-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/racing-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/supercar-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/hotWheels-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/redBull-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/rocketLeague-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/steer-video.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/videos/xoverland-video.mp4" as="video" type="video/mp4" />

        {/* Preload video poster images */}
        <link rel="preload" href="/video-posters/menu-preview-poster.jpg" as="image" type="image/jpeg" />

        <link rel="preload" href="/video-posters/toyota-preview-poster.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/video-posters/hagerty-preview-poster.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/video-posters/truckSUV-preview-poster.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/video-posters/classicCar-preview-poster.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/video-posters/gm-preview-poster.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/video-posters/porsche-preview-poster.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/video-posters/advanced-preview-poster.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/video-posters/esp-preview-poster.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/video-posters/european-preview-poster.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/video-posters/EP-preview-poster.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/video-posters/EPHM-preview-poster.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/video-posters/fullSynthetic-preview-poster.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/video-posters/racing-preview-poster.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/video-posters/supercar-preview-poster.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/video-posters/hotWheels-preview-poster.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/video-posters/redBull-preview-poster.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/video-posters/rocketLeague-preview-poster.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/video-posters/steer-preview-poster.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/video-posters/xoverland-preview-poster.jpg" as="image" type="image/jpeg" />

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

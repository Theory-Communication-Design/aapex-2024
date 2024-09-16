import Link from 'next/link';

const ProductPage = ({ header, image, paragraph, viscosity, button, preview }) => {
  return (
    <div className="relative min-h-screen">
      {/* Left Side */}
      <div
        className="pl-[225px] pt-[200px] absolute top-0 left-0 w-[80%] h-full bg-no-repeat bg-cover bg-top text-white p-10 z-10"
        style={{
          backgroundImage: 'url(/leftside-product.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'top',
        }}
      >
        {/* Header */}
        <h1 className="text-[90px] font-emprintSemiBold">{header}</h1>

        {/* Image, Paragraph, Viscosity, and Featured Section */}
        <div className="flex mt-[125px] items-start">
          {/* Truck SUV Image */}
          <img
            src={image}
            alt="Truck SUV"
            className="mr-10"
            style={{ height: '1346px', width: 'auto' }}
          />

          {/* Paragraph, Viscosity, and Featured beside Image */}
          <div className="flex flex-col ml-28">
            <p className="text-[50px] font-emprint mt-[-20px]">{paragraph}</p>
            <div className="mt-24">
              <h2 className="text-[65px] font-emprintSemiBold">Available Viscosities:</h2>
              <p className="text-[65px] font-emprintSemiBold">{viscosity}</p>
            </div>

            {/* Featured In Section */}
            <div className="flex items-center mt-44">
              <h2 className="text-[65px] font-emprintSemiBold">Featured in:</h2>
              <Link href="/xoverland" passHref>
                <div className="ml-10 cursor-pointer">
                  <img
                    src={button}
                    alt="XOverland Button"
                    style={{ width: '650px', height: 'auto' }}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative ml-[44%] w-[56%] h-full">
        <img
          src={preview}
          alt="Preview Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProductPage;

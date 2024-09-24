import Link from 'next/link';

const PartnerPage = ({
  headerImage,
  headerHeight,
  headerMt,
  paragraph,
  paragraphMt,
  paragraphTextSize,
  products,
  productsMt,
  preview,
  subheaderTop
}) => {
  return (
    <div className="relative min-h-screen">
      {/* Left Side */}
      <div
        className="pl-[250px] pt-[200px] absolute top-0 left-0 w-[80%] h-full bg-no-repeat bg-cover bg-top text-white p-10 z-10"
        style={{
          backgroundImage: 'url(/leftside.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'top',
        }}
      >
        {/* Header as an Image */}
        <div className="flex items-center" style={{ marginTop: headerMt }}>
          <img
            src={headerImage}
            alt="Header"
            className="w-auto"
            style={{ height: headerHeight }}
          />
        </div>

        {/* Paragraph */}
        <p className="font-emprint" style={{ marginTop: paragraphMt, fontSize: paragraphTextSize }}>
          {paragraph}
        </p>

        {/* Subheader with relative positioning */}
        <h2 className="relative text-[70px] font-emprintSemiBold" style={{ top: subheaderTop }}>
          Feature Products:
        </h2>

        {/* Product Images as Buttons */}
        <div className="flex space-x-[75px]" style={{ marginTop: productsMt }}>
          {products.map((product, index) => (
            <Link key={index} href={product.link} passHref>
              <div className="cursor-pointer">
                <img
                  src={product.image}
                  alt={product.text}
                  style={{ width: 'auto', height: '821px' }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="relative ml-[40%] w-[60%] h-full">
        <img
          src={preview}
          alt="Preview Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default PartnerPage;

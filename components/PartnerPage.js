import Link from 'next/link';

const PartnerPage = ({ header, logo, paragraph, products, preview }) => {
  return (
    <div className="relative min-h-screen">
      {/* Left Side */}
      <div
        className="pl-[225px] pt-[200px] absolute top-0 left-0 w-[80%] h-full bg-no-repeat bg-cover bg-top text-white p-10 z-10"
        style={{
          backgroundImage: 'url(/leftside.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'top'
        }}
      >
        {/* Header with Logo */}
        <div className="flex items-center">
          <h1 className="text-[100px] font-emprintSemiBold">{header}</h1>
          <img
            src={logo}
            alt="Logo"
            className="ml-20"
            style={{ width: '137px', height: 'auto' }}
          />
        </div>

        {/* Paragraph */}
        <p className="mt-6 text-[60px] font-emprint mt-20">{paragraph}</p>

        {/* Subheader with relative positioning to move it down */}
        <h2 className="relative text-[70px] font-emprintSemiBold" style={{ top: '150px' }}> {/* Adjust the top value as needed */}
          Feature Products:
        </h2>

        {/* Product Images as Buttons */}
        <div className="flex space-x-8">
          {products.map((product, index) => (
            <Link key={index} href={product.link} passHref>
              <div className="cursor-pointer">
                <img
                  src={product.image}
                  alt={product.text}
                  style={{ width: 'auto', height: '804px' }}
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

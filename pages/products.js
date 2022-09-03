import Image from "next/image";

const Products = () => {
  return (
    <div>
      <div>
        <h2>fixed</h2>
        <Image alt="object" src="/images/1.jpg" layout="fixed" width={200} height={200} />
      </div>

      <div>
        <h2>intrinsic</h2>
        <Image alt="object" src="/images/2.jpg" layout="intrinsic" width={600} height={400} />
      </div>

      <div>
        <h2>responsive</h2>
        <Image alt="object" src="/images/3.jpg" layout="responsive" width={600} height={400} />
      </div>

      <div style={{ position: "relative", width: "300px", height: "500px" }}>
        <h2>fill</h2>
        <Image alt="object" src="/images/4.jpg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};
export default Products;

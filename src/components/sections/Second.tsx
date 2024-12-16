// import Image from "next/image";

// // Define type for product items
// type ProductItem = {
//   title: string;
//   imageSrc: string;
//   alt: string;
// };

// // Product items data array
// const productItems: ProductItem[] = [
//   { title: "Product 1", imageSrc: "/Dining.png", alt: "Product 1" },
//   { title: "Product 2", imageSrc: "/images/product2.jpg", alt: "Product 2" },
//   { title: "Product 3", imageSrc: "/images/product3.jpg", alt: "Product 3" },
//   { title: "Product 4", imageSrc: "/images/product4.jpg", alt: "Product " },
//   { title: "Product 5", imageSrc: "/images/product4.jpg", alt: "Product " },
//   { title: "Product 6", imageSrc: "/images/product4.jpg", alt: "Product " },
//   { title: "Product 7", imageSrc: "/images/product4.jpg", alt: "Product " },
//   { title: "Product 8", imageSrc: "/images/product4.jpg", alt: "Product " },
// ];

// export default function OurProductSection() {
//   return (
//     <section className="w-full py-10 bg-white">
//       {/* Our Product Section Title */}
//       <div className="text-center mb-8">
//         <h3 className="text-3xl font-bold text-blue-600">Our Product</h3>
//       </div>

//       {/* Product Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-8 lg:px-16">
//         {productItems.map((product) => (
//           <div
//             key={product.title}
//             className="relative bg-gray-200 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 overflow-hidden"
//           >
//             <Image
//               src={product.imageSrc}
//               alt={product.alt}
//               width={300}
//               height={300}
//               className="object-cover w-full h-64"
//             />
//             <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
//               <p className="text-sm font-medium">{product.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

// Define type for product items
type ProductItem = {
  title: string;
  imageSrc: string;
  price: string;
  alt: string;
  redirectUrl: string; // Add a URL for redirection
};

// Product items data array
const productItems: ProductItem[] = [
  { title: "Leviosa", imageSrc: "/Dining.png", price: "Rp 2.500.000", alt: "Leviosa Product", redirectUrl: "/products/leviosa" },
  { title: "Lolito", imageSrc: "/Living.png", price: "Rp 7.000.000", alt: "Lolito Product", redirectUrl: "/products/lolito" },
  { title: "Dining Set", imageSrc: "/images/product3.jpg", price: "Rp 5.000.000", alt: "Dining Product", redirectUrl: "/products/dining-set" },
];

export default function Second() {
  const router = useRouter();

  // Handle click event to redirect
  const handleRedirect = (url: string) => {
    router.push(url);
  };

  return (
    <section className="w-full py-10 bg-white">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-800">Our Products</h3>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-16">
        {productItems.map((product) => (
          <div
            key={product.title}
            className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-105"
          >
            {/* Product Image */}
            <Image
              src={product.imageSrc}
              alt={product.alt}
              width={400}
              height={400}
              className="object-cover w-full h-64"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => handleRedirect(product.redirectUrl)}
                className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-md shadow-md hover:bg-yellow-500 transition-colors duration-300"
              >
                Add to Cart
              </button>
            </div>

            {/* Product Details */}
            <div className="p-4 bg-white text-gray-800">
              <h4 className="text-lg font-semibold">{product.title}</h4>
              <p className="text-sm text-gray-500 mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

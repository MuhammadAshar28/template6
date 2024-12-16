// import Image from "next/image";

// export default function Hero() {
//   return (
//     <div className="relative">
//       {/* Image Container */}
//       <Image
//         src="/Hero.png"
//         width={1440}
//         height={100}
//         alt="Hero Image"
//         className="w-full h-auto"
//       />
      
//       {/* Text Overlay */}
//       <div className="absolute inset-0 flex flex-col items-center justify-end  p-6">
//         <h6 className="text-sm font-semibold">New Arrival</h6>
//         <h3 className="text-3xl font-bold text-center mb-4">
//           Discover Our <br /> New Collection
//         </h3>
//         <p className="text-center text-gray-600 mb-6">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore
//         </p>
//         <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
//           BUY NOW
//         </button>
//       </div>
//     </div>
//   );
// }



import Image from "next/image";
export default function Hero() {
  return (
    <>
      {/* w90rem h 63 */}
      <div className="heroImage mb-52">
        <Image
          src="/Hero.png"
          width={1440}
          height={100}
          alt="Picture of the author"
        />
        <div className="heroText bg-[#FFF3E3]">
          <h6>New Arrival</h6>
          <h3>Discover Our <br /> New Collection</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dolore</p>
            <button className=" buyBtn">BUY NOW</button>
        </div>
      </div>
    </>
  );
}
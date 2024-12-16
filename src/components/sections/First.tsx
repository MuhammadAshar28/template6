import Image from "next/image";

export default function First() {
  return (
    <section className="w-full py-10 bg-white">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-600">Browse The Range</h2>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Image Cards */}
      <div className="mt-8 flex justify-center gap-6 flex-wrap">
        {/* Dining Card */}
        <div className="relative group w-64">
          <Image
            src="/dining.png" // Replace with your dining image path
            alt="Dining"
            width={300}
            height={400}
            className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <p className="text-center mt-2 font-medium text-blue-600">Dining</p>
        </div>

        {/* Living Card */}
        <div className="relative group w-64">
          <Image
            src="/Living.png" // Replace with your living image path
            alt="Living"
            width={300}
            height={400}
            className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <p className="text-center mt-2 font-medium text-blue-600">Living</p>
        </div>

        {/* Bedroom Card */}
        <div className="relative group w-64">
          <Image
            src="/Bedroom.png" // Replace with your bedroom image path
            alt="Bedroom"
            width={300}
            height={400}
            className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <p className="text-center mt-2 font-medium text-blue-600">Bedroom</p>
        </div>
      </div>

      {/* Our Product Section */}
      <div className="text-center mt-8">
        <h3 className="text-2xl font-bold text-blue-600">Our Product</h3>
      </div>
    </section>
  );
}

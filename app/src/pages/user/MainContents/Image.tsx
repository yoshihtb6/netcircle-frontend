import { useState } from "react";

const images = [
  { id: 1, src: "/images/2t2O0Aqo.jpg", category: "narutema" },
  { id: 2, src: "/images/m3hD-0XX.jpg", category: "narutema" },
  { id: 3, src: "/images/PXL_20241013_081721263.jpg", category: "omatsu" },
  { id: 4, src: "/images/PXL_20241013_084422956.jpg", category: "nurutema" },
  { id: 5, src: "/images/R-cdseia.jpg", category: "jony" },
];

const categories = ["all", "nature", "architecture", "people"];

export const Image = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((image) => image.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Photo Gallery</h1>

      {/* Category Filter */}
      <div className="flex justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 m-2 border rounded-lg ${
              activeCategory === category
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 border-blue-500"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={image.src}
              alt=""
              className="w-full h-64 object-cover transform transition duration-300 hover:scale-110 hover:brightness-50"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


// export const Image = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold text-center mb-6">Image Gallery</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {galleryImages.map((image) => (
//           <div
//             key={image.id}
//             className="relative overflow-hidden rounded-lg shadow-lg group"
//           >
//             <img
//               src={image.src}
//               alt={image.title}
//               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="flex space-x-4">
//                 <a
//                   href={image.src}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-white text-xl hover:text-gray-300"
//                 >
//                   <i className="bi bi-arrows-angle-expand"></i>
//                 </a>
//                 <a
//                   href={`/gallery-single/${image.id}`}
//                   className="text-white text-xl hover:text-gray-300"
//                 >
//                   <i className="bi bi-link-45deg"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

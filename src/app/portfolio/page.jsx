"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BiLinkExternal, BiZoomIn } from "react-icons/bi";
import Link from "next/link";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { portfolioItems, categories } from "@/data/portfolioItems";

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    let filtered = portfolioItems;

    if (activeFilter !== "all") {
      filtered = filtered.filter((item) => item.category === activeFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  }, [activeFilter, searchTerm]);

  return (
    <div className="pt-32">
      <section id="portfolio" className="portfolio section py-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-lg text-gray-600">
              Explore our diverse range of successful projects across various
              technologies and industries
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <input
              type="text"
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex justify-center mb-8">
            <ul className="flex space-x-4">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    className={`px-4 py-2 rounded-full cursor-pointer ${
                      activeFilter === category.id
                        ? "bg-[#059652] text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => setActiveFilter(category.id)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                className="bg-white border border-[#059652]/30 rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="flex items-center justify-center gap-4">
                      <button
                        onClick={() => {
                          setIsOpen(true);
                          setPhotoIndex(index);
                        }}
                        className="text-white text-3xl bg-[#059652] rounded-full p-2 cursor-pointer"
                      >
                        <BiZoomIn className="text-white text-xl" />
                      </button>
                      <Link
                        href={`/portfolio/${item.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-3xl bg-[#059652] rounded-full p-2 cursor-pointer"
                      >
                        <BiLinkExternal className="text-white text-xl" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  {(item.client || item.date) && (
                    <div className="mt-3">
                      {item.client && (
                        <small className="text-gray-500 block">
                          Client: {item.client}
                        </small>
                      )}
                      {item.date && (
                        <small className="text-gray-500 block">
                          Date: {item.date}
                        </small>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-5">
              <h4 className="text-xl font-semibold">No projects found</h4>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {isOpen && (
        <Lightbox
          mainSrc={filteredItems[photoIndex].image}
          nextSrc={filteredItems[(photoIndex + 1) % filteredItems.length].image}
          prevSrc={
            filteredItems[
              (photoIndex + filteredItems.length - 1) % filteredItems.length
            ].image
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + filteredItems.length - 1) % filteredItems.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % filteredItems.length)
          }
        />
      )}
    </div>
  );
};

export default PortfolioPage;

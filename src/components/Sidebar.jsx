import React from "react";
import { useState } from "react";

export function Sidebar() {

  const categories = ["Nike", "Airmax", "Nike", "Adidas", "Vans", "All Stars", "Adidas"];
  const colors = [
    { name: "Blue", value: "#006cff" },
    { name: "Red", value: "#fc3e39" },
    { name: "Black", value: "#171717" },
    { name: "Yellow", value: "#fff600" },
    { name: "Pink", value: "#FF00B4" },
  ];
  const brands = ["Nike", "Adidas", "Nike", "Siemens"];

  // State for selected colors
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const toggleColor = (colorValue) => {
    setSelectedColors((prev) =>
      prev.includes(colorValue)
        ? prev.filter((c) => c !== colorValue)
        : [...prev, colorValue]
    );
  };

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };
    return(
            <aside className="w-64 bg-white rounded-lg shadow-md p-6 h-fit">
            {/* Hot Deals */}
            <div className="mb-6">
              <div className="bg-red-500 text-white px-3 py-1 rounded text-sm font-semibold inline-block mb-4">
                Hot Deals
              </div>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-700 hover:text-blue-600 block py-1">
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">PRICES</h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm">$13.99</span>
                <span className="text-sm">-</span>
                <span className="text-sm">$25.99</span>
              </div>
              <div className="relative">
                <div className="h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-blue-500 rounded" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">COLOR</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => toggleColor(color.value)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColors.includes(color.value) ? 'border-gray-800' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
              </div>
            </div>

            {/* Brand */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3 ">BRAND</h3>
              <div className="space-y-2 ">
                {brands.map((brand, index) => (
                  <label key={index} className="flex items-center">
                    <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    />
                    <span className="text-gray-700  hover:text-blue-600">{brand}</span>
                  </label>
          ))}
        </div>
        
      </div>

            <button className="w-full bg-gray-200 text-black py-2 rounded-lg hover:bg-blue-700 transition-colors">
              MORE
            </button>
          </aside>
     
    )
}

export default Sidebar;
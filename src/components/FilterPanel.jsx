import React, { useState } from "react";
import { Grid, List } from "lucide-react";

export function FilterPanel(){
    const [view, setView] = useState("grid");

    return(
        <div>
             <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">13 items</div>

              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Sort By</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>

                <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Show: 12</option>
                  <option>Show: 24</option>
                  <option>Show: 36</option>
                </select>

              </div>

              <div className="flex items-center space-x-2">

                <button
                onClick={() => setView("grid")}
                className={`px-4 py-2 flex items-center justify-center ${
                view === "grid" ? "bg-blue-50 text-blue-500" : "text-gray-400"
                }`}
                >
                    <Grid size={20} />
                </button>

                <button
                onClick={() => setView("list")}
                className={`px-4 py-2 flex items-center justify-center ${
                view === "list" ? "bg-blue-50 text-blue-500" : "text-gray-400"
                }`}
                >
                    <List size={20} />
                </button>

              </div>

            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center space-x-2">
              <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">1</button>
              <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">2</button>
              <button className="px-3 py-2 bg-blue-600 text-white rounded">3</button>
              <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">4</button>
              <button className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">5</button>
            </div>
        </div>
     
    )
}

export default FilterPanel
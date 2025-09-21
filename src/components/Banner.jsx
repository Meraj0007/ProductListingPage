import React from "react"
import Myimage from "../assets/shoes-tranparent.png"


const Banner = () => {
    return (
        <div className="bg-gradient-to-r bg-sky-400 text-white py-16 ml-6 h-[350px] w-[1069px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-semibold mb-4">Adidas Men Running Sneakers</h1>
              <p className="text-xl mb-6">Performance and design. Taken right to the edge.</p>
              <button className=" text-white px-1 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                SHOP NOW
              </button>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
            <img
                src={Myimage}
                alt="Featured Product"
                className="max-w-sm md:max-w-md rounded-lg "
            />
          </div>
          </div>
        </div>
      </div>
    )
}

export default Banner
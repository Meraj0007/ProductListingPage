import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Banner from './components/Banner'
import { Search, ShoppingCart } from "lucide-react";

function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 ">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                width={51}
                height={44}
                loading="lazy"
                className="ml-5"
              />
            </Link>
            <div className="text-black rounded font-bold text-lg height=[124px] width=[33px]">
              
              E-Comm
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-blue-600 hover:text-gray-700 font-medium">
                HOME
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                BAGS
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                SNEAKERS
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                BELT
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                CONTACT
              </a>
            </nav>

            <div className="flex items-center space-x-4">

              {/* Cart */}
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <ShoppingCart className="w-6 h-6 text-gray-700" />
                </div>
              </div>

              {/* items */}
              <div className="relative">
                Items
                <input
                  type="text"
                  placeholder="$0.00"
                  className="pl-8 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>
          </div>
        </div>
      </header>

      <main className="flex mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Sidebar />

        <Banner />
      </main>
    </div>
  );
}

export default App

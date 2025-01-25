import { FaMagic } from "react-icons/fa";
import BannerBuilder from './BannerBuilder';

export default function Hero({ formData, onFormDataChange }) {
  return (
    <div className="bg-gradient-to-r from-[#f7f8fb] to-[#e0e7ff]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center py-16 md:py-24">
          <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Create Stunning Banners in Just Minutes
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Build high-converting promotional banners for your e-commerce site. No design experience necessary.
            </p>
            <button className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors group cursor-pointer shadow-lg hover:shadow-xl transform transition-transform">
              Get Started
              <FaMagic className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="w-full md:w-1/2 md:pl-8 mt-12 md:mt-0">
            <div className="relative bg-white rounded-lg shadow-xl p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-indigo-200 opacity-30 rounded-lg"></div>
              <BannerBuilder formData={formData} onFormDataChange={onFormDataChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

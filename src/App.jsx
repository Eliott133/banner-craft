import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import OfferBanner from './components/OfferBanner'
import { useState } from 'react'
import "./App.css"

function App() {

  const timerEndDate = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);

  const [formData, setFormData] = useState({
    description: 'Special summer sale!',
    ctaText: 'Shop Now',
    originalPrice: '159.99',
    discountedPrice: '99.99',
    currency: 'EUR',
    language: 'fr',
    backgroundColor: '41, 128, 185',
    endDate: timerEndDate.toISOString().slice(0, 16),
  });

  const handleFormDataChange = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };


  return (
    <div className="min-h-screen">
      <main>
        <Navbar />
        <Hero formData={formData} onFormDataChange={handleFormDataChange} />
        <Features />
        <OfferBanner
          description={formData.description}
          ctaText={formData.ctaText}
          originalPrice={formData.originalPrice}
          newPrice={formData.discountedPrice}
          language={formData.language}
          timerEndDate={formData.endDate}
          backgroundColor={formData.backgroundColor}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
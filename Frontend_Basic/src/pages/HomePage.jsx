import { Car, ShieldCheck, Star, Truck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CarComparison from '../components/CarComparison';
import UserReviews from '../components/UserReviews';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Smart Vehicle Resale & Service Platform</h1>
          <p className="text-xl mb-8">Trustworthy Platform to Buy, Sell & Service Used Cars</p>
          <div className="flex gap-4 justify-center">
            <a 
              href="/buy"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Explore Cars
            </a>
            <a 
              href="/sell"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-full font-semibold transition"
            >
              Sell Your Car
            </a>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[ 
              { icon: Car, title: 'Choose a Car', text: 'Browse our extensive collection of verified used cars' },
              { icon: ShieldCheck, title: 'Contact With Us', text: 'Our experts will guide you through the process' },
              { icon: Star, title: 'Pay for the Car', text: 'Secure payment through our trusted platform' },
              { icon: Truck, title: 'Receive at Doorstep', text: 'Get your car delivered right to your doorstep' }
            ].map((step, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Car Comparison Section */}
      <CarComparison />

      {/* User Reviews Section */}
      <UserReviews />

      {/* Sell Your Car CTA */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Sell?</h2>
          <p className="text-xl mb-8">Get Your Car Listed with Transparent Valuation</p>
          <a 
            href="/sell"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Sell Your Car Now
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;

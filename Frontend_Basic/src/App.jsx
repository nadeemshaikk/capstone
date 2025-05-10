import { Routes, Route } from 'react-router-dom';
import { Car, ShieldCheck, Star, Truck } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BuyPage from './pages/BuyPage';
import SellPage from './pages/SellPage';
import ServicesHomePage from './pages/ServiceHomePage';
import UserServicesPage from './pages/UserServicesPage';
import ProviderDetailPage from './pages/ProviderDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CarComparison from './components/CarComparison';
import UserReviews from './components/UserReviews';
import AddServicePage from './pages/AddServicePage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />  
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/buy" element={<BuyPage />} />
      <Route path="/sell" element={<SellPage />} />
      <Route path="/services" element={<ServicesHomePage />} />
      <Route path="/services/user" element={<UserServicesPage />} />
      <Route path="/services/user/:serviceId" element={<ServiceDetailsPage />} />
      
      <Route path="/services/:id" element={<ServiceDetailsPage />} />
      <Route path="/services/user/:providerId" element={<ProviderDetailPage />} />
      <Route path="/services/provider" element={<AddServicePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;

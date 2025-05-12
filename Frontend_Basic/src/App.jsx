import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar only here
import Footer from './components/Footer';
import BuyPage from './pages/BuyPage';
import SellPage from './pages/SellPage';
import ServicesHomePage from './pages/ServiceHomePage';
import UserServicesPage from './pages/UserServicesPage';
import ProviderDetailPage from './pages/ProviderDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AddServicePage from './pages/AddServicePage';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage/AdminPage';
import ChatbotWidget from './components/ChatbotWidget/ChatbotWidget';
import ContactUsPage from './pages/ContactUsPage';
import AboutUsPage from './pages/AboutUsPage';  // AboutUsPage import

function App() {
  return (
    <>
      <Navbar />  {/* Navbar is included only here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/services" element={<ServicesHomePage />} />
        <Route path="/services/user" element={<UserServicesPage />} />
        <Route path="/services/user/:providerId" element={<ProviderDetailPage />} />
        <Route path="/services/provider" element={<AddServicePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/about" element={<AboutUsPage />} /> {/* About Us route */}
      </Routes>
      <ChatbotWidget />
      <Footer />
    </>
  );
}

export default App;

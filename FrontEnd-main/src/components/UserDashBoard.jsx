import "../styles/dashboard.css";
import carLogo from "../images/car-logo.jpg";
import carImage from "../images/car-image.jpg";
import userIcon from "../images/user-icon.png";
import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function UserDashBoard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    // Retrieve data from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedToken = localStorage.getItem("token");

    if (storedUsername && storedToken) {
      setUsername(storedUsername);
      setToken(storedToken);
    }
  }, []);

  // useEffect(() => {
  //   // Get user data from location state (passed during navigation)
  //   const userData = location.state?.userData;
  //   if (userData) {
  //     setUserName(userData.name || 'User');
  //   }
  // }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (!event.target.closest('.nav-links') && !event.target.closest('.mobile-menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // Clear any stored user data/tokens
    localStorage.removeItem('userToken');
    navigate('/');
  };

  const handleNavigation = (path) => {
    if (path === '/about') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (path === '/') {
      homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (path === '/profile') {
      navigate('/profile');
    } else if (path === '/cars') {
      console.log('Buying a car');
      navigate('/cars');
    } else if (path === '/sell') {
      console.log('Selling a car');
    } else if (path === '/service') {
      console.log('Booking service');
    }
  };

  return (
    <div className="main-container">
      {/* Header Section */}
      <div className="header">
        <div className="logo">
          <img src={carLogo} alt="Car Connect Logo" />
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          </div>
        </div>
        
        <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <button onClick={() => handleNavigation('/')}>Home</button>
          <button onClick={() => handleNavigation('/about')}>About Us</button>
        </nav>
        
        <div className="user-section">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="search-btn">Search</button>
          </div>
          
          <div className="user-icon" ref={menuRef} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={userIcon} alt="User Icon" />
            <span className="userName">{username}</span>  {/* Username beside icon */}
            {isMenuOpen && (
              <div className="user-menu">
                <button onClick={() => handleNavigation('/profile')}>Profile</button>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      {/* <div className="hero-section" ref={homeRef}> */}
        
        <div className="content-right">
          <div className="cards-container" style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '20px',
            minHeight: '90vh',
            backgroundColor: '#f5f5f5'
          }}>
            {/* Card 1 */}
            <div className="card" style={{
              width: '30%',
              borderRadius: '15px',
              backgroundColor: 'white',
              boxShadow: '0 4px 8px rgba(106, 230, 90, 0.952)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: '1px solid #e0e0e0'
            }}>
              <img 
                src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fc.ndtvimg.com%2F2022-06%2Ffafetlc8_car_625x300_21_June_22.jpg&w=3840&q=75"
                alt="Buy Car"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px' }}>
                <h2 style={{ textAlign: 'center', fontWeight: 'bold', color: '#333' }}>Buy a Car</h2>
                <p style={{ textAlign: 'center', margin: '15px 0', color: '#666' }}>
                  Find all the cars available for buying based on your requirements.
                </p>
                <button onClick={() => handleNavigation('/cars')}style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'background-color 0.3s ease'
                }}>Buy</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card" style={{
              width: '30%',
              borderRadius: '15px',
              backgroundColor: 'white',
              boxShadow: '0 4px 8px rgba(90, 220, 230, 0.952)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: '1px solid #e0e0e0'
            }}>
              <img 
                src="https://www.olx.in/blog/wp-content/uploads/2021/12/how-to-sell-you-car-online.jpg"
                alt="Sell Car"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px' }}>
                <h2 style={{ textAlign: 'center', fontWeight: 'bold', color: '#333' }}>Sell a Car</h2>
                <p style={{ textAlign: 'center', margin: '15px 0', color: '#666' }}>
                  Sell your car here and that makes your car to be visible to all users who wants to buy cars.
                </p>
                <button style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#2196F3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'background-color 0.3s ease'
                }}>Sell</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card" style={{
              width: '30%',
              borderRadius: '18px',
              backgroundColor: 'white',
              boxShadow: '0 4px 8px rgba(245, 171, 60, 0.952)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: '1px solid #e0e0e0'
            }}>
              <img 
                src="https://previews.123rf.com/images/macrovector/macrovector1503/macrovector150300186/37345149-car-service-concept-with-auto-repair-and-maintenance-decorative-icons-set-vector-illustration.jpg"
                alt="Car Service"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px' }}>
                <h2 style={{ textAlign: 'center', fontWeight: 'bold', color: '#333' }}>Car Service</h2>
                <p style={{ textAlign: 'center', margin: '15px 0', color: '#666' }}>
                  Find a service provider for your car or book a service appointment or find services available for maintaining your car.
                </p>
                <button style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#FF9800',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'background-color 0.3s ease'
                }}>Service</button>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}

      {/* About Section */}
      <div className="about-section" ref={aboutRef}>
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Your Trusted Car Partner</h3>
            <p>We are committed to providing the best automotive solutions for our customers. With years of experience in the industry, we offer:</p>
            <ul>
              <li>Wide selection of quality vehicles</li>
              <li>Professional car maintenance services</li>
              <li>Transparent buying and selling process</li>
              <li>Expert guidance and support</li>
            </ul>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h4>1000+</h4>
              <p>Cars Sold</p>
            </div>
            <div className="stat-item">
              <h4>500+</h4>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h4>50+</h4>
              <p>Expert Mechanics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
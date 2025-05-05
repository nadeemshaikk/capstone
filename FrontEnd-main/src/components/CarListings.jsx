import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/CarListings.css";
import carLogo from "../images/car-logo.jpg";
import userIcon from "../images/user-icon.png";

export function CarListings() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const menuRef = useRef(null);
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const locations = ["BANGALORE", "MUMBAI", "DELHI", "CHENNAI", "HYDERABAD"];
  const brands = ["TOYOTA", "HONDA", "BMW", "AUDI", "MERCEDES", "VOLKSWAGEN"];

  const defaultCarImages = {
    sedan: "https://www.carlogos.org/car-logos/tesla-logo-2200x2800.png",
    suv: "https://assets.stickpng.com/images/580b585b2edbce24c47b2c5c.png",
    default: "https://www.carlogos.org/logo/Volkswagen-logo-2019-1500x1500.png"
  };

  const carImages = [
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2000",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2000",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2000",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000",
  ];

  const defaultCarAnimation = "https://media.istockphoto.com/id/1042273960/photo/small-cute-blue-car.webp?a=1&b=1&s=612x612&w=0&k=20&c=JI1CIEzgwI4CtyMN7VnDjKVquxtA-VUycde6TN-VczQ=https://media.istockphoto.com/id/1042273960/photo/small-cute-blue-car.webp?a=1&b=1&s=612x612&w=0&k=20&c=JI1CIEzgwI4CtyMN7VnDjKVquxtA-VUycde6TN-VczQ=";

  const [cars, setCars] = useState([
    {
      carId: 1,
      make: "TOYOTA",
      model: "CAMRY",
      year: 2020,
      mileage: 25000,
      carLocation: "BANGALORE",
      TotalNoOfOwners: 1,
      status: "AVAILABLE",
      carImageUrls: [carImages[0]],
      conditionReportId: "CR001",
      saleDecision: 0,
      price: "$25,000"
    },
    {
      carId: 2,
      make: "BMW",
      model: "3 Series",
      year: 2021,
      mileage: 15000,
      carLocation: "MUMBAI",
      TotalNoOfOwners: 2,
      status: "AVAILABLE",
      carImageUrls: [carImages[1]],
      conditionReportId: "CR002",
      saleDecision: 0,
      price: "$45,000"
    },
    {
      carId: 3,
      make: "AUDI",
      model: "A4",
      year: 2019,
      mileage: 35000,
      carLocation: "DELHI",
      TotalNoOfOwners: 1,
      status: "AVAILABLE",
      carImageUrls: [carImages[2]],
      conditionReportId: "CR003",
      saleDecision: 0,
      price: "$35,000"
    },
    {
        carId: 4,
        make: "HONDA",
        model: "CAMRY",
        year: 2020,
        mileage: 25000,
        carLocation: "BANGALORE",
        TotalNoOfOwners: 1,
        status: "AVAILABLE",
        carImageUrls: [carImages[0]],
        conditionReportId: "CR001",
        saleDecision: 0,
        price: "$25,000"
      },
      {
        carId: 5,
        make: "TOYOTA",
        model: "CAMRY",
        year: 2020,
        mileage: 25000,
        carLocation: "BANGALORE",
        TotalNoOfOwners: 1,
        status: "AVAILABLE",
        carImageUrls: [],
        conditionReportId: "CR001",
        saleDecision: 0,
        price: "$25,000"
      },
      {
        carId: 6,
        make: "SHIFT",
        model: "CAMRY",
        year: 2020,
        mileage: 25000,
        carLocation: "BANGALORE",
        TotalNoOfOwners: 1,
        status: "AVAILABLE",
        carImageUrls: [carImages[0]],
        conditionReportId: "CR001",
        saleDecision: 0,
        price: "$25,000"
      },
  ]);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };
    checkLoginStatus();
  }, []);

  const getAvailableBrands = () => {
    if (!selectedLocation) {
      return brands;
    }
    const locationBrands = cars
      .filter(car => car.carLocation === selectedLocation)
      .map(car => car.make);
    return [...new Set(locationBrands)];
  };

  const handleLocationChange = (location) => {
    if (selectedLocation === location) {
      setSelectedLocation('');
      setSelectedBrands([]);
    } else {
      setSelectedLocation(location);
      setSelectedBrands([]);
    }
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev => {
      if (prev.includes(brand)) {
        return prev.filter(b => b !== brand);
      } else {
        return [...prev, brand];
      }
    });
  };

  const handleClearFilters = () => {
    setSelectedLocation('');
    setSelectedBrands([]);
  };

  const handleViewMore = (carId) => {
    if (!isLoggedIn) {
      navigate('/login', { 
        state: { 
          returnPath: '/cars',
          expandCardId: carId 
        } 
      });
      return;
    }
    setExpandedCard(carId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setExpandedCard(null);
  };

  const handleMakeOffer = (carId) => {
    console.log(`Making offer for car ${carId}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/home');
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const getDefaultImage = (make) => {
    make = make.toLowerCase();
    if (['bmw', 'mercedes', 'audi'].includes(make)) {
      return defaultCarImages.sedan;
    } else if (['toyota', 'honda'].includes(make)) {
      return defaultCarImages.suv;
    }
    return defaultCarImages.default;
  };

  const filteredCars = cars.filter(car => {
    const locationMatch = !selectedLocation || car.carLocation === selectedLocation;
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(car.make);
    return locationMatch && brandMatch;
  });

  return (
    <div className="car-listings-container">
      <header className="listings-header">
        <img 
          src={carLogo} 
          alt="Car Logo" 
          className="car-logo" 
          onClick={() => handleNavigation('/home')}
        />
        
        <div className="user-section">
          <div className="user-icon" ref={menuRef} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={userIcon} alt="User Icon" />
            {isMenuOpen && (
              <div className="user-menu">
                {isLoggedIn ? (
                  <>
                    <button onClick={() => handleNavigation('/profile')}>Profile</button>
                    <button onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleNavigation('/login')}>Login</button>
                    <button onClick={() => handleNavigation('/register')}>Sign Up</button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="content-grid">
        <div className="filters-section">
          <div className="location-filters">
            <h3>Locations</h3>
            {locations.map(location => (
              <label key={location} className="filter-checkbox">
                <input
                  type="radio"
                  checked={selectedLocation === location}
                  onChange={() => handleLocationChange(location)}
                  name="location"
                />
                {location}
              </label>
            ))}
          </div>

          <div className="brand-filters">
            <h3>Brands {selectedLocation && `in ${selectedLocation}`}</h3>
            {getAvailableBrands().map(brand => (
              <label key={brand} className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                {brand}
              </label>
            ))}
          </div>

          {(selectedLocation || selectedBrands.length > 0) && (
            <button 
              className="clear-filters"
              onClick={handleClearFilters}
            >
              Clear All Filters
            </button>
          )}
        </div>

        <div className="car-cards-section">
          {expandedCard && (
            <div className="expanded-overlay" ref={cardRef}>
              {filteredCars
                .filter(car => car.carId === expandedCard)
                .map(car => (
                  <div key={car.carId} className="car-card expanded">
                    <button className="back-button" onClick={handleBack}>
                      <i className="fas fa-arrow-left"></i> Back
                    </button>
                    <div className="expanded-image">
                      <img 
                        src={car.carImageUrls[0] || defaultCarAnimation} 
                        alt={`${car.make} ${car.model}`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = defaultCarAnimation;
                        }}
                      />
                    </div>
                    <div className="car-info">
                      <h2>{car.make} {car.model}</h2>
                      <p className="price">{car.price}</p>
                      <div className="info-grid">
                        <div className="info-item">
                          <span className="label">Year:</span>
                          <span>{car.year}</span>
                        </div>
                        <div className="info-item">
                          <span className="label">Mileage:</span>
                          <span>{car.mileage} km</span>
                        </div>
                        <div className="info-item">
                          <span className="label">Location:</span>
                          <span>{car.carLocation}</span>
                        </div>
                        <div className="info-item">
                          <span className="label">Total Owners:</span>
                          <span>{car.TotalNoOfOwners}</span>
                        </div>
                        <div className="info-item">
                          <span className="label">Status:</span>
                          <span>{car.status}</span>
                        </div>
                        <div className="info-item">
                          <span className="label">Report ID:</span>
                          <span>{car.conditionReportId}</span>
                        </div>
                      </div>
                      <button 
                        className="make-offer-btn"
                        onClick={() => handleMakeOffer(car.carId)}
                      >
                        Make an Offer
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {!expandedCard && filteredCars.map(car => (
            <div key={car.carId} className="car-card">
              <img 
                src={car.carImageUrls[0] || getDefaultImage(car.make)}
                alt={`${car.make} ${car.model}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = getDefaultImage(car.make);
                }}
              />
              <div className="car-info">
                <h3>{car.make} {car.model}</h3>
                <p>Year: {car.year}</p>
                <p>Mileage: {car.mileage} km</p>
                <p>Location: {car.carLocation}</p>
                <p className="price">{car.price}</p>
                <button 
                  className="view-more-btn"
                  onClick={() => handleViewMore(car.carId)}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
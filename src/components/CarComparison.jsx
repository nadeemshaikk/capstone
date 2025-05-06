import React, { useState } from 'react';

const cars = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80",
    name: "Tesla Model 3",
    price: "35,000",
    specs: {
      range: "358 miles",
      acceleration: "3.1s 0-60",
      topSpeed: "162 mph",
      power: "283 hp",
      battery: "82 kWh",
      charging: "250 kW"
    }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80",
    name: "BMW i4",
    price: "45,000",
    specs: {
      range: "300 miles",
      acceleration: "3.7s 0-60",
      topSpeed: "155 mph",
      power: "335 hp",
      battery: "80.7 kWh",
      charging: "200 kW"
    }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1619767886558-efdc259b6e09?auto=format&fit=crop&q=80",
    name: "Audi e-tron GT",
    price: "55,000",
    specs: {
      range: "280 miles",
      acceleration: "3.3s 0-60",
      topSpeed: "152 mph",
      power: "469 hp",
      battery: "93.4 kWh",
      charging: "270 kW"
    }
  }
];

const CarComparison = () => {
  const [selectedCar1, setSelectedCar1] = useState(cars[0]);
  const [selectedCar2, setSelectedCar2] = useState(cars[1]);

  const handleCarSelect = (carIndex, position) => {
    const car = cars[carIndex];
    if (position === 1) {
      setSelectedCar1(car);
    } else {
      setSelectedCar2(car);
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Compare Cars</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {[1, 2].map((position) => (
            <div key={position} className="flex flex-col items-center">
              <select
                className="w-full max-w-xs mb-8 p-2 border rounded-md"
                onChange={(e) => handleCarSelect(Number(e.target.value), position)}
                defaultValue={position === 1 ? 0 : 1}
              >
                {cars.map((car, index) => (
                  <option key={car.id} value={index}>
                    {car.name}
                  </option>
                ))}
              </select>

              <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={position === 1 ? selectedCar1.image : selectedCar2.image}
                  alt={position === 1 ? selectedCar1.name : selectedCar2.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {position === 1 ? selectedCar1.name : selectedCar2.name}
                  </h3>
                  <p className="text-3xl text-blue-600 font-bold mb-6">
                    ${position === 1 ? selectedCar1.price : selectedCar2.price}
                  </p>

                  <div className="space-y-4">
                    {Object.entries(position === 1 ? selectedCar1.specs : selectedCar2.specs)
                      .map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-2 border-b">
                          <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className="font-semibold">{value}</span>
                        </div>
                      ))}
                  </div>

                  <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarComparison;

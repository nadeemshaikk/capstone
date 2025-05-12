// src/pages/AboutUsPage.jsx
import React from 'react';
import { Car, DollarSign, RefreshCw } from "lucide-react";


const AboutUsPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Component 1: Header & Trust */}
{/* Component 1: Header & Trust */}
<section className="text-center py-12 bg-gradient-to-r from-blue-50 to-white">
  <h1 className="text-5xl font-extrabold text-blue-800 mb-2">About Us</h1>
  <h2 className="text-2xl text-blue-600 mb-6">Our Brief History</h2>
  <div className="flex justify-center gap-10 mt-4">
    <div className="bg-white shadow-md p-6 rounded-lg w-64">
      <p className="text-xl font-semibold text-gray-700 mb-2">Trust Rating</p>
      <div className="text-yellow-500 text-2xl mb-1">
        ⭐⭐⭐⭐⭐
      </div>
      <p className="text-blue-600 font-bold text-xl">5.0 / 5.0</p>
      <p className="text-gray-600 text-sm">Based on 2,348 reviews</p>
    </div>
    <div className="bg-white shadow-md p-6 rounded-lg w-64">
      <p className="text-xl font-semibold text-gray-700 mb-2">Customer Satisfaction</p>
      <div className="text-yellow-500 text-2xl mb-1">
        ⭐⭐⭐⭐⭐
      </div>
      <p className="text-blue-600 font-bold text-xl">5.0 / 5.0</p>
      <p className="text-gray-600 text-sm">Rated by Happy Clients</p>
    </div>
  </div>
</section>



      {/* Component 2: Welcome Message */}
      <section className="bg-gray-100 py-12 text-center px-6">
        <p className="text-blue-600 text-sm">Since-1994</p>
        <h2 className="text-3xl font-bold my-4">Welcome To AutoMarket</h2>
        <p className="max-w-3xl mx-auto text-lg">
          We're passionate car agency. We're thrilled to have you join our community of automotive enthusiasts and professionals. Whether you're a passionate driver, car owner, or someone who loves automobiles, you've come to the right place. At AutoMarket, we foster a space to share, connect, and explore. Buckle up and enjoy your journey with AutoMarket!
        </p>
        <p className="mt-4 text-sm italic">- Unknown (CEO & Founder)</p>
      </section>

      {/* Component 3: Boxes */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 px-6 bg-white">
  <div className="p-6 shadow-md border rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-lg">
    <div className="flex justify-center mb-4 text-blue-600">
      <DollarSign size={32} />
    </div>
    <h3 className="text-xl font-bold text-blue-700">Affordable Price</h3>
    <p className="mt-2 text-gray-600">Affordable price for luxury vs budget car discussed here...</p>
  </div>

  <div className="p-6 shadow-md border rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-lg">
    <div className="flex justify-center mb-4 text-blue-600">
      <RefreshCw size={32} />
    </div>
    <h3 className="text-xl font-bold text-blue-700">Money Back Guarantee</h3>
    <p className="mt-2 text-gray-600">Some may offer a full refund, others have conditions...</p>
  </div>

  <div className="p-6 shadow-md border rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-lg">
    <div className="flex justify-center mb-4 text-blue-600">
      <Car size={32} />
    </div>
    <h3 className="text-xl font-bold text-blue-700">8 Month Warranty</h3>
    <p className="mt-2 text-gray-600">Defects covered in an 8-month warranty period...</p>
  </div>
</section>

      {/* Component 4: Stats */}
      <section className="bg-blue-50 py-12 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">600K+</h3>
            <p>Car Available</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">400K+</h3>
            <p>Car Sold</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">200K+</h3>
            <p>Used Cars</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">98.50%</h3>
            <p>Customer Satisfaction</p>
          </div>
        </div>
        <p className="mt-4 font-bold">Excellent! 5.0 Rating out of 5.0 based on 245354 reviews</p>
      </section>

      {/* Component 5: Gallery */}
{/* Component 5: Gallery */}
<section className="py-12 px-6 text-center bg-gray-50">
  <h2 className="text-3xl font-bold text-blue-800 mb-8">Drivco Gallery</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
    {[
      "https://tse3.mm.bing.net/th/id/OIP.iiF8ChDZ0ifuLuV8r9uVVQHaE7?rs=1&pid=ImgDetMain",
      "https://tse3.mm.bing.net/th/id/OIP.dvCYi8or_uTtC5YmoYT0hQHaE7?rs=1&pid=ImgDetMain",
      "https://www.motoringresearch.com/wp-content/uploads/2019/08/Online-reviews-vital-in-choosing-a-car-dealer.jpg",
      "https://www.chennaitop10.com/wp-content/uploads/2024/01/many-people-parked-car-showroom-2-scaled.jpg",
      "https://disputebee.com/img/article-images/car-loan-with-bad-credit.jpg",
      "https://static.vecteezy.com/system/resources/previews/036/796/141/non_2x/ai-generated-happy-car-dealer-standing-in-a-showroom-free-photo.jpeg",
      "https://img.freepik.com/premium-photo/smiling-couple-buying-new-car-car-showroom-salesman-contracts-couple-who-bought-new-car-with-his-girlfriend_697211-1730.jpg",
      "https://th.bing.com/th/id/R.8f84f68becdb7e31846aed6974634f54?rik=qGbKPIPOVu6fIQ&riu=http%3a%2f%2farchitizer-prod.imgix.net%2fmedia%2fmediadata%2fuploads%2f1588517335740services_interior_design_commercial_car_showrooms_s_3.jpg%3fq%3d60%26auto%3dformat%2ccompress%26cs%3dstrip%26w%3d1680&ehk=ANdWdWhsjXUkFq0XwDtk3t9Q45OiWvU99w99QcHwWv8%3d&risl=&pid=ImgRaw&r=0",
      "https://tse1.mm.bing.net/th/id/OIP.VLZ40ho7NfcQf8_4_uOzAQHaE8?rs=1&pid=ImgDetMain"
    ].map((link, i) => (
      <div key={i} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
        <img
          src={link}
          alt={`Gallery image ${i + 1}`}
          className="w-full h-40 object-cover"
        />
      </div>
    ))}
  </div>
  <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
    View More
  </button>
</section>

      {/* Component 6: How It Works */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">How Does It Work</h2>
        <p className="text-center mb-8">Here are some of the featured cars in different categories</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(step => (
            <div key={step} className="p-4 border rounded text-center">
              <h3 className="text-xl font-bold">0{step}</h3>
              <p className="mt-2 font-semibold">
                {step === 1 && 'Choose Anywhere'}
                {step === 2 && 'Contact With Us'}
                {step === 3 && 'Pay For The Car'}
                {step === 4 && 'Receive The Car'}
              </p>
              <p className="text-sm mt-1">Car servicing is regular maintenance...</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 font-bold">Excellent! 5.0 Rating out of 5.0 based on 245354 reviews</p>
      </section>

     
    </div>
  );
};

export default AboutUsPage;
AboutUsPage.jsx
// import React from 'react';

// const AboutUsPage = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-4">About Us</h1>
//       <p className="text-lg">
//         Welcome to AutoMarket! We are dedicated to providing the best marketplace for buying and selling vehicles. 
//         Our mission is to connect buyers and sellers in a safe and reliable environment. Whether you're looking to 
//         buy a new car or sell your old one, we've got you covered.
//       </p>
//       <p className="text-lg mt-4">
//         Our team is passionate about cars and technology, and we're always striving to improve our platform and 
//         customer service to make your experience seamless and enjoyable.
//       </p>
//     </div>
//   );
// };

// export default AboutUsPage;

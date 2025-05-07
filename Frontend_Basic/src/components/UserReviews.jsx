import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    car: "Tesla Model 3",
    review: "Exceptional service from start to finish. The car comparison tool helped me make an informed decision, and the team was incredibly helpful throughout the purchase process.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    car: "BMW i4",
    review: "The maintenance service was top-notch. They kept me informed throughout the process and the car runs better than ever. Highly recommend their service department!",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    car: "Audi e-tron GT",
    review: "Selling my car through AutoMarket was seamless. Got a great price and the entire process was transparent. The staff was professional and helpful.",
    date: "3 weeks ago"
  }
];

const UserReviews = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read trusted reviews from our customers about their experience with our cars and services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-sm p-6 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100" />
              
              <div className="flex items-center mb-4">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{review.review}</p>
              
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{review.car}</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserReviews;

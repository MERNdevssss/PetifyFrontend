import React from 'react'

const reviews = [
  {
    name: "John Doe",
    date: "2023-07-01",
    rating: 4,
    testimonial: "Had a great experience finding my pet!",
    imageUrl: "https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg",
  },
  {
    name: "Jane Smith",
    date: "2023-07-05",
    rating: 5,
    testimonial: "Absolutely loved the service. Highly recommend!",
    imageUrl: "https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg",
  },
  {
    name: "Alex Johnson",
    date: "2023-07-10",
    rating: 4,
    testimonial: "Found the perfect puppy. Thank you!",
    imageUrl: "https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg",
  },
  {
    name: "Olivia Ray",
    date: "2023-07-12",
    rating: 5,
    testimonial: "This platform made adoption so easy!",
    imageUrl: "https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg",
  },
  {
    name: "Chris Evans",
    date: "2023-07-15",
    rating: 4,
    testimonial: "A smooth experience, will recommend to others.",
    imageUrl: "https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg",
  },
];

const Star = ({ filled }) => (
  <span className={`text-orange-400 text-sm ${filled ? '' : 'opacity-30'}`}>★</span>
);

// ReviewCard component to display individual review
const ReviewCard = ({ review }) => (
  <div className="bg-white rounded-xl w-[450px] h-[400px] shadow-md flex-shrink-0 flex flex-col mr-4">
    <div className="flex items-start justify-between p-4 bg-gray-300 rounded-t-xl">
  
      <img
        src={review.imageUrl}
        alt={review.name}
        className="w-16 h-16 rounded-full object-cover"
      />

      {/* Right: Info */}
      <div className="flex flex-col items-end ml-4 text-right">
        <h3 className="font-bold text-lg text-gray-800">{review.name}</h3>
        <p className="text-sm text-gray-600">{review.date}</p>
        <div className="flex mt-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} filled={index < review.rating} />
          ))}
        </div>
      </div>
    </div>

    {/* Testimonial */}
    <div className="flex-1 px-6 py-8 text-center text-black font-semibold text-lg">
      {review.testimonial}
    </div>
  </div>
);

// ReviewSection component to display all reviews
const TestimonialSection = () => {
  return (
    <section className="bg-[#5EB2D7] py-10 px-4 rounded-2xl">
      <h2 className="text-center text-4xl font-bold text-[#1E1E1E] mb-10">
        Reviews from Our Happy Pet Family's
      </h2>

      {/* SCROLLABLE CONTAINER */}
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide px-4">
        <div className="flex gap-6 w-max">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>

      {/* Hide Scrollbar for all browsers */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};


export default TestimonialSection
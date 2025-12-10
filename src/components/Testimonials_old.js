import './Testimonial.css'; // Import the custom styles

const Testimonials = () => {
  const reviews = [
    {
      text: "Very luxurious banquet Hall. Really had a blast here. Suitable for marriages, birthdays etc. It adds a really rich look to the party with ac halls and spacious dining space.",
      author: "SAM",
      rating: 5,
      source: "Google Reviews" // Add source field for reference
    },
    {
      text: "Hall was comfortable and pretty clean with ac in full swing. Staff cooperated well in every aspect from event to lunch. It is very much comfortable for 300 members with elevator, Generator.Awesome.",
      author: "Ravinder Vunyale",
      rating: 5,
      source: "Google Reviews" // Add source field for reference
    },
    {
      text: "Good one for birthday parties and small occasions, don't have enough car parking except that everything is fine with good dining space.",
      author: "Subrahmanyam Immaneni",
      rating: 4,
      source: "Google Reviews" // Add source field for reference
    },
  ];

  return (
    <div id="testimonials" className="testimonials">
      <div class="section-divider"></div>
      <h2>What Our Clients Say</h2>
      <div className="testimonial-container">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial">
            <div className="testimonial-header">
              <div className="testimonial-author">
                <h4>{review.author}</h4>
                <div className="testimonial-rating">
                  {/* Display stars for rating */}
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={index < review.rating ? "star filled" : "star"}>★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="testimonial-text">"{review.text}"</p>
            <p className="testimonial-source">{review.source}</p> {/* Show source */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

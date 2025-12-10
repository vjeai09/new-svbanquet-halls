import React from "react";
import Header from "./components/Header"; // Import Header component
import Footer from "./components/Footer"; // Import Footer component
import HeroVideo from "./components/HeroVideo"; // Import HeroVideo component
import Services from "./components/Services"; // Import Services component
import Testimonials from "./components/Testimonials"; // Import Testimonials component
import ContactForm from "./components/ContactForm"; // Import ContactForm component
import BottomBar from "./components/BottomBar"; // Import BottomBar component
import StickyCTA from "./components/StickyCTA"; // Import StickyCTA component
import "./App.css"; // Import styles

function App() {
  return (
    <div className="App">
      {/* Header component */}
      <Header />

      {/* Content sections with corresponding component IDs for scrolling */}
      <main id="main-content">
        <section id="hero-video">
          <HeroVideo /> {/* Hero video section */}
        </section>
        <section id="services">
          <Services /> {/* Services section */}
        </section>
        <section id="testimonials">
          <Testimonials /> {/* Testimonials section */}
        </section>
        <section id="contact">
          <ContactForm /> {/* Contact section */}
        </section>
      </main>

      {/* Footer, BottomBar, and StickyCTA */}
      <Footer />
      <BottomBar /> {/* Bottom Bar for mobile */}
      <StickyCTA /> {/* Sticky Call-to-Action */}
    </div>
  );
}

export default App;

// import React from "react";
// import Header from "./components/Header";
// // import Footer from "./components/Footer";
// // import HeroVideo from "./components/HeroVideo";

// function App() {
//   return (
//     <div>
//       <h1>Hello from App Component!</h1>
//       <Header /> {/* Test Header first */}
//       {/* <HeroVideo /> */}
//       {/* <Footer /> */}
//     </div>
//   );
// }

// export default App;


// Step 1: mimim to test 
// import React from "react";

// function App() {
//   return <h1>Hello from React!</h1>;
// }

// export default App;

// step 2: Minimal test
// import React from "react";

// function App() {
//   return <h1>Hello from App Component!</h1>;
// }

// export default App;


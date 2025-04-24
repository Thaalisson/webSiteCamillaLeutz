import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BeforeAfterSection from "./components/BeforeAfterSection"; 
import About from "./components/About";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
     <Navbar/>
     <Hero />
     <About />
     <Services/>
     <BeforeAfterSection />
     <FaqSection/>
     <ContactSection />
     <Footer/>
   </div>
  );
}

export default App;

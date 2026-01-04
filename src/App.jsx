import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Products />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;

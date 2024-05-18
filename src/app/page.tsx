import Image from "next/image";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";
import About from "./components/About"




export default function Home() {
  return (
    <main>
      <div> 
      <Hero />
      </div>
      
      <Content />
      <About/>

      <Footer />
  
    </main>
  );
}

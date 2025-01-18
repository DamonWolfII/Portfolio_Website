import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Project from "@/components/project";
import  Contact  from "@/components/contact";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scrolltop";


export default function Home() {
  return (
    
   <div>
   <Navbar/>
   <Hero/>
   <About/>
   <Project/>
  <Contact/>
  <Footer/>
  <ScrollToTopButton/>
   </div>
  );
}

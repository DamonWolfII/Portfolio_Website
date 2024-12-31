import Navbar from './navbar/page';
import Hero from './hero/page'; 
import About from './about/page'
import Contact from './contact/page'
import Project from './projects/page';

export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  );
}

import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

const Home = () => (
  <>
    <FloatingNav navItems={navItems} />
    <main className="w-full max-w-7xl">
      <Hero />
      <Grid />
      <Projects />
      <Clients />
      <Experience />
      <Approach />
    </main>
    <Footer/>
  </>
);

export default Home;

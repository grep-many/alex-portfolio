import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

const Home = () => (
  <>
    <FloatingNav navItems={navItems} />
    <main className="w-full max-w-7xl">
      <Hero />
      <Grid />
    </main>
  </>
);

export default Home;

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Events from "@/components/Events";
import Courses from "@/components/Courses";
import About from "@/components/About";
import Footer from "@/components/Footer";
import MentorshipButton from "@/components/MentorshipButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Features />
        
        <Events />
        <Courses />
      </main>
      <Footer />
      <MentorshipButton />
    </div>
  );
};

export default Index;

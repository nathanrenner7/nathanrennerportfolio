import Header from "./components/header";
import ProjectSection from "./project-section";
import Footer from "./components/footer";
import Hero from "./components/hero";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <Hero />
        <ProjectSection />
        <Footer />
      </div>
    </div>
  )
}
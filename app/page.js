import Hero from "./components/Hero";
import { CarsList } from "./components/CarsList";
import Container from "./components/Container";
import About from "./components/About";
import Steps from "./components/Steps";
import Newslatter from "./components/Newslatter";
import WhyChooseUs from "@/app/components/why-choose-us/WhyChooseUs";
import Testimonials from "@/app/components/Tesimonials/Testimonials";
import AboutUs from "@/app/components/AboutUs";
export default function Home() {
  return (
    <>
      <Hero />

      <Container>
        <CarsList isHome={true} />
      </Container>

      <AboutUs />
      <WhyChooseUs />

      <About />
      <Steps />
      <Newslatter />
      <Testimonials />
    </>
  );
}

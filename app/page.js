import Hero from "./components/Hero";
import { CarsList } from "./components/CarsList";
import Container from "./components/Container";
import About from "./components/About";
import Steps from "./components/Steps";
import Newslatter from "./components/Newslatter";
// import MySwiper from "./components/MySwiper";
import Testimonials from "@/app/components/Tesimonials/Testimonials";
export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <CarsList />
      </Container>
      <About />
        <Steps/>
        <Newslatter />

<Testimonials />
    </>
  );
}

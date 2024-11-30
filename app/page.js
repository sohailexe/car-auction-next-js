import Hero from "./components/Hero";
import { CarsList } from "./components/CarsList";
import Container from "./components/Container";
export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <CarsList />
      </Container>
    </>
  );
}

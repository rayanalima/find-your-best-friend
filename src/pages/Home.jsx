import 'bulma/css/bulma.min.css';
import CarouselHome from '../components/HomePage/CarouselshHome';
import Statistics from '../components/HomePage/Statistics';
import TextAfterCarousel from '../components/HomePage/TextsAfterCarousel';
import Navbar from '../components/Navbar';


function Home() {
  return (
    <>
    <Navbar />
    <CarouselHome />
    <TextAfterCarousel />
    <Statistics />
    </>
  );
}

export default Home;

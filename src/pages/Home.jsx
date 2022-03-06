import Header from "../containers/Header";
import Sidebar from "../components/Sidebar";
import CarouselSlider from "../components/CarouselSlider";

const Home = () => {
  return (
    <>
      <Header />

      <CarouselSlider />
      <Sidebar />
    </>
  );
};

export default Home;

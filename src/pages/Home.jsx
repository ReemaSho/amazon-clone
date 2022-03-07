import Header from "../containers/Header";
import Sidebar from "../components/Sidebar";
import CarouselSlider from "../components/CarouselSlider";
import Cards from "../components/Home/Cards";
import Footer from "../components/Footer";
import "./sass/homePage.scss";

const Home = () => {
  return (
    <>
      <Header />

      <CarouselSlider />
      <div className="homePage">
        <Sidebar />
        <Cards />
      </div>
      <Footer />
    </>
  );
};

export default Home;

import Header from "../containers/Header";
import CarouselSlider from "../components/CarouselSlider";
import ProductsController from "../containers/ProductsController";
const Home = () => {
  return (
    <>
      <Header />
      <CarouselSlider />
      <ProductsController />
    </>
  );
};

export default Home;

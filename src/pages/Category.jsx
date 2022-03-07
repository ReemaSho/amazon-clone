import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCategoriesContext } from "../context/CategoriesContext";
import Header from "../containers/Header";
import CategoryProducts from "../containers/CategoryProducts";
const Category = () => {
  const { setCategory } = useCategoriesContext();
  const { category } = useParams();
  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);
  return (
    <>
      <Header />
      <CategoryProducts />
    </>
  );
};

export default Category;

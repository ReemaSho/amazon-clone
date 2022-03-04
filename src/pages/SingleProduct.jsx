import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSingleProductContext } from "../context/SingleProductContext";
import Header from "../containers/Header";
import SingleProductController from "../containers/SingleProductController";
const SingleProduct = () => {
  const { setProId } = useSingleProductContext();
  const { id } = useParams();
  useEffect(() => {
    setProId(id);
  }, [id, setProId]);
  return (
    <>
      <Header />
      <SingleProductController />
    </>
  );
};

export default SingleProduct;

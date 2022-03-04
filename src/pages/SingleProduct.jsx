import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { SingleProductContext } from "../context/SingleProductContext";
import Header from "../containers/Header";
import SingleProductController from "../containers/SingleProductController";
const SingleProduct = () => {
  const { setProId } = useContext(SingleProductContext);
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

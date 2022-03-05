import { useStateValue } from "../context/StateContext";
import CheckoutProduct from "../components/CheckoutProduct/CheckoutProduct";
import image2 from "../assets/ad-images/image2.jpg";
import image3 from "../assets/ad-images/image3.jpg";
import image4 from "../assets/ad-images/image4.jpg";
import "./sass/checkout.scss";
const CheckoutController = () => {
  const [{ Cart }] = useStateValue();
  const adImages = [image2, image3, image4];
  const imageSource = adImages[Math.floor(Math.random() * adImages.length)];

  if (Cart.length === 0) {
    return (
      <div className="checkout">
        <img className="checkout__ad" src={imageSource} alt="ad" />
        <div className="checkout__items">
          <h2 className="checkout__title">Your Cart is empty</h2>
          <p className="checkout__paragraph">
            You have no items in your cart. To buy one or more items, click "Add
            to Cart" next to the item.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout">
      <img className="checkout__ad" src={imageSource} alt="ad" />
      <div className="checkout__items">
        <h2 className="checkout__title">Your Shopping Cart </h2>
        {Cart.map((item) => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            rating={item.rating}
            images={item.images}
            offer={item.offer}
            regularPrice={item.regularPrice}
            discountedPrice={item.discountedPrice}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckoutController;

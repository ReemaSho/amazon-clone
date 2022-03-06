import { useStateValue } from "../context/StateContext";
import CheckoutProduct from "../components/CheckoutProduct/CheckoutProduct";
import Subtotal from "../components/CheckoutProduct/Subtotal";
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

        <div className="checkout__emptyBox">
          <h2 className="checkout__title">
            Your Amazon Cart is empty. <small>price</small>
          </h2>
          <p className="checkout__paragraph">
            You have no items in your cart. To buy one or more items, click "Add
            to Cart" next to the item.
          </p>
          <p className="checkout__priceZero">
            Subtotal (0 items): <strong>$0.00</strong>
          </p>
        </div>
        <p className="checkout__info">
          The price and availability of items at Amazon.com are subject to
          change. The Cart is a temporary place to store a list of your items
          and reflects each item's most recent price. Shopping CartLearn more Do
          you have a gift card or promotional code? We'll ask you to enter your
          claim code when it's time to pay.
        </p>
      </div>
    );
  }

  return (
    <div className="checkout">
      <div className="checkout__header">
        <img className="checkout__ad" src={imageSource} alt="ad" />
        <Subtotal />
      </div>

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

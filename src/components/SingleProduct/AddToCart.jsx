const AddToCart = ({ price }) => {
  return (
    <div className="SingleProduct__addToBasket">
      <p className="price">{`$${price}`}</p>
      <p className="SingleProduct__extraDetails">
        $10.70 Shipping & Import Fees Deposit to Netherlands{" "}
        <span className="SingleProduct__extraLinks">Details</span>
      </p>
      <p className="SingleProduct__extraDetails">
        popular carriers
        <span className="SingleProduct__extraLinks">
          DHL, ECMS EXPRESS, Landmark Global, LaserShip
        </span>
      </p>
      <button className="SingleProduct__addToBasketBtn">Add to Cart</button>
    </div>
  );
};

export default AddToCart;

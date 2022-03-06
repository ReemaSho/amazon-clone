import React from "react";
import { useStateValue } from "../../context/StateContext";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../context/reducer";
import "../sass/subtotal.scss";
const Subtotal = () => {
  const [{ ItemsCount, Cart }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        value={getCartTotal(Cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({ItemsCount} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;

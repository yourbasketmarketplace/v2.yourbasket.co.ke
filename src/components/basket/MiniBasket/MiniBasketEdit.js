import OrderList from "./OrderList";
import OrderSummary from "./OrderSummary";
import PaymentMethodsList from "./PaymentMethodsList";

import "./MiniBasketEdit.scss";

function MiniBasketEdit ({ loading, cart, setCart, getCart, subTotal, setStep }) {
  const checkoutNowEvent = (e) => {
    setStep("checkout");
  };

  const checkoutLaterEvent = (e) => {
    setStep("checkout-later");
  };

  if (loading) {
    return (
      <section className="mini-basket__edit">
				Loading...
      </section>
    );
  }

  return (
    <section className="mini-basket__edit">
      <OrderList {...{ cart, setCart, getCart, setStep }}/>

      {cart.length > 0 && (
        <>
          <section className="payment">
            <div className="payment__methods">
              <div className="payment__methods-title">
                <div className="title">Accepted Payment Methods</div>
              </div>
              <PaymentMethodsList/>
            </div>
            <OrderSummary {...{ subTotal }}/>
          </section>

          <section className="btn-group">
            <button className="btn --primary" onClick={checkoutNowEvent}>
              <span>Checkout Now</span>
            </button>
            <div className="text">
              <span>or</span>
            </div>
            <button className="btn --secondary" disabled={true} onClick={checkoutLaterEvent}>
              <object data={require("../icons/calendar.svg")} name={"Checkout Later"}/>
              <span>Checkout Later</span>
            </button>
          </section>
        </>
      )}
    </section>
  );
}

export default MiniBasketEdit;
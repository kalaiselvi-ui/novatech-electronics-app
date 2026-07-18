import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { forwardRef, useImperativeHandle } from "react";

const StripeCheckout = forwardRef((_, ref) => {
  const stripe = useStripe();
  const elements = useElements();

  const confirmPayment = async (clientSecret: string) => {
    if (!stripe || !elements) {
      return false;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      return false;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (result.error) {
      console.log(result.error.message);
      return false;
    }

    return true;
  };

  useImperativeHandle(ref, () => ({
    confirmPayment,
  }));

  return (
    <div className="rounded-lg border p-5">
      <CardElement />
    </div>
  );
});

export default StripeCheckout;

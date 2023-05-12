import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartTotal = () => {
  const { cart } = useContext(dataContext);

  const total = cart.reduce((acc, el) => acc + el.price *el.quanty, 0);
  return (
    <div className='cartTotal'>
      <h4>total a pagar: {total} $</h4>
    </div>
  );
};

export default CartTotal;
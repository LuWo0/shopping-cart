import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const Nav = () => {

  const { openCart, cartQuantity } = useShoppingCart();
  
  return (
    <nav className=" bg-white shadow-sm mb-3 flex justify-between items-center py-8 h-20">
      <ul className=" flex justify-start gap-8">
        <li className="ml-2">
          <Link to="/">Home</Link>
        </li>
        <li className="mr-2">
          <Link to="/about">About</Link>
        </li>
        <li className="mr-2">
          <Link to="/store">Store</Link>
        </li>
      </ul>
      {cartQuantity > 0 &&(
      <button onClick={openCart} className="mr-3 w-4 h-4 border-2 border-cyan-500 p-8 rounded-full relative hover:bg-cyan-500 focus:bg-cyan-500">
        <svg 
        xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
        <div className="w-6 h-6 rounded-full bg-red-600 text-white flex justify-center items-center absolute top-3/4 left-2/3">{cartQuantity}</div>
      </button>
      )}
    </nav>
  );
};

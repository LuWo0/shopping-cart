import { Modal, TextInput, Checkbox, Button, Label } from "flowbite-react";
import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrecny";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";

export const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems } = useShoppingCart();
//   const [visible, setVisible] = useState(false);
//   const handleClick = (e) => {
//     setVisible(isOpen);
//   };
  return (
    <>
      <Modal show={isOpen} size="md" popup={true} onClose={closeCart} >
        <Modal.Header />
        <Modal.Body>
          <div className=" space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Cart
            </h3>

            <div className="flex flex-col gap-8">
                {cartItems.map(item => (
                    <CartItem key={item.key} {...item} />
                ))}
                <div className="mr-auto font-bold text-3xl">Total: {formatCurrency(cartItems.reduce((total, currentCartItem) => {
                    const item = storeItems.find(i => i.id === currentCartItem.id)
                    return total + (item?.price || 0) * currentCartItem.quantity;
                }, 0))} </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

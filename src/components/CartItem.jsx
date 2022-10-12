import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrecny";

export const CartItem = ({id, quantity}) => {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find(i => i.id === id);
    if (item == null) return null;

    return (
        <div className="flex gap-8">
            <img src={item.imgUrl} className="w-32 h-20 object-cover items-center" />
            <div className=" mb-auto">
                <div className=" text-left self-center">
                    {item.name} {quantity > 1 && <span className=" opacity-50 text-sm">x{quantity}</span>}
                </div>
                <div className=" opacity-50 text-xs">
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>{formatCurrency(item.price * quantity)}</div>
            <button className=" hover:bg-red-600 rounded px-4 py-1 h-10 w-12" onClick={() => removeFromCart(item.id)}>x</button>
        </div>
    )
}
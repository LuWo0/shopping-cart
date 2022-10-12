import { formatCurrency } from "../utils/formatCurrecny";

export const StoreItem = ({ id, name, price, imgUrl }) => {
    let quantity = 0;

    return (
        <div className="h-full p-4">
            <img className=" h-52 object-cover w-full" src={imgUrl} alt={name + " image"} />
            <div className=" flex flex-col ">
                <h2 className=" flex justify-between items-baseline mb-4">
                    <span className=" text-lg">{name}</span>
                    <span className=" mr-2 opacity-40">{formatCurrency(price)}</span>
                </h2>
                <div className="mt-auto ">
                    {quantity === 0 ? (
                        <button className="bg-cyan-500 text-white rounded p-2 w-full">+ Add To Cart</button>
                    ) : (<div className=" flex items-center flex-col gap-2">
                            <div className="flex items-center justify-center gap-2">
                                <button className="bg-cyan-500 text-white rounded p-2">-</button>
                                <div className="">
                                    <span className=" text-2xl">{quantity}</span> in cart
                                </div>
                                <button className="bg-cyan-500 text-white rounded p-2">+</button>
                            </div>
                            <button className="bg-red-600 text-white rounded p-2">Remove</button>
                    </div>)}
                </div>
            </div>
        </div>
    );
}
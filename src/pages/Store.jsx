import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export const Store = () => {
    return (
        <>
            <h1>Store</h1>
            <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 grid-auto-rows">
                {storeItems.map(item => (
                    <div key={item.id}>
                        {/* {JSON.stringify(item)} */}
                        <StoreItem {...item} />
                    </div>
                ))}
            </div>
        </>
    );
}
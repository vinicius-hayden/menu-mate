'use client'
import ShoppingCartItem from "@/components/checkout/ShoppingCartItem"
import ShoppingCartEmpty from "@/components/checkout/ShoppingCartEmpty"
import ShoppingCartTotal from "@/components/checkout/ShoppingCartTotal"
import useShoppingCart from "@/data/hooks/useShoppingCart"

export default function Page() {
    const {
        items = [],
        qtyItems,
        totalPrice,
        addItem,
        removeItem,
        removeProduct
    } = useShoppingCart();

    return (
        <div className="flex flex-col gap-5 container">
            <div className="flex flex-col gap-4">
                {items.length === 0 && <ShoppingCartEmpty />}
                {items.map((item: any) => (
                    <ShoppingCartItem
                        key={item.product.id}
                        item={item}
                        addItem={() => addItem(item.product)}
                        removeItem={() => removeItem(item.product)}
                        removeProduct={() => removeProduct(item.product)}
                    />
                ))}
            </div>
            <ShoppingCartTotal qtdeItens={qtyItems} valorTotal={totalPrice} />
        </div>
    );
}

/* eslint-disable @next/next/no-img-element */
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react'
import { ShoppingCartItem as ShoppingCartModel } from '@menumate/core'

export interface ShoppingCartItemProps {
    item: ShoppingCartModel
    addItem: () => void
    removeItem: () => void
    removeProduct: () => void
}

export default function ShoppingCartItem(props: ShoppingCartItemProps) {
    const { item } = props;
    const { product, quantity } = item

    return (
        <div className="flex items-center px-8 py-0 rounded-xl gap-16">
            <img
                src={product.image}
                width={200}
                height={0}
                alt="image product"
            />
            <div className="flex flex-col h-28 flex-1">
                <span className="text-xl">{product.name}</span>
            </div>
            <div className="flex flex-col items-center gap-4">
                <span className="text-sm ">Quantity</span>
                <div className="flex items-center border border-zinc-300 rounded-lg">
                    <button
                        disabled={quantity === 1}
                        className={`${quantity === 1 && 'cursor-not-allowed'} px-2 py-0.5`}
                        onClick={props.removeItem}
                    >
                        <IconMinus size={15} />
                    </button>
                    <span className="border-x  text-lg px-4 py-0.5">
                        {quantity}
                    </span>
                    <button
                        className="px-2 py-0.5 text-blue-500"
                        onClick={props.addItem}
                    >
                        <IconPlus size={15} />
                    </button>
                </div>
                <button
                    className="flex items-center gap-1 text-red-600 select-none"
                    onClick={props.removeProduct}
                >
                    <IconTrash size={20} />
                    <span className="text-sm">Remove</span>
                </button>
            </div>
        </div>
    )
}
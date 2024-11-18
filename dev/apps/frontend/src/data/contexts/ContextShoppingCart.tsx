import {
    ShoppingCart,
    ShoppingCartItem,
    Product
} from '@menumate/core'
import { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export interface ContextShoppingCartProps {
    items: ShoppingCartItem[];
    qtyItems: number;
    totalPrice: number;
    addItem: (product: Product) => void
    removeItem: (product: Product) => void
    removeProduct: (product: Product) => void
    clearCart: () => void
}

const ContextShoppingCart = createContext<ContextShoppingCartProps>({} as any);

export function ShoppingCartProvider(props: any) {
    const { saveItem, getItem } = useLocalStorage();
    const [shoppingCart, setShoppingCart] = useState<ShoppingCart>(new ShoppingCart());

    function addItem(product: Product) {
        changeShoppingCart(shoppingCart.addItem(product));
    }

    function removeItem(product: Product) {
        changeShoppingCart(shoppingCart.removeItem(product));
    }

    function removeProduct(product: Product) {
        changeShoppingCart(shoppingCart.removeProduct(product));
    }

    function clearShoppingCart() {
        changeShoppingCart(shoppingCart.clear());
    }

    function changeShoppingCart(shoppingCart: ShoppingCart) {
        saveItem('shoppingcart', shoppingCart.items);
        setShoppingCart(shoppingCart);
    }

    useEffect(() => {
        getItem('shoppingcart').then((savedItems: ShoppingCartItem[]) => {
          if (savedItems) setShoppingCart(new ShoppingCart(savedItems))
        })
    }, [getItem]);

    return (
        <ContextShoppingCart.Provider
            value={{
                items: shoppingCart.items,
                qtyItems: shoppingCart.qtyItems,
                totalPrice: shoppingCart.totalPrice,
                addItem,
                removeItem,
                removeProduct,
                clearCart: clearShoppingCart,
            }}
        >
            {props.children}
        </ContextShoppingCart.Provider>
    );
}

export default ContextShoppingCart;

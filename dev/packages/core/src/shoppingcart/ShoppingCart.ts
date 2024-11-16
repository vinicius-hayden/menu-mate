import { Product } from "../product"
import ShoppingCartItem from "./ShoppingCartItem"

export default class ShoppingCart {
    constructor(readonly items: ShoppingCartItem[] = []) {}

    addItem(product: Product) : ShoppingCart {
        const item = this.itemPerProduct(product)
        if (item) {
            return new ShoppingCart(this.changeItemQuantity(this.items, product, 1))
        } else {
            return new ShoppingCart(this.changeItemQuantity(this.items, product, -1))
        }
    }

    removeItem(product: Product) {
        const item = this.itemPerProduct(product)
        if (!item) return this

        return new ShoppingCart(this.changeItemQuantity(this.items, product, -1))
    }

    removeProduct(product: Product) {
        const item = this.itemPerProduct(product)
        if (!item) return this
        return new ShoppingCart(this.items.filter((item) => item.product.id !== product.id));
    }

    clear() {
        return new ShoppingCart()
    }

    get itensQty() {
        return this.items.map((item) => item.quantity).reduce((a, b) => a + b, 0);
    }

    get totalValue() {
        return this.items
            .map((item) => item.product.price * item.quantity)
            .reduce((a, b) => a + b, 0)
    }

    private itemPerProduct(product : Product) : ShoppingCartItem | undefined {
        return this.items.find((item) => item.product.id === product.id);
    }

    private changeItemQuantity(
        items: ShoppingCartItem[],
        product: Product,
        difference: number
    ) : ShoppingCartItem[] {
        return items
        .map((i) =>
            i.product.id === product.id ? { ...i, quantity: i.quantity + difference } : i
        )
        .filter((i) => i.quantity > 0);
    }

}
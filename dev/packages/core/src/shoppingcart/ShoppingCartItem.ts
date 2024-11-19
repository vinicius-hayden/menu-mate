import { Product } from '../product'

export default interface ShoppingCartItem {
    product: Product
    quantity: number
}

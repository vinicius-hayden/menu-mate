'use client'
import { ShoppingCartProvider } from "../../../../data/contexts/ContextShoppingCart";

function App() {
  return (
    <ShoppingCartProvider>
      <h1>Hello!</h1>
    </ShoppingCartProvider>
  );
}

export default App;

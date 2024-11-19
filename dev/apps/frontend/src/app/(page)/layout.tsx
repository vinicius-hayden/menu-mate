import Page from "@/components/template/Page";
import { ShoppingCartProvider } from "@/data/contexts/ContextShoppingCart";

export default function Layout(props: any) {
  return (
    <ShoppingCartProvider>
      <Page>{props.children}</Page>
    </ShoppingCartProvider>
  )
}

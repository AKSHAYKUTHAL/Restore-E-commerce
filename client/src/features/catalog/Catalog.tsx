import type { IProduct } from "../../app/models/product";
import ProductList from "./ProductList";

type ICatalog = {
  products: IProduct[];
};

export default function Catalog({ products }: ICatalog) {
  return (
    <>
      <ProductList products={products} />
    </>
  );
}

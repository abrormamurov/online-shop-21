import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils/index";

export const loader = async ({ params }) => {
  const req = await customFetch(`/products/${params.id}`);
  const product = req.data;
  return { product };
};

function Product() {
  const { product } = useLoaderData();
  console.log(product);
  return <div>Product</div>;
}

export default Product;

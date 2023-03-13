import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();
  console.log({ pathname: router.pathname });
  console.log({ query: router.query });

  return <div>{router.query.productid}</div>;
};

export default ProductPage;

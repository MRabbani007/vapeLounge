import Link from "next/link";
import { getProducts } from "../_lib/utils";
import {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import dbConnect from "../_lib/mongoose";
import Product from "../_lib/dbSchemas/product";

// export const getServerSideProps = (async () => {
//   // Fetch data from external API
//   const client = await dbConnect();

//   const products: Product[] = await Product.find({});

//   console.log(products);

//   // Pass data to the page via props
//   return { props: { products } };
// }) satisfies GetServerSideProps<{ products: Product[] }>;

export const getStaticProps = (async (context) => {
  const client = await dbConnect();

  const products: Product[] = await Product.find({});
  return { props: { products } };
}) satisfies GetStaticProps<{
  products: Product[];
}>;

// InferGetServerSidePropsType<typeof getServerSideProps>

export default async function Menu({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(products);

  const PRODUCT_TYPES = Array.isArray(products)
    ? Array.from(new Set(products.map((item) => item.brand + " " + item.model)))
    : [];

  return (
    <ul className="bg-gradient-to-br to-sky-900 from-zinc-900 text-white font-extralight uppercase w-fit">
      <li className="py-2 px-4 border-b-[1px] hover:bg-sky-800 duration-200">
        <Link href={"/store"}>All Products</Link>
      </li>
      {PRODUCT_TYPES.map((item, index) => {
        return (
          <li
            key={index}
            className="py-2 px-4 border-b-[1px] text-nowrap hover:bg-sky-800 duration-200"
          >
            <Link href={`/store/model/${item}`}>{item}</Link>
          </li>
        );
      })}
      <li className="py-2 px-4 border-b-[1px] hover:bg-sky-800 duration-200">
        <Link href="/store/sale">Sale</Link>
      </li>
    </ul>
  );
}

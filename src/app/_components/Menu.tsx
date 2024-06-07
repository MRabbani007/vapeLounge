import Link from "next/link";
import { getProductTypes } from "../_lib/productControllers";
import { IoChevronForward } from "react-icons/io5";
import MenuGroup from "./MenuGroup";

type Props = {
  products: Product[];
};

// export const getServerSideProps = (async () => {
//   try {
//     // Fetch data from external API
//     const client = await dbConnect();

//     const products: Product[] = await getProducts();

//     console.log("getserversideprops", products);

//     const props: Props = { products };

//     // Pass data to the page via props
//     return { props };
//   } catch (e) {
//     console.log(e);
//     return { props: { products: [] } };
//   }
// }) satisfies GetServerSideProps<{ products: Product[] }>;

// export const getStaticProps = (async (context) => {
//   const client = await dbConnect();

//   const products: Product[] = await Product.find({});

//   console.log(products);
//   return { props: { products } };
// }) satisfies GetStaticProps<{
//   products: Product[];
// }>;

//
// InferGetStaticPropsType<typeof getStaticProps>
// InferGetServerSidePropsType<typeof getServerSideProps>

export default async function Menu() {
  const productTypes = await getProductTypes();
  const brands = Array.from(new Set(productTypes.map((item) => item.brand)));

  return (
    <nav className="hidden bg-zinc-100 text-sky-800 uppercase md:flex flex-col">
      <ul>
        <li>
          <Link
            href={"/store"}
            className="block py-2 px-4 border-b-[1px] hover:bg-white duration-200"
          >
            All Products
          </Link>
        </li>
        <li>
          <Link
            href="/store/sale"
            className="block py-2 px-4 border-b-[1px] hover:bg-white duration-200"
          >
            Sale
          </Link>
        </li>
      </ul>
      {brands.map((brand, index) => {
        const models = productTypes.filter((item) => item.brand === brand);
        return (
          <MenuGroup
            brand={brand}
            models={JSON.parse(JSON.stringify(models))}
            key={index}
          />
        );
      })}
    </nav>
  );
}

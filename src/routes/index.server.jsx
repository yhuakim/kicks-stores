import { Link, Image, gql, useShopQuery, CacheLong } from "@shopify/hydrogen";
import { Suspense } from "react";
import FeaturedCollections from "../components/FeaturedCollections.server";
import Hero from "../components/Hero.server";
import { Layout } from "../components/Layout.server";
import Products from "../components/Products.server";

export default function Home() {

  const {
    data: { products },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
  });

  console.log(products.nodes);

  return (
    <Layout>
      <Suspense>
        <Hero />
        <div className=" text-center ">
          <h1 className="whitespace-pre-wrap text-3xl  pt-3 font-bold text-lead">
            Featured Collections
          </h1>
          <FeaturedCollections />
        </div>
        <div id="products" className="">
          <h1 className="text-3xl text-center font-semibold py-3">Featured Products</h1>
          <Products products={products} />
        </div>
      </Suspense>
    </Layout>
  )
}

const QUERY = gql`
  query Home {
    products(first: 3) {
    nodes {
      id
      title
      descriptionHtml
      handle
      featuredImage{
        height
        width
        altText
        url
      }
      }
    }
  }
`;
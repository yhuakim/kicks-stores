import { Suspense } from "react";
import FeaturedCollections from "../components/FeaturedCollections.server";
import Hero from "../components/Hero.server";
import { Layout } from "../components/Layout.server";
import FeaturedProducts from "../components/FeaturedProducts.server";

export default function Home() {
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
          <FeaturedProducts />
        </div>
      </Suspense>
    </Layout>
  )
}
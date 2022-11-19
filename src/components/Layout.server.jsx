import { useShopQuery, CacheLong, gql, useUrl, Link } from "@shopify/hydrogen";
import { Suspense } from "react";

export function Layout({ children }) {
    const { pathname } = useUrl();
    const isHome = pathname === "/";

    const {
        data: { shop },
    } = useShopQuery({
        query: SHOP_QUERY,
        cache: CacheLong(),
        preload: true,
    });

    return (
        <>
            <div className="flex flex-col min-h-screen antialiased bg-neutral-50">
                <div className="">
                    <a href="#mainContent" className="sr-only">
                        Skip to content
                    </a>
                </div>
                <header
                    role="banner"
                    className={`flex items-center h-16 p-6 md:p-8 lg:p-12 sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 antialiased transition shadow-sm ${isHome ? "bg-white/80 text-black" : "bg-white/80"
                        }`}
                >
                    <div className="flex gap-12">
                        <Link className="font-bold" to="/">
                            {shop.name}
                        </Link>
                    </div>
                </header>

                <Suspense>
                    <main role="main" id="mainContent" className="flex-grow">
                        {children}
                    </main>
                </Suspense>

                <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
                    <span className="text-sm text-gray-500 sm:text-center">© 2022 <a href="https://kicks-store.netlify.app/" className="hover:underline">{shop.name}™</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </footer>

            </div>
        </>
    );
}

const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`;

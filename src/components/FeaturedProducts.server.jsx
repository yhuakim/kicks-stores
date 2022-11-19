import { Image, Link, gql, useShopQuery, CacheLong } from "@shopify/hydrogen";

const FeaturedProducts = () => {
    const {
        data: { products },
    } = useShopQuery({
        query: QUERY,
        cache: CacheLong(),
    });

    return (
        <div id="products" className="">
            <h1 className="text-3xl text-center font-semibold py-3">Featured Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5" >
                {
                    products && products.nodes.map((prod, index) => (
                        <div className="relative w-96 md:w-96 bg-white rounded-t-lg shadow-lg m-3" key={index}>
                            <div className="p-2">
                                <Link to={`/product/${prod.handle}`} className="">
                                    <Image className='object-cover w-96 md:w-96 h-auto' width={prod.featuredImage.width} height={prod.featuredImage.height} src={prod.featuredImage.url} alt={`Image of ${prod.featuredImage.alttext}`} />
                                </Link>
                            </div>
                            <div className="card-info py-2 px-4">
                                <Link to={`/product/${prod.handle}`}>
                                    <h3 className='font-medium'>{prod.title}</h3>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedProducts

const QUERY = gql`
  query Home {
    products(first: 3) {
    nodes {
      id
      title
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
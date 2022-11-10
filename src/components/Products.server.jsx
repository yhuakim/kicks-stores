
import { Image, Link } from '@shopify/hydrogen'

const Products = ({ products }) => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 justify-items-center" >
            {
                products && products.nodes.map((prod, index) => (
                    <div className="relative w-48 md:w-80 bg-white rounded-t-lg shadow-lg m-3" key={index}>
                        <div className="p-2">
                            <Link to={`/product/${prod.handle}`} className="">
                                <Image className='object-cover w-48 md:w-80 h-auto' width={prod.featuredImage.width} height={prod.featuredImage.height} src={prod.featuredImage.url} alt={`Image of ${prod.featuredImage.alttext}`} />
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
    )
}

export default Products

import Product from "../components/Product"
import SortBy from "./SortBy"
const ProductList = ({products}) => {


  return (
    <div className="container pt-5">
      <SortBy />
      <div className="row gap-4 justify-content-center align-items-top">
        {products && products.map(product => (<Product product={product} key={product.id} />))}
      </div>
    </div>
  )
}

export default ProductList
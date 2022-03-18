
import Product from "../components/Product"

const ProductList = ({products}) => {


  return (
    <div className="container pt-5">
      <div className="row gap-4 justify-content-center align-items-top">
        {products && products.map(product => (<Product product={product} key={product.id} />))}
      </div>
    </div>
  )
}

export default ProductList
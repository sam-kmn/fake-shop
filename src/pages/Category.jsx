import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import ProductList from "../components/ProductList"

const Category = () => {
  
  const {id} = useParams();
  const categories = useSelector(state => state.categories.data)
  const products = useSelector(state => state.products.data)

  const categoryProducts = products.filter(product => product.category === categories[id])

  return (
    <div className="container">
      <ProductList products={categoryProducts}/>
    </div>
  )
}

export default Category
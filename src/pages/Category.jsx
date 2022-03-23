import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import ProductList from "../components/ProductList"

const Category = () => {
  
  const {id} = useParams();
  const categories = useSelector(state => state.categories.data)
  const productsData = useSelector(state => state.products.data)
  const productsSortData = useSelector(state => state.products.sort.data)

  const products = (productsSortData.length ? productsSortData : productsData).filter(product => product.category === categories[id])

  return (
    <div className="container">
      <ProductList products={products}/>
    </div>
  )
}

export default Category
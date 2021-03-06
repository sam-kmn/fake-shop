import ProductList from "../components/ProductList"
import { useSelector } from "react-redux"
import shoppingImage from '../assets/shopping.jpg'
import '../styles/Home.scss'


const Home = () => {
  
  const productsData = useSelector(state => state.products.data)
  const productsSortData = useSelector(state => state.products.sort.data)

  const products = (productsSortData.length ? productsSortData : productsData)

  return (<>
    <div className="test">
      <img src={shoppingImage} id="test-image" alt="" />
      <div id="test-text">Lorem ipsum dolor sit.</div>
    </div>
    <div className="container">
      <ProductList products={products} />
    </div></>
  )
}

export default Home
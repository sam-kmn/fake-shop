import ProductList from "../components/ProductList"
import { useSelector } from "react-redux"
import shoppingImage from '../assets/shopping.jpg'
import '../styles/Home.scss'


const Home = () => {
  
  const products = useSelector(state => state.products)

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
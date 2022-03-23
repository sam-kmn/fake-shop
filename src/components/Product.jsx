import '../styles/Product.scss'
import { IoCartOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../actions/cart'
import { Link } from 'react-router-dom'

const Product = ({product}) => {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  const AddCartBtn = () => (<button onClick={() => dispatch(addToCart(product))} className="btn btn-sm btn-outline-primary rounded-pill"><IoCartOutline/> </button>)
  const RemoveCartBtn = () => (<button onClick={() => dispatch(removeFromCart(product))} className="btn btn-sm btn-outline-danger rounded-pill"><IoCartOutline/> </button>)

  return (
    <div className="product col-5 col-md-3" >
      <Link className='product-link' to={'/product/' + product.id} >
        <img src={product.image} alt="product" className="product-image"  />
        <div className="product-title">{product.title}</div>
      </Link>
      <div className="product-price">
        {product.price}$
        { cart && cart.find(item => item.id === product.id) ? <RemoveCartBtn /> : <AddCartBtn /> }
      </div>
    </div>
  )
}

export default Product
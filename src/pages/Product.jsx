import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addToCart, removeFromCart } from '../actions/cart'

import {AiOutlineStar, AiOutlineCheck} from 'react-icons/ai'
import { IoCartOutline } from 'react-icons/io5'

const Product = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const product = useSelector(state => state.products.data[id-1])
  const cart = useSelector(state => state.cart)

  const AddCartBtn = () => (<button onClick={() => dispatch(addToCart(product))} className="btn btn btn-outline-primary rounded-pill"><IoCartOutline/> Add to cart </button>)
  const RemoveCartBtn = () => (<button onClick={() => dispatch(removeFromCart(product))} className="btn btn btn-outline-danger rounded-pill"><IoCartOutline/> Remove from cart </button>)

  const buyNow = () => {
    if(!cart.find(item => item.id === product.id)) dispatch(addToCart(product));
    navigate('/cart', {replace: true})
  }

  return (product ? (
    <div className="container p-3 p-lg-5 ">
      <div className="row justify-content-evenly align-items-center">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5 mt-5">
          <img src={product.image} alt="product" className="img-fluid" />
        </div>
        
        <div className="col-12 col-lg-6 mt-5">
          <header className="fs-3 fw-bold">{product.title}</header>
          <p>{product.description}</p>

          <div className="d-flex justify-content-between">
            <div className="fs-6 text-success">This item is available <AiOutlineCheck /> </div>

            <div className="d-flex gap-4">
              <div className="fs-5"><AiOutlineStar/> {product.rating.rate}</div>
              <div className="fs-5">Sold {product.rating.count}</div>
            </div>
          </div>

          <div className="row justify-content-between mt-5 pt-lg-5">
            <div className="col-auto">
              <div className="fs-3">Price: {product.price}$</div>
              <p className="fs-6 text-secondary">Shipping not included.</p>
            </div>

            <div className="col-auto">
              <button className="btn btn-outline-success rounded-pill me-2" onClick={buyNow}>Buy now</button>
              { cart && cart.find(item => item.id === product.id) ? <RemoveCartBtn /> : <AddCartBtn /> }
            </div>

          </div>


        </div>

      </div>
    </div>
  ) : <></>)
}

export default Product
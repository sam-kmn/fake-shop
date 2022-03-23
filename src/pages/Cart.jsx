import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeFromCart, updateCart } from "../actions/cart"
import '../styles/Cart.scss'
import {FiDelete} from 'react-icons/fi'
import { Link } from "react-router-dom"
const Cart = () => {

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const [total, setTotal] = useState(0)
  useEffect(() => {
    let _total = 0
    cart.forEach(product => _total += (product.price * product.amount))
    setTotal(_total)
  }, [cart])

  const CartProducts = () => (<>
    <header className="col-12 cart-header">Your cart</header>

    <table className="table col-12 cart-table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Product name</th>
          <th scope="col">Price</th>
          <th scope="col">Amount</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(product => (
          <tr className="cart-product" key={product.id}>
            <th scope="row"><Link to={'/product/' + product.id}><img src={product.image} height="60" alt="" /></Link></th>
            <td><Link className="cart-product-name" to={'/product/' + product.id}>{product.title}</Link></td>
            <td className="fw-bold">{product.price}$</td>
            <td>
              <div className="cart-product-amount-wrapper">
                <button className="cart-product-amount-btn" onClick={() => dispatch(updateCart(product, -1))}>-</button>
                <div className="cart-product-amount">{product.amount}</div>
                <button className="cart-product-amount-btn" onClick={() => dispatch(updateCart(product, 1))}>+</button>
              </div>
            </td>
            <td> <FiDelete className="cart-product-delete" onClick={() => dispatch(removeFromCart(product))} /> </td>
          </tr>  
        ))}
      </tbody>
    </table>

    <div className="cart-total">Total {total}$ </div>

  </>)
  
  const CartEmpty = () => ( <header className="col-12 cart-header">Your cart is empty!</header> )

  return (
    <div className="container">
      <div className="row">

      {cart.length ? <CartProducts /> : <CartEmpty /> }
      
      </div>  
    </div>
  )
}

export default Cart
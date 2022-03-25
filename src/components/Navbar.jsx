import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/Navbar.scss'
import { IoCartOutline } from 'react-icons/io5'

const Navbar = () => {

  const categories = useSelector(state => state.categories.data)
  const cart = useSelector(state => state.cart)

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container">

        <Link to={'/'} className="navbar-brand">Fake Shop</Link>

        <div className='d-flex align-items-center gap-4 order-lg-2 ps-md-5'>

          {cart && cart.length ? (
            <Link to={'/cart'} className='cart'>
              <IoCartOutline className='cart-icon' />
              <span className="badge rounded-pill bg-primary">{cart.length}</span>
            </Link>
          ) : <></>}

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>

        <div className="collapse navbar-collapse justify-content-end order-lg-1 " id="navbarNav">
          <ul className="navbar-nav">
            {categories && categories.map((category, i) => (
              <li className="nav-item" key={i}>
                <Link to={'/category/' + i} className="nav-link" aria-current="true" >{category}</Link>
              </li>
            ))}
          </ul>
        </div>


      </div>
    </nav>
  )
}

export default Navbar
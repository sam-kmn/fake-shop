import { useEffect } from 'react';
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetch_categories_success, fetch_categories_pending, fetch_categories_error} from './actions/categories'
import { fetch_products_success, fetch_products_pending, fetch_products_error } from './actions/products'

import Category from './pages/Category';
import Product from './pages/Product';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Error from './pages/Error';

import ky from 'ky'

function App() {

  const categories = useSelector(state => state.categories)
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {  

    dispatch(fetch_categories_pending())
    ky.get('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => dispatch(fetch_categories_success(data)))
      .catch(() => dispatch(fetch_categories_error()))

    dispatch(fetch_products_pending())
    ky.get('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => dispatch(fetch_products_success(data)))
      .catch(() => dispatch(fetch_products_error()))

  }, [dispatch])

  useEffect(() => {
    if(products.error || categories.error) navigate('/error', {replace: true})
  }, [navigate, products, categories])

  const Spinner = () => (
    <div className='d-flex justify-content-center pt-5 mt-5'>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )

  const Layout = () => (
    products.pending || categories.pending ? <Spinner /> : (
      <>
        <Navbar />
        <Outlet />
      </>
    )
  )


  return (
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/category/:id' element={<Category />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/error' element={<Error />} />
        </Route>
      </Routes>
  );
}

export default App;

import { Routes, Route, Outlet, useNavigate } from 'react-router-dom';

import Category from './pages/Category';
import Product from './pages/Product';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

import { useDispatch } from 'react-redux';

import { fetch_categories } from './actions/categories'
import { fetch_products } from './actions/products'
import { useCallback, useEffect } from 'react';
import Error from './pages/Error';

function App() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const fetchData = useCallback( async (URL) => {
    try {
      const response = await fetch(URL)
      if (!response.ok) navigate('/error', {replace: true})
      const data = await response.json()
      return data
    } catch (err) {
        console.log(err)
        navigate('/error', {replace: true})
    }
}, [navigate])

  useEffect(() => {

    fetchData('https://fakestoreapi.com/products/categories')
      .then( data => dispatch(fetch_categories(data)))

    fetchData('https://fakestoreapi.com/products')
      .then( data => dispatch(fetch_products(data)))    

  }, [dispatch, fetchData])



  const Layout = () => (<>
    <Navbar />
    <Outlet />
  </>)

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

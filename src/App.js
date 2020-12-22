// import './App.css';
import { Switch, Route } from 'react-router-dom'
// import { Counter } from './components/shared'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
function App () {
  return (
    <div styles={{ display: 'flex' }}>
      <NavBar />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </div>
  )
}

export default App

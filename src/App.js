// import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App () {
  const store = configureStore()
  return (
    <Provider store={store}>
      <div styles={{ display: 'flex' }}>
        <NavBar />
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </div>
    </Provider>

  )
}

export default App

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import UserContainer from './components/userConatiner';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ProductDetails } from './components/ProductDetails';
import axios from 'axios'




const App = () => {

  const [post, setPost] = useState([])
  const fetchData = async () => {

    await axios.get('https://fakestoreapi.com/products')
      .then(response => {
        const alldata = response.data
        setPost(alldata)
        console.log(post)
      })
  }

  useEffect(() => {
    fetchData();
  }, [])

  const ProductWithId = ({ match }) => {
    return (

      <ProductDetails match={match} post={post} />

    )
  }

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/products' component={UserContainer} />
            <Route path='/products/:id' component={ProductWithId} />
            <Redirect to='/products' />
          </Switch>

        </BrowserRouter>

      </div>
    </Provider>
  );
}


export default App;

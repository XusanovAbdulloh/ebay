import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Category from "./category/Category"
import Product from './product/Product';
import SearchResult from './search-result/SearchResult';
import Auth from './auth/Auth';
import Like from './like/Like';

const Routes = () => {
    return (
       <Switch>
         <Route exact path="/">
            <Home/>
         </Route>
         <Route path="/auth">
            <Auth/>
         </Route>
         <Route path="/category/:id">
          <Category/>
        </Route>
        <Route path="/product/:id">
          <Product/>
        </Route>
        <Route path="/search/:productName">
          <SearchResult/>
        </Route>
        <Route path="/like">
            <Like/>
         </Route>
       </Switch>
    );
}

export default Routes;

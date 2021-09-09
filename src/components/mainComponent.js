import React from 'react'
import Nav from './nav'
import Footer from './footer'
import Home from './home'
import Aboutus from './aboutus'
import Categories from './categories'
import Contactus from './contactus'
import product from './product'
import Prod_D from './product_detail'
import Gallery from './gallery'
import Cart from './cart'
import Login from './login'
import Signup from './signup'
import { Switch, Route, Redirect } from 'react-router'

export default function Main() {
    return (
        <div>
            <Nav />
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={Aboutus}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/contact" component={Contactus}/>
                <Route path="/shop" component={Categories}/>
                <Route path="/product" component={product}/>
                <Route path="/product_detail" component={Prod_D}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Redirect to="/home" />
            </Switch>
            <Footer /> 
        </div>
    )
}

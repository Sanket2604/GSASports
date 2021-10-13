import React, {useState} from 'react'
import Nav from './nav'
import Footer from './footer'
import Home from './home'
import Aboutus from './aboutus'
import Categories from './categories'
import Contactus from './contactus'
import product from './product'
import ProdDetail from './product_detail'
import Gallery from './gallery'
import Cart from './cart'
import Login from './login'
import Signup from './signup'
import Account from './account'
import OrderList from './order_list'
import OrderDetail from './order_detail'
import Checkout from './checkout'
import AdminLogin from './adminLogin'
import AdminHome from   './adminHome'
import AdminUser from './adminUser'
import AdminProducts from './adminProducts'
import AdminProdDetail from './adminProdDetail'
import AdminOrders from './adminOrders'
import AdminOrdDeatail from './adminOrdDeatail'
import AdminMsg from './adminMsg'
import AdminMsgDetail from './adminMsgDetail'
import { Switch, Route, Redirect } from 'react-router'

export default function Main() {
    const [admin, setAdmin] = useState("false");
    const [token, setToken] = useState()
    return (
        <div>
            <Nav admin={admin} />
            <Switch>
                <Route path="/adminLogin" component={() => <AdminLogin setAdmin={setAdmin} />} />
                <Route path="/adminHomepage" component={() => <AdminHome setAdmin={setAdmin} />} />
                <Route path="/adminUser" component={() => <AdminUser setAdmin={setAdmin} />} />
                <Route path="/adminProducts" component={() => <AdminProducts setAdmin={setAdmin} />} />
                <Route path="/adminProdDetails" component={() => <AdminProdDetail setAdmin={setAdmin} />} />
                <Route path="/adminOrders" component={() => <AdminOrders setAdmin={setAdmin} />} />
                <Route path="/adminOrdDetail" component={() => <AdminOrdDeatail setAdmin={setAdmin} />} />
                <Route path="/adminMessage" component={() => <AdminMsg setAdmin={setAdmin} />} />
                <Route path="/adminMsgDetail" component={() => <AdminMsgDetail setAdmin={setAdmin} />} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={Aboutus} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/contact" component={Contactus} />
                <Route path="/shop" component={Categories} />
                <Route path="/product/:pname" component={product} />
                <Route path="/product_detail/:cat/:pname" component={() => <ProdDetail token={token}/>} />
                <Route path="/cart" component={() => <Cart token={token}/>} />
                <Route path="/checkout" component={() => <Checkout token={token} />} />
                <Route path="/login" component={() => <Login setToken={setToken} />} />
                <Route path="/signup" component={() => <Signup />} />
                <Route path="/account" component={() => <Account token={token}/>} />
                <Route path="/your_orders" component={() => <OrderList token={token}/>}/>
                <Route path="/order_detail" component={() => <OrderDetail token={token}/>} />
                <Redirect to="/home" />
            </Switch>
            <Footer admin={admin}/> 
        </div>
    )
}

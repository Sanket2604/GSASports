import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import AdminNav from './adminNav';
import shoe from '../assets/show.jpg'
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from "reactstrap";
import '../css/adminOrdDetails.css'

export default function AdminOrdDeatail(props) {

    useEffect(()=>{
        props.setAdmin("true")
    })
    const [nav, setNav] = useState("hide");
    function navToggle(){
        if(nav=="hide"){
            setNav("show")
        }
        else{
            setNav("hide")
        }
    }
    
    function CartItem(){
        return(
            <div className="row cart_item mt-3 mb-3">
                <div className="col-4 col-md-5 col-lg-6 img_cont">
                    <img src={shoe} alt=""/>
                    <div className="detail">Product Name</div>
                </div>
                <div className="col-2 col-md-2 col-lg-2 price">₹ Price</div>
                <div className="col-3 col-md-3 col-lg-2 quantity">
                    <div className="counter">
                        <input type="number" style={{border: "1px solid limegreen", borderRadius: "5px"}} disabled/>
                        
                    </div>
                </div>
                <div className="col-3 col-md-2 col-lg-2 total">₹ Total Price</div>
            </div>
        )
    }

    return (
        <div className="admin_ord_detail">
            <Link to="/adminHomepage" className="admin_homebtn">
                <i class="fa fa-home"></i>
            </Link>
            <div className="admin_toggle" onClick={navToggle}>
                <i class="fa fa-bars"></i>
            </div>
            <div className="admin_delete_dish">
                <i class="fa fa-trash"></i>
                <span>Delete Order</span>
            </div>
            <AdminNav nav={nav} />
            <div className="cart container mb-5">
                <div className="head_">Update Order</div>
                <Form>
                    <FormGroup row>
                        <Label htmlFor="name" lg={3}>Status:</Label>
                        <Col lg={7} >
                            <Input type="text" id="name" name="name" autoComplete="off" placeholder="Status" />
                            {/* <FormFeedback>{errors.name}</FormFeedback> */}
                        </Col>
                        <Col lg={2}>
                            <div className="admin_btn_cont">
                                <div className="admin_sub_btn">Update</div>
                            </div>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="em" lg={3}>Tracking ID:</Label>
                        <Col  lg={7} >
                            <Input type="text"  id="type" name="type" autoComplete="off" placeholder="Tracking ID" />
                            {/* <FormFeedback>{errors.type}</FormFeedback> */}
                        </Col>
                        <Col lg={2}>
                            <div className="admin_btn_cont">
                                <div className="admin_sub_btn">Update</div>
                            </div>
                        </Col>
                    </FormGroup>
                </Form>
                <div className="head_">Order Number: </div>
                <div className="row heading">
                    <div className="col-4 col-md-5 col-lg-6">Product</div>
                    <div className="col-2 col-md-2 col-lg-2">Price</div>
                    <div className="col-3 col-md-3 col-lg-2">Quantity</div>
                    <div className="col-3 col-md-2 col-lg-2">Total</div>
                </div>
                <CartItem />
                <div className="row">
                    <div className="total_cont">
                        <div>Total</div>
                        <div className="total">₹ Total</div>
                    </div>
                </div>
                <div className="row row3">
                    <div className="col-12 col-md-6 p-3">
                        <div className="add bill_add">
                            <div className="heading">Billing Address</div>
                            <div className="name">Name: Full Name</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatum dolores hic quo corrupti harum voluptas placeat ad nam? Id.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 p-3">
                        <div className="add ship_add">
                            <div className="heading">Shipping Address</div>
                            <div className="name">Name: Full Name</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatum dolores hic quo corrupti harum voluptas placeat ad nam? Id.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

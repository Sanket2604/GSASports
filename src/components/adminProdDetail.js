import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import AdminNav from './adminNav';
import '../css/adminProdDetails.css'
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from "reactstrap";

export default function AdminProdDetail(props) {
    
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

    return (
        <div className="admin_prod_detail">
            <Link to="/adminHomepage" className="admin_homebtn">
                <i class="fa fa-home"></i>
            </Link>
            <div className="admin_toggle" onClick={navToggle}>
                <i class="fa fa-bars"></i>
            </div>
            <div className="admin_delete_dish">
                <i class="fa fa-trash"></i>
                <span>Delete Product</span>
            </div>
            <AdminNav nav={nav} />
            <div className="prod_details container-fluid">
                <Form>
                    <FormGroup row>
                        <Label htmlFor="name" lg={3}>Product Name</Label>
                        <Col lg={9} >
                            <Input type="text" id="name" name="name" autoComplete="off" placeholder="Product Name" />
                            {/* <FormFeedback>{errors.name}</FormFeedback> */}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="em" lg={3}>Sports Category</Label>
                        <Col  lg={9} >
                            <Input type="text"  id="type" name="type" autoComplete="off" placeholder="Sport Category" />
                            {/* <FormFeedback>{errors.type}</FormFeedback> */}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="em" lg={3}>Product Category</Label>
                        <Col  lg={9} >
                            <Input type="text"  id="type" name="type" autoComplete="off" placeholder="Product Category" />
                            {/* <FormFeedback>{errors.type}</FormFeedback> */}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="address1" lg={3}>Short Description</Label>
                        <Col lg={9} >
                            <Input type="text" id="address1" name="address1" autoComplete="off" placeholder="Short Description" />
                            {/* <FormFeedback>{errors.address1}</FormFeedback> */}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="address2" lg={3}>Full Description</Label>
                        <Col lg={9} >
                            <Input type="text" id="address2" name="address2" autoComplete="off"  placeholder="Full Description" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="landmark" lg={3}>Stock</Label>
                        <Col  lg={9} >
                            <Input type="input"  id="landmark" name="landmark" autoComplete="off" placeholder="Available Stock" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="city" lg={3}>CGST</Label>
                        <Col  lg={9} >
                            <Input type="text"  id="city" name="city" autoComplete="off" placeholder="CGST" />
                            {/* <FormFeedback>{errors.city}</FormFeedback> */}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="state" lg={3}>SGST</Label>
                        <Col  lg={9} >
                            <Input type="input"  id="state" name="state" placeholder="SGST" autoComplete="off" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="pincode" lg={3}>Price</Label>
                        <Col  lg={9} >
                            <Input type="number"  id="pincode" name="pincode" autoComplete="off" placeholder="Price"/>
                            {/* <FormFeedback>{errors.pincode}</FormFeedback> */}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="pincode" lg={3}>Size</Label>
                        <Col  lg={9} >
                            <Input type="number"  id="pincode" name="pincode" autoComplete="off" placeholder="Size"/>
                            {/* <FormFeedback>{errors.pincode}</FormFeedback> */}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="pincode" lg={3}>Image</Label>
                        <Col  lg={9} >
                            <Input type="number"  id="pincode" name="pincode" autoComplete="off" placeholder="Size"/>
                            {/* <FormFeedback>{errors.pincode}</FormFeedback> */}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{size: 12}}>
                            <div className="admin_btn_cont">
                                <div className="admin_sub_btn">Submit</div>
                            </div>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
}

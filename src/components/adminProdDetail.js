import React, {useEffect, useState, Component} from 'react'
import axios from 'axios';
import { url } from './url';
import { Link, Redirect, useParams } from 'react-router-dom';
import AdminNav from './adminNav';
import '../css/adminProdDetails.css'
import { Form, FormGroup, Label, Input, Col, FormFeedback } from "reactstrap";
import Loader from './loader';

function OptionsSport({sportCat}){

    if(sportCat){
        return sportCat.map(opt=>
            <option value={opt.name} id={opt._id}>{opt.name}</option>
        )
    }
    else{
        return(
            <option>Loading</option>
        )
    }
}

function OptionsProd({prodCat}){
    if(prodCat){
        return prodCat[0].prodTypes.map(opt=>
            <option value={opt.name} id={opt._id}>{opt.name}</option>
        )
    }
    else{
        return(
            <option>Select A Sport Category</option>
        )
    }
}

function Stock({stock}){
    if(stock<=0){
        return <div style={{color: "red"}}>Out Of Stock!!! Update Stock!!!</div>
    }
    else{
        return <div></div>
    }
}
class FormContainer extends Component {
    
    constructor(props){
        super(props);
        this.state={
            optssportCat: this.props.cat,
            optsprodCat: null,
            update: this.props.update,
            id: this.props.product._id,
            name: this.props.product.name,
            sportCat: this.props.product.sportCat,
            prodCat: this.props.product.prodCat,
            shortDescription: this.props.product.shortDescription,
            description: this.props.product.description,
            stock: this.props.product.stock,
            CGST: this.props.product.CGST,
            SGST: this.props.product.SGST,
            price: this.props.product.price,
            unitsSold: this.props.product.unitsSold,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.SubmitForm = this.SubmitForm.bind(this);
    }

    handleInputChange(event){
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        },()=>{
            if(name==="sportCat"){
                this.setState({
                    optsprodCat: this.state.optssportCat.filter(cat=> this.state.sportCat === cat.name)
                })
            }
        })
    }
    
    SubmitForm(){
        const token=localStorage.getItem('token')
        if(this.state.update){
            axios
            .put(url+'/products/'+this.state.id,{
                "sportCat": this.state.sportCat,
                "prodCat": this.state.prodCat,
                "name": this.state.name,
                "sizeAva": false,
                "size": [],
                "shortDescription": this.state.shortDescription,
                "description": this.state.description,
                "img": "show.jpg",
                "stock": this.state.stock,
                "CGST": this.state.CGST,
                "SGST": this.state.SGST,
                "price": this.state.price
            },{
                headers: {Authorization: `Bearer ${token}`}
            })
            .then(()=>{
                alert("Product Updated")
                window.location.reload()
            })
            .catch((err)=>{
                alert("Could Not Update Product!"+err)
            })
        }
        else{
            axios
            .post(url+'/products',{
                "sportCat": this.state.sportCat,
                "prodCat": this.state.prodCat,
                "name": this.state.name,
                "sizeAva": false,
                "size": [],
                "shortDescription": this.state.shortDescription,
                "description": this.state.description,
                "img": "show.jpg",
                "stock": this.state.stock,
                "CGST": this.state.CGST,
                "SGST": this.state.SGST,
                "price": this.state.price
            },{
                headers: {Authorization: `Bearer ${token}`}
            })
            .then(()=>{
                alert("Product Added")
                window.location.reload()
            })
            .catch((err)=>{
                alert("Could Not Add Product!"+err)
            })
        }
    }

    render() {
        return (
            <Form id={this.state.id}>
                <FormGroup row>
                    <Label htmlFor="name" lg={3}>Product Name</Label>
                    <Col lg={9} >
                        <Input type="text" id="name" name="name" autoComplete="off" onChange={this.handleInputChange} value={this.state.name} placeholder="Product Name" />
                        {/* <FormFeedback>{errors.name}</FormFeedback> */}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="sportCat" lg={3}>Sports Category</Label>
                    <Col  lg={3} >
                        <Input type="text"  id="sportCat" name="sportCat" autoComplete="off"  value={this.state.sportCat} placeholder="Sport Category" />
                        {/* <FormFeedback>{errors.sportCat}</FormFeedback> */}
                    </Col>
                    <Col lg={4}>
                        <select name="sportCat" onChange={this.handleInputChange}>
                            <option value=""></option>
                            <OptionsSport sportCat={this.state.optssportCat} />
                        </select>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="prodCat" lg={3}>Product Category</Label>
                    <Col  lg={3} >
                        <Input type="text"  id="prodCat" name="prodCat" autoComplete="off"  value={this.state.prodCat} placeholder="Product Category" />
                        {/* <FormFeedback>{errors.prodCat}</FormFeedback> */}
                    </Col>
                    <Col lg={4}>
                        <select name="prodCat" onChange={this.handleInputChange}>
                            <option value=""></option>
                            <OptionsProd prodCat={this.state.optsprodCat} />
                        </select>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="stock" lg={3}>Stock</Label>
                    <Col  lg={4} >
                        <Input type="number"  id="stock" name="stock" autoComplete="off" onChange={this.handleInputChange} value={this.state.stock} placeholder="Available Stock" />
                        {/* <FormFeedback>{errors.stock}</FormFeedback> */}
                    </Col>
                    <Col lg={5}>
                        <Stock stock={this.state.stock}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="CGST" lg={3}>CGST</Label>
                    <Col  lg={9} >
                        <Input type="number"  id="CGST" name="CGST" autoComplete="off" onChange={this.handleInputChange} value={this.state.CGST} placeholder="CGST" />
                        {/* <FormFeedback>{errors.CGST}</FormFeedback> */}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="SGST" lg={3}>SGST</Label>
                    <Col  lg={9} >
                        <Input type="number"  id="SGST" name="SGST" placeholder="SGST" onChange={this.handleInputChange} value={this.state.SGST} autoComplete="off" />
                        {/* <FormFeedback>{errors.SGST}</FormFeedback> */}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="price" lg={3}>Price</Label>
                    <Col  lg={9} >
                        <Input type="number"  id="price" name="price" autoComplete="off" onChange={this.handleInputChange} value={this.state.price} placeholder="Price"/>
                        {/* <FormFeedback>{errors.price}</FormFeedback> */}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="pincode" lg={3}>Size</Label>
                    <Col  lg={9} >
                        <Input type="text"  id="pincode" name="pincode" autoComplete="off" placeholder="Size"/>
                        {/* <FormFeedback>{errors.pincode}</FormFeedback> */}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="shortDescription" lg={3}>Short Description</Label>
                    <Col lg={5} >
                        <Input type="text" id="shortDescription" name="shortDescription" autoComplete="off" onChange={this.handleInputChange} value={this.state.shortDescription} placeholder="Short Description" />
                        {/* <FormFeedback>{errors.shortDescription}</FormFeedback> */}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="description" lg={3}>Full Description</Label>
                    <Col lg={9} >
                        <Input type="textarea" rows="15" id="description" name="description" autoComplete="off" onChange={this.handleInputChange} value={this.state.description}  placeholder="Full Description" />
                        {/* <FormFeedback>{errors.description}</FormFeedback> */}
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
                            <div className="admin_sub_btn" onClick={this.SubmitForm}>Submit</div>
                        </div>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}


export default function AdminProdDetail(props) {
    
    const prod = useParams();
    const [nav, setNav] = useState("hide");
    const [product, setProduct] = useState()
    const [cat, setCat] = useState()
    const [redirect, setRedirect] = useState(true) 

    useEffect(()=>{
        props.setAdmin("true")
        const token = localStorage.getItem('token');
        axios
        .get(url+'/categories')
        .then((response) =>{
            setCat(response.data)
        })
        .catch(error => {
            console.log(error)
        })
        if(prod.prodID!=="Add_Prod"){
            axios
            .get(url+'/user/verifyAdmin',{
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(() =>{
                setRedirect(false)
            })
            .catch(error => {
                console.log(error)
            })
            axios
            .get(url+'/products/'+prod.prodID)
            .then((response) =>{
                setProduct(response.data)
            })
            .catch(error => {
                console.log(error)
            })
        }
        else{
            axios
            .get(url+'/user/verifyAdmin',{
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(() =>{
                setRedirect(false)
                setProduct(true)
            })
            .catch(error => {
                console.log(error)
            })
        }
    },[])

    function navToggle(){
        if(nav=="hide"){
            setNav("show")
        }
        else{
            setNav("hide")
        }
    }

    if(product){
        if(redirect){
            return <Redirect to="/adminProducts"/>
        }
        else{
            if(prod.prodID!=="Add_Prod"){
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
                            <FormContainer product={product} cat={cat} update={true} />
                        </div>
                    </div>
                )
            }
            else{
                return (
                    <div className="admin_prod_detail">
                        <Link to="/adminHomepage" className="admin_homebtn">
                            <i class="fa fa-home"></i>
                        </Link>
                        <div className="admin_toggle" onClick={navToggle}>
                            <i class="fa fa-bars"></i>
                        </div>
                        <AdminNav nav={nav} />
                        <div className="prod_details container-fluid">
                            <FormContainer product={product} cat={cat} update={false} />
                        </div>
                    </div>
                )
            }
        }
    }
    else{
        return <Loader/>
    }
}

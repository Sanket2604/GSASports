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
        return <div>Enter the toatal Stock available for sale</div>
    }
}

function Size(props){
    if(props.sizeAva==="true"){
        return(
            <div>
                <FormGroup row>
                    <Label htmlFor="size" lg={3}>Size</Label>
                    <Col  lg={1} >
                        <Input type="text"  id="size" name="size1" autoComplete="off" style={{textAlign: "center"}} onChange={props.handleInputChange} value={props.size1} placeholder="Size 1"/>
                    </Col>
                    <Col  lg={1} >
                        <Input type="text"  id="size" name="size2" autoComplete="off" style={{textAlign: "center"}} onChange={props.handleInputChange} value={props.size2} placeholder="Size 2"/>
                    </Col>
                    <Col  lg={1} >
                        <Input type="text"  id="size" name="size3" autoComplete="off" style={{textAlign: "center"}} onChange={props.handleInputChange} value={props.size3} placeholder="Size 3"/>
                    </Col>
                    <Col  lg={1} >
                        <Input type="text"  id="size" name="size4" autoComplete="off" style={{textAlign: "center"}} onChange={props.handleInputChange} value={props.size4} placeholder="Size 4"/>
                    </Col>
                    <Col  lg={1} >
                        <Input type="text"  id="size" name="size5" autoComplete="off" style={{textAlign: "center"}} onChange={props.handleInputChange} value={props.size5} placeholder="Size 5"/>
                    </Col>
                    <Col  lg={1} >
                        <Input type="text"  id="size" name="size6" autoComplete="off" style={{textAlign: "center"}} onChange={props.handleInputChange} value={props.size6} placeholder="Size 6"/>
                    </Col>
                    <Col  lg={1} >
                        <Input type="text"  id="size" name="size7" autoComplete="off" style={{textAlign: "center"}} onChange={props.handleInputChange} value={props.size7} placeholder="Size 7"/>
                    </Col>
                    <Col  lg={1} >
                        <Input type="text"  id="size" name="size8" autoComplete="off" style={{textAlign: "center"}} onChange={props.handleInputChange} value={props.size8} placeholder="Size 8"/>
                    </Col>
                    <Col  lg={1} >
                        <Input type="text"  id="size" name="size9" autoComplete="off" style={{textAlign: "center"}} onChange={props.handleInputChange} value={props.size9} placeholder="Size 9"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col lg={12}>
                        <div className="admin_btn_cont">
                            <div className="admin_sub_btn" onClick={props.UpdateSize}>Update Size</div>
                        </div>
                    </Col>
                </FormGroup>
            </div>
        )
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
            sizeAva: this.props.product.sizeAva,
            size: this.props.product.size,
            size1: "",
            size2: "",
            size3: "",
            size4: "",
            size5: "",
            size6: "",
            size7: "",
            size8: "",
            size9: "",
            unitsSold: this.props.product.unitsSold,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.UpdateSize = this.UpdateSize.bind(this);
        this.SubmitForm = this.SubmitForm.bind(this);
    }

    componentDidMount(){
        if(this.props.product.sizeAva){
            this.setState({
                size1: this.props.product.size[0],
                size2: this.props.product.size[1],
                size3: this.props.product.size[2],
                size4: this.props.product.size[3],
                size5: this.props.product.size[4],
                size6: this.props.product.size[5],
                size7: this.props.product.size[6],
                size8: this.props.product.size[7],
                size9: this.props.product.size[8]
            })
        }
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
    
    UpdateSize(){
        const combined_size = []
        if(this.state.size1){
            combined_size[combined_size.length]=this.state.size1
        }
        if(this.state.size2){
            combined_size[combined_size.length]=this.state.size2
        }
        if(this.state.size3){
            combined_size[combined_size.length]=this.state.size3
        }
        if(this.state.size4){
            combined_size[combined_size.length]=this.state.size4
        }
        if(this.state.size5){
            combined_size[combined_size.length]=this.state.size5
        }
        if(this.state.size6){
            combined_size[combined_size.length]=this.state.size6
        }
        if(this.state.size7){
            combined_size[combined_size.length]=this.state.size7
        }
        if(this.state.size8){
            combined_size[combined_size.length]=this.state.size8
        }
        if(this.state.size9){
            combined_size[combined_size.length]=this.state.size9
        }
        this.setState({
            size: combined_size
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
                "sizeAva": this.state.sizeAva,
                "size": this.state.size,
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
                "sizeAva": this.state.sizeAva,
                "size": this.state.size,
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
                    <Label htmlFor="name" lg={3}>Product ID</Label>
                    <Col lg={3} >
                        <div style={{padding: "5px 15px", border: "1px solid hsl(140, 77%, 48%)", borderRadius: "5px", overflow: "hidden", backgroundColor:"white"}}>{this.state.id}</div>
                    </Col>
                    <Col lg={5} >
                        <div>Product ID for reference. (Can not be changed)</div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="name" lg={3}>Product Name</Label>
                    <Col lg={3} >
                        <Input type="text" id="name" name="name" autoComplete="off" onChange={this.handleInputChange} value={this.state.name} placeholder="Product Name" />
                        {/* <FormFeedback>{errors.name}</FormFeedback> */}
                    </Col>
                    <Col lg={5} >
                        <div>Don't exceed more than 25 charecters (Including Space)</div>
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
                            <option value="">Sports Category</option>
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
                            <option value="">Product Category</option>
                            <OptionsProd prodCat={this.state.optsprodCat} />
                        </select>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="stock" lg={3}>Stock</Label>
                    <Col  lg={3} >
                        <Input type="number"  id="stock" name="stock" autoComplete="off" onChange={this.handleInputChange} value={this.state.stock} placeholder="Available Stock" />
                        {/* <FormFeedback>{errors.stock}</FormFeedback> */}
                    </Col>
                    <Col lg={5}>
                        <Stock stock={this.state.stock}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="CGST" lg={3}>CGST</Label>
                    <Col  lg={3} >
                        <Input type="number"  id="CGST" name="CGST" autoComplete="off" onChange={this.handleInputChange} value={this.state.CGST} placeholder="CGST" />
                        {/* <FormFeedback>{errors.CGST}</FormFeedback> */}
                    </Col>
                    <Col lg={5}>
                        <div>Enter Central Goods and Services Tax on the Product.</div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="SGST" lg={3}>SGST</Label>
                    <Col  lg={3} >
                        <Input type="number"  id="SGST" name="SGST" placeholder="SGST" onChange={this.handleInputChange} value={this.state.SGST} autoComplete="off" />
                        {/* <FormFeedback>{errors.SGST}</FormFeedback> */}
                    </Col>
                    <Col lg={5}>
                        <div>Enter the State Goods and Services Tax on Product.</div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="price" lg={3}>Price</Label>
                    <Col  lg={3} >
                        <Input type="number"  id="price" name="price" autoComplete="off" onChange={this.handleInputChange} value={this.state.price} placeholder="Price"/>
                        {/* <FormFeedback>{errors.price}</FormFeedback> */}
                    </Col>
                    <Col lg={5}>
                        <div>Enter the Price of The Product</div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="sizeAva" lg={3}>Size Available</Label>
                    <Col  lg={3} >
                        <select name="sizeAva" onChange={this.handleInputChange}>
                            <option value=""></option>
                            <option value={true}>Available</option>
                            <option value={false}>Not Available</option>
                        </select>
                    </Col>
                    <Col lg={5}>
                        <div><b>Available:</b> If product has sizes. <b>Unavailable:</b> If product does not have sizes</div>
                    </Col>
                </FormGroup>
                <Size sizeAva={this.state.sizeAva} handleInputChange={this.handleInputChange} UpdateSize={this.UpdateSize} size1={this.state.size1} size2={this.state.size2} size3={this.state.size3} size4={this.state.size4} size5={this.state.size5} size6={this.state.size6} size7={this.state.size7} size8={this.state.size8} size9={this.state.size9} />
                <FormGroup row>
                    <Label htmlFor="shortDescription" lg={3}>Short Description</Label>
                    <Col lg={5} >
                        <Input type="text" id="shortDescription" name="shortDescription" autoComplete="off" onChange={this.handleInputChange} value={this.state.shortDescription} placeholder="Short Description" />
                        {/* <FormFeedback>{errors.shortDescription}</FormFeedback> */}
                    </Col>
                    <Col lg={4}>
                        <div>Enter A Short Description</div>
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
                    <Col lg={12}>
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
    const [redirect, setRedirect] = useState(false) 

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
            .catch(error => {
                setRedirect(true)
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
                setProduct(true)
            })
            .catch(error => {
                setRedirect(true)
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
                        <h4 style={{textAlign: "center"}} className="mt-5">Quantity Sold: {product.unitsSold}</h4>
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

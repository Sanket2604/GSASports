import React, {useEffect, useState, Component} from 'react'
import axios from 'axios'
import { url } from './url'
import '../css/account.css'
import dp from '../assets/account/unknown.jfif'
import { Link, Redirect } from 'react-router-dom'
import Loader from './loader'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

class EditUser extends Component{

    constructor(props){
        super(props);
        this.state={
            firstname: this.props.user.firstname,
            lastname: this.props.user.lastname,
            username: this.props.user.username,
            email: this.props.user.email,
            country: this.props.user.country,
            phone: this.props.user.phone,
            address: this.props.user.billing[0].address,
            landmark: this.props.user.billing[0].landmark,
            city: this.props.user.billing[0].city,
            pincode: this.props.user.billing[0].pincode,
            state: this.props.user.billing[0].state
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.updateUserDetails = this.updateUserDetails.bind(this)
    }

    handleInputChange(event){
        const email_pattern = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        const numPattern = /^\d{10}$/
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        },()=>{
            if(this.state.phone!=="" && numPattern.test(this.state.phone) && this.state.country!==""){
                document.querySelector('.phone').classList.remove('error')
                document.querySelector('.L_phone').classList.remove('error')
                document.querySelector('.country').classList.remove('error')
                document.querySelector('.L_country').classList.remove('error')
            }
            else{
                document.querySelector('.phone').classList.add('error')
                document.querySelector('.L_phone').classList.add('error')
                document.querySelector('.country').classList.remove('error')
                document.querySelector('.L_country').classList.remove('error')
            }
    
            if(this.state.state!==""){
                document.querySelector('.state').classList.remove('error')
                document.querySelector('.L_state').classList.remove('error')
            }
            else{
                document.querySelector('.state').classList.add('error')
                document.querySelector('.L_state').classList.add('error')
            }
    
            if(this.state.firstname!=="" && this.state.firstname.length>=3){
                document.querySelector('.firstname').classList.remove('error')
                document.querySelector('.L_firstname').classList.remove('error')
            }
            else{
                document.querySelector('.firstname').classList.add('error')
                document.querySelector('.L_firstname').classList.add('error')
            }
    
            if(this.state.pincode!==""){
                document.querySelector('.pincode').classList.remove('error')
                document.querySelector('.L_pincode').classList.remove('error')
            }
            else{
                document.querySelector('.pincode').classList.add('error')
                document.querySelector('.L_pincode').classList.add('error')
            }
    
            if(this.state.city!==""){
                document.querySelector('.city').classList.remove('error')
                document.querySelector('.L_city').classList.remove('error')
            }
            else{
                document.querySelector('.city').classList.add('error')
                document.querySelector('.L_city').classList.add('error')
            }
    
            if(this.state.landmark!==""){
                document.querySelector('.landmark').classList.remove('error')
                document.querySelector('.L_landmark').classList.remove('error')
            }
            else{
                document.querySelector('.landmark').classList.add('error')
                document.querySelector('.L_landmark').classList.add('error')
            }

            if(this.state.email!=="" && email_pattern.test(this.state.email)){
                document.querySelector('.email').classList.remove('error')
                document.querySelector('.L_email').classList.remove('error')
            }
            else{
                document.querySelector('.email').classList.add('error')
                document.querySelector('.L_email').classList.add('error')
            }
    
            if(this.state.username!=="" && this.state.username.length>=4){
                document.querySelector('.username').classList.remove('error')
                document.querySelector('.L_username').classList.remove('error')
            }
            else{
                document.querySelector('.username').classList.add('error')
                document.querySelector('.L_username').classList.add('error')
            }
            if(this.state.lastname!==""){
                document.querySelector('.lastname').classList.remove('error')
                document.querySelector('.L_lastname').classList.remove('error')
            }
            else{
                document.querySelector('.lastname').classList.add('error')
                document.querySelector('.L_lastname').classList.add('error')
            }
        })
    }

    updateUserDetails(){
        const token=localStorage.getItem('token')
        console.log(this.state)
        axios
        .put(url+'/user/updateUser',{
            "firstname": this.state.firstname,
            "lastname": this.state.lastname,
            "username": this.state.username,
            "email": this.state.email,
            "country": this.state.country,
            "phone": this.state.phone,
            "address": this.state.address,
            "landmark": this.state.landmark,
            "city": this.state.city,
            "pincode": this.state.pincode,
            "state": this.state.state
        },{
            headers: {Authorization: `Bearer ${token}`}
        })
        .then(()=>{
            alert("User Details Updated")
            window.location.reload()
        })
        .catch((err)=>{
            alert(err)
        })
    }

    render(){
        return(
            <Modal isOpen={this.props.modal} toggle={this.props.toggleModal}>
                <ModalHeader>Add New Shipping Address <i class="fa fa-times close fa-lg" onClick={this.props.toggleModal}></i></ModalHeader>
                <ModalBody>
                    <div className="form">
                        <input style={{color:'black'}} className="username" type="text" name="username" autoComplete="off" onChange={this.handleInputChange} value={this.state.username} required />
                        <label htmlFor="username" className="label-name L_username">
                            <span className="content-name">Username</span>
                        </label>                           
                    </div>
                    <div className="form">
                        <input style={{color:'black'}} className="firstname" type="text" name="firstname" autoComplete="off" onChange={this.handleInputChange} value={this.state.firstname} required />
                        <label htmlFor="firstname" className="label-name L_firstname">
                            <span className="content-name">Firstname</span>
                        </label>                           
                    </div>
                    <div className="form">
                        <input style={{color:'black'}} className="lastname" type="text" name="lastname" autoComplete="off" onChange={this.handleInputChange} value={this.state.lastname} required />
                        <label htmlFor="lastname" className="label-name L_lastname">
                            <span className="content-name">Lastname</span>
                        </label>                           
                    </div>
                    <div className="form">
                        <input style={{color:'black'}} className="country" type="number" name="country" autoComplete="off" onChange={this.handleInputChange} value={this.state.country} required />
                        <label htmlFor="country" className="label-name L_country">
                            <span className="content-name">Country Code</span>
                        </label>                           
                    </div>
                    <div className="form">
                        <input style={{color:'black'}} className="phone" type="number" name="phone" autoComplete="off" onChange={this.handleInputChange} value={this.state.phone} required />
                        <label htmlFor="phone" className="label-name L_phone">
                            <span className="content-name">Phone Number</span>
                        </label>                           
                    </div>
                    <div className="form">
                        <input style={{color:'black'}} className="email" type="text" name="email" autoComplete="off" onChange={this.handleInputChange} value={this.state.email} required />
                        <label htmlFor="email" className="label-name L_email">
                            <span className="content-name">Email</span>
                        </label>                           
                    </div>
                    <div className="address">
                        <h5 style={{margin: "20px 0"}}>Billing Address</h5>
                        <textarea className="t" name="address" placeholder="Address" className="address" value={this.state.address} onChange={this.handleInputChange} required></textarea>
                    </div>
                    <div className="form">
                        <input style={{color:'black'}} className="landmark" type="text" name="landmark" autoComplete="off" onChange={this.handleInputChange} value={this.state.landmark} required />
                        <label htmlFor="landmark" className="label-name L_landmark">
                            <span className="content-name">Landmark</span>
                        </label>                           
                    </div>
                    <div className="form">
                        <input style={{color:'black'}} className="city" type="text" name="city" autoComplete="off" onChange={this.handleInputChange} value={this.state.city} required />
                        <label htmlFor="city" className="label-name L_city">
                            <span className="content-name">City</span>
                        </label>                           
                    </div>
                    <div className="form">
                        <input style={{color:'black'}} className="pincode" type="text" name="pincode" autoComplete="off" onChange={this.handleInputChange} value={this.state.pincode} required />
                        <label htmlFor="pincode" className="label-name L_pincode">
                            <span className="content-name">Pincode</span>
                        </label>                           
                    </div>
                    <div className="form">
                        <input style={{color:'black'}} className="state" type="text" name="state" autoComplete="off" onChange={this.handleInputChange} value={this.state.state} required />
                        <label htmlFor="state" className="label-name L_state">
                            <span className="content-name">State</span>
                        </label>                           
                    </div>
                    <div className="submit" onClick={this.updateUserDetails}>Submit</div>
                </ModalBody>
            </Modal>
        )
    }
}

class AddShip extends Component{

    constructor(props){
        super(props);
        this.state={
            shipId: this.props.shipAdd.shipId,
            firstname: this.props.shipAdd.firstname,
            country: this.props.shipAdd.country,
            phone: this.props.shipAdd.phone,
            address: this.props.shipAdd.address,
            landmark: this.props.shipAdd.landmark,
            city: this.props.shipAdd.city,
            pincode: this.props.shipAdd.pincode,
            state: this.props.shipAdd.state,
            update: this.props.update
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.addShippingDetails = this.addShippingDetails.bind(this)
    }

    handleInputChange(event){
        const numPattern = /^\d{10}$/
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        },()=>{
            if(this.state.phone!=="" && numPattern.test(this.state.phone) && this.state.country!==""){
                document.querySelector('.phone').classList.remove('error')
                document.querySelector('.L_phone').classList.remove('error')
                document.querySelector('.country').classList.remove('error')
                document.querySelector('.L_country').classList.remove('error')
            }
            else{
                document.querySelector('.phone').classList.add('error')
                document.querySelector('.L_phone').classList.add('error')
                document.querySelector('.country').classList.remove('error')
                document.querySelector('.L_country').classList.remove('error')
            }
    
            if(this.state.state!==""){
                document.querySelector('.state').classList.remove('error')
                document.querySelector('.L_state').classList.remove('error')
            }
            else{
                document.querySelector('.state').classList.add('error')
                document.querySelector('.L_state').classList.add('error')
            }
    
            if(this.state.firstname!=="" && this.state.firstname.length>=3){
                document.querySelector('.firstname').classList.remove('error')
                document.querySelector('.L_firstname').classList.remove('error')
            }
            else{
                document.querySelector('.firstname').classList.add('error')
                document.querySelector('.L_firstname').classList.add('error')
            }
    
            if(this.state.pincode!==""){
                document.querySelector('.pincode').classList.remove('error')
                document.querySelector('.L_pincode').classList.remove('error')
            }
            else{
                document.querySelector('.pincode').classList.add('error')
                document.querySelector('.L_pincode').classList.add('error')
            }
    
            if(this.state.city!==""){
                document.querySelector('.city').classList.remove('error')
                document.querySelector('.L_city').classList.remove('error')
            }
            else{
                document.querySelector('.city').classList.add('error')
                document.querySelector('.L_city').classList.add('error')
            }
    
            if(this.state.landmark!==""){
                document.querySelector('.landmark').classList.remove('error')
                document.querySelector('.L_landmark').classList.remove('error')
            }
            else{
                document.querySelector('.landmark').classList.add('error')
                document.querySelector('.L_landmark').classList.add('error')
            }
        })
    }

    addShippingDetails(){
        const token=localStorage.getItem('token')
        if(this.state.update){
            axios
            .post(url+'/user/shipping/'+this.state.shipId,{
                "name": this.state.firstname,
                "country": this.state.country,
                "phone": this.state.phone,
                "address": this.state.address,
                "landmark": this.state.landmark,
                "city": this.state.city,
                "pincode": this.state.pincode,
                "state":this.state.state
            },{
                headers: {Authorization: `Bearer ${token}`}
            })
            .then(()=>{
                alert("Shipping Address Added")
                window.location.reload()
            })
            .catch((err)=>{
                alert(err)
            })
        }
        else{
            axios
            .post(url+'/user/shipping',{
                "name": this.state.firstname,
                "country": this.state.country,
                "phone": this.state.phone,
                "address": this.state.address,
                "landmark": this.state.landmark,
                "city": this.state.city,
                "pincode": this.state.pincode,
                "state":this.state.state
            },{
                headers: {Authorization: `Bearer ${token}`}
            })
            .then(()=>{
                alert("Shipping Address Added")
                window.location.reload()
            })
            .catch((err)=>{
                alert(err)
            })
        }
    }

    render(){
        return(
            <Modal isOpen={this.props.modal} toggle={this.props.toggleModal}>
                <ModalHeader>Add New Shipping Address <i class="fa fa-times close fa-lg" onClick={this.props.toggleModal}></i></ModalHeader>
                <ModalBody>
                    <div className="form">
                        <input style={{color:'black'}} className="firstname" type="text" name="firstname" autoComplete="off" onChange={this.handleInputChange} value={this.state.firstname} required />
                        <label htmlFor="firstname" className="label-name L_firstname">
                            <span className="content-name">Name</span>
                        </label>                           
                    </div>
                    <div className="form">
                        <input style={{color:'black'}} className="country" type="number" name="country" autoComplete="off" onChange={this.handleInputChange} value={this.state.country} required />
                        <label htmlFor="country" className="label-name L_country">
                            <span className="content-name">Country Code</span>
                        </label>                           
                    </div>
                    <div className="form">
                        <input style={{color:'black'}} className="phone" type="number" name="phone" autoComplete="off" onChange={this.handleInputChange} value={this.state.phone} required />
                        <label htmlFor="phone" className="label-name L_phone">
                            <span className="content-name">Phone Number</span>
                        </label>                           
                    </div>
                    <div className="address">
                        <h5 style={{margin: "20px 0"}}>Billing Address</h5>
                        <textarea className="t" name="address" placeholder="Address" className="address" value={this.state.address} onChange={this.handleInputChange} required></textarea>
                    </div>
                    <div className="form">
                        <input style={{color:'black'}} className="landmark" type="text" name="landmark" autoComplete="off" onChange={this.handleInputChange} value={this.state.landmark} required />
                        <label htmlFor="landmark" className="label-name L_landmark">
                            <span className="content-name">Landmark</span>
                        </label>                           
                    </div>
                    <div className="form">
                        <input style={{color:'black'}} className="city" type="text" name="city" autoComplete="off" onChange={this.handleInputChange} value={this.state.city} required />
                        <label htmlFor="city" className="label-name L_city">
                            <span className="content-name">City</span>
                        </label>                           
                    </div>
                    <div className="form">
                        <input style={{color:'black'}} className="pincode" type="text" name="pincode" autoComplete="off" onChange={this.handleInputChange} value={this.state.pincode} required />
                        <label htmlFor="pincode" className="label-name L_pincode">
                            <span className="content-name">Pincode</span>
                        </label>                           
                    </div>
                    <div className="form">
                        <input style={{color:'black'}} className="state" type="text" name="state" autoComplete="off" onChange={this.handleInputChange} value={this.state.state} required />
                        <label htmlFor="state" className="label-name L_state">
                            <span className="content-name">State</span>
                        </label>                           
                    </div>
                    <div className="submit" onClick={this.updateUserDetails}>Submit</div>
                </ModalBody>
            </Modal>
        )
    }
}

function Shipping(props){

    function deleteShippingAdd(id){
        const token = localStorage.getItem('token')
        axios
        .delete(url+'/user/shipping/'+id,{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res)=>{
            alert("Shipping Address Deleted")
            window.location.reload()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    function editShippingAdd(shipAdd){
        props.updateShipAdd(shipAdd)
    }

    if(props.shipping.length!==0){
        return props.shipping.map(shipAdd=>
            <div className="shipping_box" id={shipAdd._id}>
                <div><span>Name:</span> {shipAdd.name}</div>
                <div><span>Phone:</span> +{shipAdd.country} - {shipAdd.phone}</div>
                <div className="address">
                    <span>Address:</span>
                    <div>{shipAdd.address}, {shipAdd.landmark}, {shipAdd.city} - {shipAdd.pincode}, {shipAdd.state}</div>
                </div>
                <i class="fa fa-trash" onClick={()=>deleteShippingAdd(shipAdd._id)}></i>
                <i class="fa fa-edit" onClick={()=>editShippingAdd(shipAdd)}></i>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

export default function Account() {


    const [response, setResponse] = useState(false)
    const [show, setShow] = useState(false)
    const [user, setUser] = useState()
    const [edituser, setEditUser] = useState(false)
    const toggleModalEditUser = () => setEditUser(!edituser)
    const [addShip, setAddShip] = useState(false)



    const [update, setUpdate] = useState(false)
    const [shipAddress, setShipAddress] = useState({})

    function updateShipAdd(shipAdd){
        console.log(shipAdd)
        setUpdate(true)
        setShipAddress(shipAdd)
        toggleModalAddShip()
    }

    function toggleModalAddShip(){ setAddShip(!addShip) }

    useEffect(() => {
        document.title = "GSA Sports | Your Account"
        window.scrollTo(0, 0)
        const token = localStorage.getItem('token')
        axios
        .get(url+'/user/getuser',{
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((res)=>{
            if(res.status===200)
                setShow(true)
                
            setUser(res.data)
            setResponse(true)
        })
        .catch((err)=>{
            setResponse(true)
            setShow(false)
            console.log(err)
        })
    }, []);

    if(response){
        if(show){
            return (                
                <div className="account_cont container">
                    <EditUser modal={edituser} toggleModal={toggleModalEditUser} user={user} />
                    <AddShip modal={addShip} toggleModal={toggleModalAddShip} shipAdd={shipAddress} update={update} />
                    <div className="heading">Welcome {user.username}</div>
                    <div className="row row1">
                        <div className="col-12">
                            <div className="img_cont">
                                <img src={dp} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row row2">
                        <div className="col-12 col-md-6 column column1">
                            <div className="heading">Your Details: <i class="fa fa-edit" onClick={toggleModalEditUser}><span>Edit Your Details</span></i></div>
                            <div className="sec name"><span>Name:</span>{user.firstname} {user.lastname}</div>
                            <div className="sec phn"><span>Phone Number:</span> + {user.country} - {user.phone}</div>
                            <div className="sec email"><span>Email Id:</span> {user.email}</div>
                            <div className="sec bill_add">
                                <span>Billing Address:<br/></span> 
                                {user.billing[0].address}, {user.billing[0].landmark}, {user.billing[0].city} - {user.billing[0].pincode}, {user.billing[0].state}
                            </div>
                            <Link to="/your_orders"><div className="order_btn">View Previous Orders</div></Link>
                        </div>
                        <div className="col-12 col-md-6 column column2">
                            <div className="sec ship_add">
                                <span>Your Shipping Addresses:<br/></span> 
                                <Shipping shipping={user.shipping} updateShipAdd={updateShipAdd} />
                                <div className="add_ship" onClick={toggleModalAddShip}>
                                    <i class="fa fa-plus-square"></i>
                                    Add A Shipping Address
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return <Redirect to="/login" />
        }
    }
    else{
        return(
            <Loader/>
        )
    }
}

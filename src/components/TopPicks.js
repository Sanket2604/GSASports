import React, {useState, useEffect} from 'react'
import { url } from './url';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';  
import ItemCard from './itemCard';
import '../css/toppicks.css'
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

function TopPicksCarousel({products}){
    
    const [item, setItem] = useState(4)
    const [topProd, setTopProd] = useState([])

    function compare( a, b ) {
        if ( a.unitsSold < b.unitsSold ){
            return 1;
        }
        if ( a.unitsSold > b.unitsSold ){
            return -1;
        }
        return 0;
    }

    useEffect(()=>{
        if(products.length!==0)
            setTopProd(products.sort(compare))
        let screen = window.innerWidth
        if(screen>1400){
            setItem(4)  
        }
        if(screen<=1400){
            setItem(3)  
        }
        if(screen<=1030){
            setItem(2)  
        }
        if(screen<=600){
            setItem(1)  
        }
    }, [])

    if(topProd.length!==0){
        return(
            <OwlCarousel className='owl-theme' loop items={item} nav autoPlay>
                <div class='item'>
                    <ItemCard sprod={topProd[0]}/>
                </div>
                <div class='item'>
                    <ItemCard sprod={topProd[1]}/>
                </div>
                <div class='item'>
                    <ItemCard sprod={topProd[2]}/>
                </div>
                <div class='item'>
                    <ItemCard sprod={topProd[3]}/>
                </div>
                <div class='item'>
                    <ItemCard sprod={topProd[4]}/>
                </div>
                <div class='item'>
                    <ItemCard sprod={topProd[0]}/>
                </div>
                <div class='item'>
                    <ItemCard sprod={topProd[1]}/>
                </div>
                <div class='item'>
                    <ItemCard sprod={topProd[2]}/>
                </div>
                <div class='item'>
                    <ItemCard sprod={topProd[3]}/>
                </div>
                <div class='item'>
                    <ItemCard sprod={topProd[4]}/>
                </div>
            </OwlCarousel>
        )
    }
    else{
        return(
            <div className="circle_Loader">
                <div className="circ circ1">
                    <div className="circ circ2">
                        <div className="circ circ3"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default function TopPicks() {
    
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const token = localStorage.getItem('token');
        axios
        .get(url+'/products')
        .then((response) =>{
            setProducts(response.data)
        })
        .catch(error => {
            console.log("Failed To Get Products")
        })
        
    }, [])

    if(products.length!==0){
        return (
            <div className="top_pick">
                <div className="heading">Top Picks</div>
                <TopPicksCarousel products={products} />
            </div>
        )
    }
    else{
        return(
            <div className="circle_Loader">
                <div className="circ circ1">
                    <div className="circ circ2">
                        <div className="circ circ3"></div>
                    </div>
                </div>
            </div>    
        )
    }
}

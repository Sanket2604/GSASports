import React, {useState, useEffect} from 'react'
import OwlCarousel from 'react-owl-carousel';  
import ItemCard from './itemCard';
import '../css/toppicks.css'
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function TopPicks() {
    
    const [item, setItem] = useState(4)

    useEffect(()=>{
        let screen = window.innerWidth
        if(screen>1400){
            setItem(4)  
        }
        if(screen<=1400){
            setItem(3)  
            console.log(item)
        }
        if(screen<=1030){
            setItem(2)  
            console.log(item)
        }
        if(screen<=600){
            setItem(1)  
            console.log(item)
        }
    }, [])

    return (
        <div className="top_pick">
            <div className="heading">Top Picks</div>
            <OwlCarousel className='owl-theme' loop items={item} nav autoPlay>
                <div class='i'>
                    <ItemCard/>
                </div>
                <div class='item'>
                    <ItemCard/>
                </div>
                <div class='item'>
                    <ItemCard/>
                </div>
                <div class='item'>
                    <ItemCard/>
                </div>
                <div class='item'>
                    <ItemCard/>
                </div>
                <div class='item'>
                    <ItemCard/>
                </div>
                <div class='item'>
                    <ItemCard/>
                </div>
                <div class='item'>
                    <ItemCard/>
                </div>
                <div class='item'>
                    <ItemCard/>
                </div>
                <div class='item'>
                    <ItemCard/>
                </div>
            </OwlCarousel>
        </div>
    )
}

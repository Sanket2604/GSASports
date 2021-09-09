import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import ItemCard from './itemCard';
import '../css/toppicks.css'
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function TopPicks() {
    return (
        <div className="top_pick">
            <div className="heading">Top Picks</div>
            <OwlCarousel className='owl-theme' loop items={4} nav autoPlay>
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

import React from 'react'
import '../css/loader.css'

export default function Loader() {
    return (
        <div className="loader_cont">
            <div class="loader">
                <div class="loader__bar"></div>
                <div class="loader__bar"></div>
                <div class="loader__bar"></div>
                <div class="loader__bar"></div>
                <div class="loader__bar"></div>
                <div class="loader__ball"></div>
            </div>
        </div>
    )
}

import React from "react"
import {Carousel} from "react-responsive-carousel"
import WreathCountdown from "./wreath"
import BeachBlitzCarousel from "./beachblitz"


var HomepageCarousel = () => {
        return (
            <div style={{height:"100%", width:"100%"}}>
            <Carousel showThumbs={false}>
                <div>
                    <WreathCountdown></WreathCountdown>
                </div>
                <div><BeachBlitzCarousel></BeachBlitzCarousel></div>

            </Carousel></div>
        );
    }
;

export default HomepageCarousel
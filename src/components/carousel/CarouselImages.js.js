import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import classes from './CarouselImages.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css";
import { GoProject } from 'react-icons/go'
import { FaArrowCircleDown } from 'react-icons/fa'
import Hello from '../images/Hello.jpg'
import ColumbusAtNight from '../images/ColumbusAtNight.jpg'

class CarouselImages extends Component {
    render() {
        return (
            <div className={classes.carousel_container} id="start">
                <Carousel className={classes.carousel} dynamicHeight infiniteLoop={true} interval={6000} useKeyboardArrows={true} transitionTime={1700} emulateTouch showArrows={false} autoPlay showStatus={false} showThumbs={false} >
                    <div className={classes.image_container} >
                        <img className={classes.image} src={Hello} alt="myImage" />
                        <div className={classes.h1}>
                            <h1 >I'm Ryan</h1>
                            <a href="https://www.linkedin.com/in/ryank1979/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAACQSEdYBPSh8pqvDpIEpLNd_rKt0L0-g-_8,1556631220818)/" rel="opener noreferrer" target="_blank">VIEW CV <FaArrowCircleDown /></a>
                        </div>
                    </div>
                    <div className={classes.image_container}>
                        <img className={classes.image} src={ColumbusAtNight} alt="myImage" />
                        <div className={classes.h2}>
                            <h1> Creating things is</h1>
                            <h1>LIFE!!</h1>
                            <a href="https://github.com/RyanK1979" rel="opener noreferrer" target="_blank">VIEW PROJECTS   <GoProject /></a>
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    }
}
export default CarouselImages
import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is <b>Ryan Kuhn</b> and I am currently working as Software Developer Engineer at <a target="_blank" href="https://www.jpmorganchase.com/"><b>J.P. Morgan Chase</b></a>. I originally worked as a locomotive engineer, I then transitioned to tech through a bootcamp called We Can Code It based out of Columbus, Ohio. This was my first love, and I really enjoy the learning new technologies!  </p>
                        <p className={classes.br}>I love learning the newest tech, which is always a challenge when you have a three year old running around the house!
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;
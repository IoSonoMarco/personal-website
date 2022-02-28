import { Fragment } from "react";

import classes from "./Banner.module.css";

import pythonLogo from "../../images/python.png";
import htmlLogo from "../../images/html.png";
import rLogo from "../../images/r.png";
import reactLogo from "../../images/physics.png";
import unityLogo from "../../images/unity.png";
import mlLogo from "../../images/diagram.png";
import brainLogo from "../../images/artificial-intelligence.png";
import ubuntuLogo from "../../images/ubuntu.png";
import csLogo from "../../images/c-sharp.png";
import jsLogo from "../../images/js.png";
import gitLogo from "../../images/github.png"

const Banner = () => {
    return (
        <Fragment>
            <div className={classes.container}>
                <div className={classes.background} />
            </div>
            <div className={classes.presentation}>
                <h1> Hi. I'm Marco D'Alessandro </h1>
                <p>
                    a <strong> Scientist </strong> and <strong> Software Developer </strong>. I have a Ph.D. in Statistical and Computational Cognitive Modeling,
                    a background in Neuroscience, and strong expertise in Bayesian Modeling and Machine
                    Learning. I love Frontend engineering, Backend Web development and coding mobile games.
                </p>
                <div className={classes.image__container}>
                    <img src={pythonLogo} alt="" />
                    <img src={rLogo} alt="" />
                    <img src={csLogo} alt="" />
                    <img src={gitLogo} alt="" />
                    <img src={reactLogo} alt="" />
                    <img src={htmlLogo} alt="" />
                    <img src={jsLogo} alt="" />
                    <img src={unityLogo} alt="" />
                    <img src={mlLogo} alt="" />
                    <img src={brainLogo} alt="" />
                    <img src={ubuntuLogo} alt="" />
                </div>
            </div>
        </Fragment>
    );
}

export default Banner;
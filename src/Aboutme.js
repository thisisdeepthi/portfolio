import React from 'react';
import './Aboutme.css';
import about_img from './images/D vector.png';

function Aboutme() {
    return (
        <div className = "about component__space" id='Aboutme'>
            <div className = "container">
                <div className = "row">
                    <div className =  "col__2">
                        <img src={about_img} alt="" className="about__img"/>
                    </div>
                    <div className = "col__2">
                        <h1 className="about_heading align__items__center">About Me</h1>
                        <div className = "about_content">
                            <p>Hello everyone!<br></br>
                            <br></br>
                            I am Deepthishree, a full stack web developer from India.
                            I am currently pursuing BE Computer Science and Engineering in PSG College of Technology, Coimbatore. 
                            I am an ambivert. I love to motivate myself by learning new things. I am interested in Front-end designing. 
                            In my leisure time, I love to dance, listen to music, watch series and movies.</p>

                        
                        <div className="about__button">
                            <a href="https://drive.google.com/file/d/1gWdmWzzkZJ0CWAW6Lg5UgG6nJlD67hOe/view?usp=sharing"><button className="resume">Look at my resume</button></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme;

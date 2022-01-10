import React from 'react';
import './Home.css';
import logo from './images/D vector.png'; 
// import aboutme from './src/Aboutme.js';

function Home() {

    //fixed header
    window.addEventListener("scroll",function(){
        const header = document.querySelector(".header");
        header.classList.toggle("active",window.scrollY > 0)
    });
    return (
        <div className = "home" id='Home'>
            <div className = "home__bg">
            <div className = "header d__flex align__items__center pxy__30">
                    <div className = "logo">
                        <img src = {logo} width="35px" height="35px" alt=""/>
                    </div>
                    <div className = "navigation">
                        <ul className = "navbar d__flex pxy__30">
                            <a href="#Home"><li className="nav__items mx__15">Home</li></a>
                            <a href="#Aboutme"><li className="nav__items mx__15">About Me</li></a>
                            <a href="#Skills"><li className="nav__items mx__15">Skills</li></a>
                            <a href="#Projects"><li className="nav__items mx__15">Projects</li></a>
                            <a href="#Contact"><li className="nav__items mx__15">Contact</li></a>
                        </ul>
                    </div>
                </div>
                {/*Content*/}
                <div className="container">
                    <div className="home__content">
                        <div className="home_text">
                            <h1 className="content">
                                WELCOME TO MY PORTFOLIO
                            </h1>
                            <h2 className="content pz__15">
                                Hey, This is Deepthishree
                            </h2>
                            <h3 className="content pz__15">
                                A Full Stack Web Developer
                            </h3>
                            <h4 className="content">
                                from India
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

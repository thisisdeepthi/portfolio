import React from 'react';
import './projects.css';
import logo1 from './images/benefica logo.png';
import logo2 from './images/odyssey.jpg';
import logo3 from './images/plethora.jpg';
import logo4 from './images/Grado.png';

// import ReactDOM from 'react-dom';

function projects() {
    return (
        <div className='projects component__space' id='Projects'>
            <div className='heading'>
                <h1 className='heading'>My Projects</h1>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col__3'>
                        <div className='proj_box'>
                            <div className='icon'>
                                <img className="logo" src={logo1} alt='' width="100px" height="100px" />
                            </div>
                            <div className='proj_content'>
                                
                                <h1 className='benefica'>BENEFICA</h1>
                                <h2 className='shorthead'>An Organ donation Management System</h2><br></br>
                                <p className='content'>
                                An organ donation management system
                                where users can register themselves as a 
                                living donor and can also search for organs
                                according to the blood group.<br></br>
                                    <br></br><b>Tools</b> : XAMPP (server), MySQL
                                    <br></br><b>Languages</b> : HTML, CSS, Javascript, PHP

                                    <br></br><a href="https://github.com/thisisdeepthi/Benefica"><button className="sourcecode">Source Code</button></a>

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col__3'>
                        <div className='proj_box'>
                            <div className='icon'>
                                <img className="logo" src={logo2} alt='' width="100px" height="100px" />
                            </div>
                            <div className='proj_content'>
                                
                                <h1 className='odyssey'>ODYSSEY</h1>
                                <h2 className='shorthead'>A Diet and Fitness Tracker app</h2><br></br>
                                <p className='content'>
                                Diet and activities can be suggested 
                                for those who want to gain or lose weight. Suggestions are given based on the 
                                user's profile. At the end of the day, an overall report is constructed to see whether 
                                the user has met his/her goals or not.<br></br>
                                <br></br><b>Tools</b> : Windows (.NET), MySQL 
                                <br></br><b>Language</b> : C#

                                <br></br><a href="https://github.com/thisisdeepthi/FitnessTracker2.0"><button className="sourcecode">Source Code</button></a>

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col__3'>
                        <div className='proj_box'>
                            <div className='icon'>
                                <img className="logo" src={logo3} alt='' width="100px" height="100px" />
                            </div>
                            <div className='proj_content'>
                                
                                <h1 className='plethora'>PLETHORA</h1>
                                <h2 className='shorthead'>An OCR app</h2><br></br>
                                <p className='content'>
                                An android app built by using Python and 
                                kivy framework. The functions of this app 
                                are
                                <br></br>
                                <br></br><li>Image to text conversion</li>
                                <li>Text analyze and format</li>
                                <li>Speech to text conversion and viceversa.</li>
                                <br></br><b>Language</b> : Python

                                <br></br><a href="https://github.com/thisisdeepthi/SPD-Plethora"><button className="sourcecode">Source Code</button></a>

                                </p>
                            </div>
                        </div>
                    </div>

                    
                </div>

                <div className='row'>
                <div className='col__3'>
                        <div className='proj_box'>
                            <div className='icon'>
                                <img className="logo" src={logo4} alt='' width="100px" height="100px" />
                            </div>
                            <div className='proj_content'>
                                
                                <h1 className='grado'>GRADO</h1>
                                <h2 className='shorthead'>A CGPA Calculator</h2><br></br>
                                <p className='content'>
                                An android app built using JAVA. It is useful for Choice Based Credit Systems (CBCS) in colleges. SGPA and CGPA can be calculated using this app.<br></br>
                                    <br></br><b>Tools</b> : Android Studio
                                    <br></br><b>Language</b> : Java

                                    <br></br><a href="https://github.com/thisisdeepthi/CGPA-Calculator"><button className="sourcecode">Source Code</button></a>

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col__3'>
                        <div className='proj_box'>
                            {/* <div className='icon'>
                                <img className="logo" src={logo5} alt='' width="100px" height="100px" />
                            </div> */}
                            <div className='proj_content'>
                                
                                <h1 className='sena'>ANALYSE TWITTER HASHTAGS</h1><br></br>
                                {/* <h2 className='shorthead'>Social Network Visualisation and Analysis</h2><br></br> */}
                                <p className='content'>
                                IPL Auction 2021 tweets were scrapped using TWINT tool. 
                                Hashtag and mention counts were visualised as Wordcloud and barchart. 
                                Louvain algorithm was applied to see the grouping of hashtags.<br></br>
                                    <br></br><b>Tools</b> : Twint, Wordcloud, Networkx
                                    <br></br><b>Language</b> : Python

                                    <br></br><a href="https://github.com/thisisdeepthi/Visualize-Twitter-Hashtags"><button className="sourcecode">Source Code</button></a>

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col__3'>
                        <div className='proj_box'>
                            {/* <div className='icon'>
                                <img className="logo" src={logo1} alt='' width="100px" height="100px" />
                            </div> */}
                            <div className='proj_content'>
                                
                                <h1 className='ml'>WEED DETECTION & SEGMENTATION OF SUGARBEET CROPS</h1><br></br>
                                {/* <h2 className='shorthead'>An Organ donation Management System</h2><br></br> */}
                                <p className='content'>
                                A Machine Learning and computer vision project for locating where exactly the weeds 
                                are present and segmenting the weeds.<br></br>
                                    <br></br><b>Tools</b> : Tensorflow <br></br>(UNET Architecture)
                                    <br></br><b>Language</b> : Python

                                    <br></br><a href="https://github.com/thisisdeepthi/Weed_classification_ML"><button className="sourcecode">Source Code</button></a>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default projects;

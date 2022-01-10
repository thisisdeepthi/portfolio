import React from 'react';
import './skills.css';
// import {Line} from 'rc-progress';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

function skills() {
    return (
        <div className = "skills component__space" id='Skills'>
            <div className ="heading">
                <h1 className = "heading">My Skills</h1>

                {/* <div className="skill"> */}
                    <div className='padding_skills'>
                        {/* <Line percent="80" strokeWidth="2" strokeColor="#2db7f5"/> */}
                        {/* <Progress percent={80} status="success"/> */}
                        <h4>HTML</h4>
                        <Progress percent={75}/>
                        <h4>CSS</h4>
                        <Progress percent={80}/>
                        <h4>JS</h4>
                        <Progress percent={60}/>
                        <h4>React</h4>
                        <Progress percent={65}/>
                        <h4>JAVA</h4>
                        <Progress percent={70}/>
                        <h4>Python</h4>
                        <Progress percent={60}/>
                        <h4>C++</h4>
                        <Progress percent={65}/>
                        <h4>PHP</h4>
                        <Progress percent={40}/>
                        <h4>Jquery</h4>
                        <Progress percent={30}/>
                    </div>
                {/* </div> */}
            </div>          
        </div>
    )
}

export default skills;

import React from 'react';
import './Contact.css';
import github from './images/github.png';
import insta from './images/instagram.png';
import linkedin from './images/linkedin.png';

function Contact() {
    return (
        <div className='contact' id='Contact'>
            <div className='footer'>
                <ul id='contact'>
                    <li><a href='https://github.com/thisisdeepthi'>
                        <img className='sociallogo' src={github} alt='' width='45px' height='45px'/>
                    </a>
                    </li>

                    <li><a href='https://www.instagram.com/pandaa_1423/'>
                        <img className='sociallogo' src={insta} alt='' width='45px' height='45px'/>
                    </a>
                    </li>

                    <li><a href='https://www.linkedin.com/in/thisisdeepthi/'>
                        <img className='sociallogo' src={linkedin} alt='' width='45px' height='45px'/>
                    </a>
                    </li>
                </ul>
            </div>
            <div className='footer-down'>
                <span id='copyright'>&copy; Copyright {new Date().getFullYear()} - Deepthishree
                </span>
            </div>

        </div>
    )
}

export default Contact;

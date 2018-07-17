import React from 'react';
import '../Landing.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'

class Landing extends React.Component {
// TODO: Create img carousel and more styling

    render() {
        return (
            <div className="container">
                <div className="nav">
                    <ul className="buttons-header">
                    
                        <li><Button className="signUp" color="primary"><Link to="/SignUp">Sign Up</Link></Button></li>
                    
                        <li><Button className="signIn" color="primary">Sign In</Button></li>
                    </ul>                  
                </div>
                <div className="landing-img">
                    <img src = {require('../assets/imgLanding.jpg')} alt="placeholder" />
                </div>
                <div className="landing-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.                       
                    </p>
                    <div>
                    <Link to='/Schedule'><Button className="scheduleButton" color="primary"> Schedule Now </Button></Link>
                    </div>
                </div>

            </div>
        );
    }
}

export default Landing;

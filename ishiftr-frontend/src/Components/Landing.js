import React from 'react';
import { Link } from 'react-router-dom'
import CoverFlow from 'coverflow-react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../css/Landing.css';

let url;

class Landing extends React.Component {

    checkLogin = () => {
        let id = localStorage.getItem('id');
        if (id){
            return url = '/admin-dashboard'
        } else {
           return url = '/Signup'
        }       
    }

    render() {

        // const imagesArr = [
        //     require('../assets/team.jpg'),
        //     require('../assets/request.jpg'),
        //     require('../assets/calendar.jpg'),            
        //     require('../assets/powerup.jpg'),
        //     require('../assets/pic.jpg'),
        //     require('../assets/powerup.jpg'),
        //     require('../assets/pic.jpg'),
        // ];

        // const labelsArr = [
        //     'Simplify Your Employee Schedules',
        //     'Advanced Scheduling Optimization',
        //     'Up-to-date Schedule Viewings',
        //     'Accessible From Anywhere',
        //     'Value Employees Productivity',
        //     'Accessible From Anywhere',
        //     'Value Employees Productivity',
        // ];

        return (
            
            <div className="background">
                <div className="background2x">
                <div className="nav p-2">
                <div className="col justify-content-left">
                <img src={require('../assets/iShiftr3_50.png')} />
                </div>                
                    <ul className="buttons-header">
                        <Link to="/SignUp"><Button className="button-registration ctaBtn">Sign Up</Button></Link>
                        <Link to="/SignIn"><Button className="button-registration">Sign In</Button></Link>
                    </ul>                  
                </div>                
                {/* <div className="landing-img">
                                  
                    <CoverFlow
                        labelsArr={labelsArr}
                        width={1366} height={380} 
                        itemRatio="6:5" background='white' 
                        imagesArr={imagesArr}
                        />
                </div> */}
                <div className="landing-text px-5">
                    <h1 className="mb-5 Intro">SCHEDULING MADE EASY</h1>
                    <p className="blurb">
                    iShiftr gives you the flexibility of creating schedules for your employees in the most efficient way. 
                    We adapt to your company’s needs by automating the way you manage employee hours and sudden changes, 
                    such as absences and requested time-off, all with ease. What are you waiting for?                                         
                    </p>
                    <p className="blurb CTA">Start Scheduling with iShiftr today!</p>
                    <div>
                        <Link to={this.checkLogin()}><Button className="scheduleButton "> Schedule Now </Button></Link>
                    </div>
                </div>
                <div className="halfBackground">
                    <h1 className="mb-5 col halfIntro">Services We Offer:</h1>
                        <p className="halfblurb">Check out the following services below</p>                        
                <div className="services">
                    <p className="serviceOne">Lorem Ipsum is simply dummy text of the <br/> printing and typesetting industry.</p>
                    <img className="serviceOneImg" src={require('../assets/schedule.png')} />
                </div>
                <div className="services">
                    <p className="serviceOne">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</p>
                    <img className="serviceOneImg" src={require('../assets/employeeAccess.png')} />
                </div>
                <div className="services">
                    <p className="serviceOne">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</p>
                    <img className="serviceOneImg" src={require('../assets/dashboard.png')} />
                </div>
                </div>                
                </div>     
                
            </div>
        );
    }
}

export default Landing;

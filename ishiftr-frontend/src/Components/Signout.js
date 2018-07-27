import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
class SignOut extends Component {
    
    render() {
        return (
            <div>
                <Link to="/">
                    <Button type="submit" onClick={() => { localStorage.removeItem("authToken"); }} color = "success">Sign Out</Button>
                </Link>
            </div>
        );
    }
}

export default SignOut;

import React, { Component } from 'react';
import { Card, CardText} from 'reactstrap';
// import FontAwesomeIcon  from 'react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import employees from '../testEmployees';
import '../css/timeOff.css';

export default class Employee extends Component {

 onDelete = () => {
   this.props.onDelete(this.props.employee._id)
 }

 onEdit = () => {
   this.props.onEdit(this.props.employee._id)
 }

  render() {
    return (    
      
              <Card body outline color="primary" className ='card'>
              <div className = 'icons'>
              <div >
                <i className="fas fa-pencil-alt"></i>
              </div>
              <div onClick={this.onDelete}>
                <i className="far fa-trash-alt"></i>
              </div>                
              </div>
                <CardText>{this.props.employee.firstName} {this.props.employee.lastName}</CardText>
                <form>
                    <fieldset className='fieldset'>
                        <legend className = 'legend legend-1'>Availability:</legend>
                        <p>text here</p>
                    </fieldset>
                    <fieldset className='fieldset'>
                        <legend className = 'legend'>Requested Time Off:</legend>
                        <div>
                        <label htmlFor="scales">July 20th</label>
                            <input type="checkbox" name="feature"
                                  value="scales" />
                            <label htmlFor="scales">Approved</label>
                            <label htmlFor="scales">July 24th</label>
                            <input type="checkbox" name="feature"
                                  value="scales" />
                            <label htmlFor="scales">Approved</label>                            
                        </div>                                               
                    </fieldset>
                </form>
              </Card>
        )    
  }
}

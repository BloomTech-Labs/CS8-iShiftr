import React, { Component } from 'react';
import { Card, CardText, Label, Input, FormGroup } from 'reactstrap';
// import FontAwesomeIcon  from 'react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import employees from '../testEmployees';
import '../css/timeOff.css';

export default class Employee extends Component {
  render() {
    return (
      
      employees.map((employee) => {
          return  (
              <Card body outline color="primary" className ='card'>
              <div className = 'icons'>
                <i class="fas fa-pencil-alt"></i>
                <i class="far fa-trash-alt"></i>
              </div>
                <CardText>{employee.firstName} {employee.lastName}</CardText>
                <form>
                    <fieldset className='fieldset'>
                        <legend className = 'legend legend-1'>Availability:</legend>
                        <p>text here</p>
                    </fieldset>
                    <fieldset className='fieldset'>
                        <legend className = 'legend'>Requested Time Off:</legend>
                        <div>
                        <label for="scales">July 20th</label>
                            <input type="checkbox" id="scales" name="feature"
                                  value="scales" />
                            <label for="scales">Approved</label>
                            <label for="scales">July 24th</label>
                            <input type="checkbox" id="scales" name="feature"
                                  value="scales" />
                            <label for="scales">Approved</label>                            
                        </div>                                               
                    </fieldset>
                </form>
              </Card>
        )
      })
    )
  }
}

import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import employees from '../testEmployees';

export default class Employee extends Component {
  render() {
    return (
      
      employees.map((employee) => {
          return  (
              <Card body outline color="primary" className ='card'>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>{employee.firstName}</CardText>
                <form>
                <fieldset className='fieldset'>
                    <legend className = 'legend legend-1'>Availability:</legend>
                    <p>text here</p>
                </fieldset>
                <fieldset className='fieldset'>
                    <legend className = 'legend'>Requested Time Off:</legend>
                    <p>text here</p>
                </fieldset>
                </form>
              </Card>
        )
      })
    )
  }
}

import React, { Component } from "react";
import { Button, Row } from "reactstrap";
import SignOut from "./Signout";
import EmployeeMenu from "../Components/employeeMenu";
import { Breadcrumb, BreadcrumbItem, Container, Col } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "../css/Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <Container className="topContainer">
        <div className="row-header">
          <div>
            <EmployeeMenu />
          </div>
        </div>
        <Row>
          <Col xs="6" sm="4" />
          <Col xs="6" sm="4" />
          <Col sm="4" />

          <form>
            <fieldset className="fieldset">
              <legend className="legend legend-1">Assigned Shifts</legend>
              <p>assigned dates will go here</p>
            </fieldset>
          </form>

          <Col sm="6">
            <form>
              <fieldset className="fieldset">
                <legend className="legend">Time Off Approved</legend>
                <p>approved dates</p>
              </fieldset>
            </form>
          </Col>
          <Col sm="6" />

          <fieldset className="fieldset">
            <legend className="legend">Submit Time Off Request</legend>

            <Form>
              <FormGroup>
                <Label htmlFor="Date">Date</Label>
                <Input type="date" name="date" id="date" placeholder="date" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="Reason">Reason</Label>
                <Input
                  type="reason"
                  name="reason"
                  id="reason"
                  placeholder="reason"
                />
              </FormGroup>
            </Form>

            <Button type="submit" onClick={this.props.handleClick}>
              Submit
            </Button>
          </fieldset>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;

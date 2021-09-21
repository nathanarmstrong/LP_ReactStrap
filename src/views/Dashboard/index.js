import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, UncontrolledCarousel,CardBody } from "reactstrap";
import { Redirect } from "react-router-dom"


// DASHBOARD page sections
const Dashboard = (props) => {
  useEffect(() => {

  }, [])

  //TODO GET APP APPOINTMETS 


  if(!props.store.authenticated){
    return(
      <Redirect to={"/"} />
    )
  }else{
    return(
      <React.Fragment>
        <main className="page-main-body" >
          <section className="section">
            <Container>
                <Col lg="12">
                </Col>
            </Container>
          </section>
        </main>
      </React.Fragment>
    )
  }
}


export default Dashboard;

import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, UncontrolledCarousel, CardBody} from "reactstrap";
import { Redirect, Link } from "react-router-dom"
import {HOME_URL, POST_URL} from '../../../urls'

// View specific Post page sections
const ViewPost = (props) => {


  useEffect(() => {
    console.log("RENDER")
  }, [])

  //TODO GET APP APPOINTMETS 


  if(!props.store.authenticated){
    return(
      <Redirect to={HOME_URL} />
    )
  }else{
    return(
      <React.Fragment>
        <main className="page-main-body" >
          <section className="section">
            <Container>
              VIEW POSTS
            </Container>
          </section>
        </main>
      </React.Fragment>
    )
  }
}


export default ViewPost;

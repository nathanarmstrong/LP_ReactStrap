import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, UncontrolledCarousel, CardBody} from "reactstrap";
import { Redirect, Link } from "react-router-dom"
import {HOME_URL, POST_URL} from '../../urls'

// ALL POSTS page sections
const Posts = (props) => {


  useEffect(() => {

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
            
            </Container>
          </section>
        </main>
      </React.Fragment>
    )
  }
}


export default Posts;

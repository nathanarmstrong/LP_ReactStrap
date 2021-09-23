
import React, { useEffect, useState} from "react";

// reactstrap components
import { Row, Col, CardBody, Card, Form, FormGroup, Label, Input } from "reactstrap";

import { Redirect, useHistory} from "react-router-dom"; 
import Logo from '../assets/img/brand/finallogohover.png'
import Button from "reactstrap/lib/Button";

import { LOGIN_URL } from "../urls";


const Index = (props) => {
  // const ref = useRef();
  const history = useHistory()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  useEffect(() => {
    // if (ref.current) {
    //   window.scrollTo({
    //     behavior: "smooth",
    //     top: ref.current.offsetTop
    //   });
    // }
  }, [])


  const loginUser = () => {
    if(email && password){
      //CALL LOGIN
      history.push(LOGIN_URL)
    }
  }



  if(props.store.authenticated){
    return(
      <Redirect to={"/dashboard"} />
    )
  }else{
    return(
      <React.Fragment>
        <main className="landing-page">
          <section className="section-landing-cover  my-0">
            <Row>
              <Col className="mx-auto center-y" lg="6">

                <Card style={{width: '100%'}}>
                  <CardBody>
                    <div className="section-landing-content">
                      <img alt="..." src={Logo} className="mb-5 mx-auto" />
                    </div>
                    <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input type="email" name="email" id="exampleEmail" onChange={(event) => setEmail(event.target.value)} placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input type="password" name="password" id="examplePassword" onChange={(event) => setPassword(event.target.value)} placeholder="password placeholder" />
                    </FormGroup>
                      <Button size="lg"  onClick={() => {loginUser()}}>Login</Button>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </section>
        </main>
      </React.Fragment>
    )
  }
}



// class Index extends React.Component {
//   componentDidMount() {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//     this.refs.main.scrollTop = 0;
//   }
//   render() {
//     return (
      
//     );
//   }
// }

export default Index;

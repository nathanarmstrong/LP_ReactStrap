
import React, { useEffect} from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

import { Redirect} from "react-router-dom"; 
import Logo from '../assets/img/brand/finallogohover.png'


const Index = (props) => {
  // const ref = useRef();
  useEffect(() => {
    // if (ref.current) {
    //   window.scrollTo({
    //     behavior: "smooth",
    //     top: ref.current.offsetTop
    //   });
    // }
  }, [])
  if(props.store.authenticated){
    return(
      <Redirect to={"/dashboard"} />
    )
  }else{
    return(
      <React.Fragment>
        {/* <h1>LANDING</h1>
        {props.store.authenticated ? 
        <Link to={LOGOUT_URL}>Logout (FAKE)</Link>
        :
        <Link to={LOGIN_URL}>Login (FAKE)</Link>
        }
        <Link to={APPOINTMENTS_URL}>Appointment</Link>
        <Link to={`${EDIT_APPOINTMENT_URL}1`}>Edit Appointment</Link>
        <Link to={`${VIEW_APPOINTMENT_URL}1`}>View Appointment</Link>
        <Link to={DASHBOARD_URL}>Dashboard</Link>
        <Link to={BOOKING_URL}>Bookings</Link>
        <Link to={HISTORY_APPOINTMENTS_URL}>History</Link> */}
        <main className="landing-page">
          <section className="section-landing-cover  my-0">
            <Row>
              <Col className="mx-auto" lg="12">
                <div className="section-landing-content">
                    <img alt="..." src={Logo} className="mb-5 mx-auto" />
                </div>
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

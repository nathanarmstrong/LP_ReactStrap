
import React, { useEffect,useState } from "react";
import { Link, useHistory } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components

import Switch from "react-switch";
// ROUTES URL
import {
 DASHBOARD_URL
} from '../../urls'


import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  CustomInput,
} from "reactstrap";

import Logo from "../../assets/img/brand/finallogohover.png";



const  DemoNavbar =(props) => {
  // constructor(props) {
  //   super(props);
    const [emailUpdates, setemailUpdates] = useState(true)
    const [PrivacyPolicyOpen, setPrivacyPolicyOpen] = useState(false)
    const [PaymentDetailsOpen, setPaymentDetailsOpen] = useState(false)
    const [EditPaymentDetailsOpen, setEditPaymentDetailsOpen] = useState(false)
    const [collapseClasses, setCollapseClasses] = useState("")
    const [collapseOpen, setCollapseOpen] = useState("")
    const [TermsOfServiceOpen, setTermsOfServiceOpen] = useState("")
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }, [])

  const onExiting = () => {
    setCollapseClasses('collapsing-out')
  };

  const onExited = () => {
    setCollapseClasses('');
  };
  const history = useHistory();   
    
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-avvy navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img alt="..." src={Logo}></img>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} >
              <DropdownToggle 
                 nav caret
              >
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem >Page</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
// }

export default DemoNavbar;

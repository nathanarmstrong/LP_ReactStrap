import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, UncontrolledCarousel,Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { Redirect, Link } from "react-router-dom"
import {HOME_URL, POST_URL} from '../../urls'

import './dashboard.css';
import CardBody from "reactstrap/lib/CardBody";
// DASHBOARD page sections
const Dashboard = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [posts, setPosts] = useState([])

  const toggle = () => setDropdownOpen(prevState => !prevState);

  useEffect(() => {
    setPosts([{
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      },
      {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
      },
      {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
      },{
      userId: 1,
      id: 5,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      },
      {
      userId: 1,
      id: 6,
      title: "qui est esse",
      body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
      userId: 1,
      id: 7,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
      },
      {
      userId: 1,
      id: 8,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
      }])
  }, [])

  const showOldPosts = () => {
    setPosts([{
      userId: 1,
      id: 1,
      title: "OLD sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "OLD quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      },
      {
      userId: 1,
      id: 2,
      title: "OLD qui est esse",
      body: "OLD est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
      userId: 1,
      id: 3,
      title: "OLD ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "OLD et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
      },
      {
      userId: 1,
      id: 4,
      title: "OLD eum et est occaecati",
      body: "OLD ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
      },{
      userId: 1,
      id: 5,
      title: "OLD sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "OLD quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      },
      {
      userId: 1,
      id: 6,
      title: "OLD qui est esse",
      body: "OLD est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
      userId: 1,
      id: 7,
      title: "OLD ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "OLD et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
      },
      {
      userId: 1,
      id: 8,
      title: "OLD eum et est occaecati",
      body: "OLD ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
      }])
  }

  const showNewPosts = () => {
    setPosts([{
      userId: 1,
      id: 1,
      title: "NEW sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "NEW quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      },
      {
      userId: 1,
      id: 2,
      title: "NEW qui est esse",
      body: "NEW est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
      userId: 1,
      id: 3,
      title: "NEW ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "NEW et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
      },
      {
      userId: 1,
      id: 4,
      title: "NEW eum et est occaecati",
      body: "NEW ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
      },{
      userId: 1,
      id: 5,
      title: "NEW sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "NEW quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      },
      {
      userId: 1,
      id: 6,
      title: "NEW qui est esse",
      body: "NEW est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
      userId: 1,
      id: 7,
      title: "NEW ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "NEW et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
      },
      {
      userId: 1,
      id: 8,
      title: "NEW eum et est occaecati",
      body: "NEW ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
      }])
  }

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
              <Row>
                <Col className="" lg='12'>
                <Card>
                  <CardBody>
                    <Row className="side-scroll">
                      {posts.map(post => {
                        return(
                          <Col lg='3'>
                            <Link to={POST_URL + post.id}>
                              <div>
                                {post.title}
                                {post.body}
                              </div>
                              </Link>
                          </Col>
                        )
                    })}
                    </Row>
                  </CardBody>
                </Card>
                </Col>
                <Col lg='6'>
                <Card>
                  <CardBody>
                    <Row>
                      <Col lg="3">
                        <span>All</span>
                      </Col>
                      <Col lg="6">
                        <input placeholder="search"/>
                      </Col>
                      <Col lg="3">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                          <DropdownToggle 
                            nav caret
                          >
                            Calgary
                          </DropdownToggle>
                          <DropdownMenu>
                            <div><input placeholder="search"/></div>
                            <DropdownItem>Calgary</DropdownItem>
                            <DropdownItem>Edmonton</DropdownItem>
                            <DropdownItem>Toronoto</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                </Col>
                <Col lg='6'>
                <Card>
                  <CardBody>
                    HERE
                  </CardBody>
                </Card>
                </Col>
                <Col lg='4'>
                <Card>
                  <CardBody>
                    HERE
                  </CardBody>
                </Card>
                </Col>
                <Col lg='3'>
                <Card>
                  <CardBody>
                    <Button onClick={() => showOldPosts()}>show old POSTs</Button>
                    <Button onClick={() => showNewPosts()}>show new POSTs</Button>

                  </CardBody>
                </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </React.Fragment>
    )
  }
}


export default Dashboard;

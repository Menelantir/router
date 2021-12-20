import React from 'react'
import {Navbar,Container,Nav,Form,FormControl} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function Navv({setSearch,setSearchRate}) {
    const ratingChanged = (newRating) => {
        setSearchRate(newRating);
      };      
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">MOVIELAND</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/home">HOME</Nav.Link>
        <Nav.Link href="/movies">FEATURED</Nav.Link>
        <Nav.Link href="">CONTACT</Nav.Link>

        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="search"
          className="me-2"
          aria-label="Search"
          onChange= {e=> setSearch(e.target.value)}
        />
      </Form>
      <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700"/>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navv
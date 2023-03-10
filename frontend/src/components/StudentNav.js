import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function UserNav() {
  return (
    <>
      <Navbar className="bg-success">
        <Container className="ms-2">
          <Navbar.Brand className="text-white"><i className="bi bi-people-fill"></i> StudentList</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
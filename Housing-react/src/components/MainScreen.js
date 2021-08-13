import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Screen.css";
import logo from '../Images/logo-4.png'

function MainScreen({ children, title }) {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div className="page text-white">
            <div><img src={logo} alt="logo" height="50"  style={{marginLeft:350 ,marginTop:5}}></img></div>
            {title && (
              <>
                <h1 className="heading text-center mt-5">{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default MainScreen;
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/khushi-parmar-812157267/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Khushi-1204"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/_khush.i_parmar_?igshid=OGQ5ZDc2ODk2ZA=="><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Thank You :) </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import LogoIMG from "../../assets/images/HortiFrutiLogo.png";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header>
      <Container fluid className={styles.header}>
        <Container>
          <Row>
            <Col>
              <img src={LogoIMG} alt="HortiFruti" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className={styles.navbar}>
        <Container>
          <Row>
            <Col lg={12}>
              <Navbar expand="lg">
                <Nav className="mr-auto">
                  <p>Bem vindo(a) ao mundo das cores e sabores</p>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                  className="justify-content-end"
                  id="basic-navbar-nav"
                >
                  <Nav>
                    <ul>
                      <li>
                        <a href="/">Mudar Loja</a>
                      </li>
                      <li>
                        <span>Fazendo pedidos na Loja Tijuca</span>
                      </li>
                    </ul>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </Container>
    </header>
  );
}

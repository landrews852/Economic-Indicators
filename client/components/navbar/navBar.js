import Link from "next/link";
import styles from "../../styles/NavBar.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import useScrollTop from "../../hooks/useScrollTop.js";

export default function NavBar() {
  const [scrollTop, scrollProps] = useScrollTop();

  return (
    <>
      <div
        className={styles.navbar}
        {...scrollProps}
        style={{
          boxShadow:
            scrollTop > 0 ? "5px 8px 5px 5px rgb(0 0 0 / 0.4)" : "none",
          transition: "box-shadow 0.3s",
          height: "100%",
        }}
      >
        <Navbar expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/indicadores">Indicadores</Nav.Link>
                <Nav.Link href="/about">Sobre la app</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

import { Container, Row, Col,Navbar,Nav,NavDropdown } from "react-bootstrap"
import { FaRegClock, FaPhone, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { ImExit } from "react-icons/im";
import { FaTwitter, FaGooglePlusG } from "react-icons/fa";
import { IoStorefrontOutline,IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";


function Header1() {
    return (

        <header>
            <section className="header">
                <Container>
                    <div className="top_header">
                        <Row>
                            <Col className="top d-md-block d-sm-none " lg={6} md={6} sm={12} xs={12}>
                                <ul className="icon_head d-flex">
                                    <li>
                                        <i><FaRegClock></FaRegClock></i>
                                        <span>Mon - Fri  9.00 : 17.00</span>
                                    </li>
                                    <li>
                                        <i><FaPhone></FaPhone></i>
                                        <span>(04) 491 570 110</span>
                                    </li>
                                </ul>
                            </Col>
                            <Col className="d-flex icons justify-content-end" lg={6} md={6} sm={12} xs={12}>
                                <div className="top_login">
                                    <i><ImExit></ImExit></i>
                                    <a href="#">Login / Register</a>
                                </div>
                                <div className="social_icon">
                                    <a href="#">
                                        <i><FaFacebookF></FaFacebookF></i>
                                    </a>
                                    <a href="#">
                                        <i><FaTwitter></FaTwitter></i>
                                    </a><a href="#">
                                        <i><FaGooglePlusG></FaGooglePlusG></i>
                                    </a><a href="#">
                                        <i><FaInstagram></FaInstagram></i>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <section>
                <Navbar expand="lg" className="bg-black head_nav">
                    <Container>
                        <img src={require('./image/logo.png')}></img>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="w-100 justify-content-end main_menu">
                                <Nav.Link href="/home">home</Nav.Link>
                                <Nav.Link href="/contact">contact us</Nav.Link>
                                <Nav.Link href="/heading">heading</Nav.Link>
                                <Nav.Link href="/gallery">gallery</Nav.Link>
                                <Nav.Link href="/home">about us</Nav.Link>
                                <Nav.Link href="/shop">shop</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <div className="module_icon  d-lg-block d-none">
                            <a href="#">
                                <i><IoStorefrontOutline></IoStorefrontOutline></i>
                            </a>
                        </div>
                        <div className="search d-lg-block d-none">
                            <a href="#">
                                <i><IoSearch></IoSearch></i>
                            </a>
                        </div>
                        <div className="book d-lg-block d-none">
                            <a href="#">book online</a>
                        </div>
                    </Container>
                </Navbar>
            </section>
        </header>

    )
}
export default Header1
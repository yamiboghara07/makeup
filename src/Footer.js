import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {FaFacebookF, FaInstagram } from "react-icons/fa6";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
function Footer() {
    return (
        <section className="footer">
            <div>
                <Container>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="footer1">
                                <img src={require('./image/logo.png')}></img>
                                <p className="footer_desc">
                                    Proin gravida nibh vel velit auctor aliquet anean lorem quis. bindum auctor, nisi elite conset ipsums sagtis id duis sed odio sit.
                                </p>
                                <div className="work_schedule">
                                    <ul>
                                        <li className="flex">
                                            <p>Monday - Friday </p>
                                            <span>9.00 : 17.00</span>
                                        </li>
                                        <li className="flex">
                                            <p>Saturday </p>
                                            <span>9.00 : 15.00</span>
                                        </li>
                                        <li className="flex">
                                            <p>Sunday </p>
                                            <span>9.00 : 13.00</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="footer_title">
                                <h5>Latest Posts</h5>
                            </div>
                            <div className="f_desc">
                                <div className="entry d-flex">
                                    <div className="foot_img">
                                        <a href="#">
                                            <img src={require('./image/foot1.jpg')}></img>
                                        </a>
                                    </div>
                                    <div className="entry_desc">
                                        <div className="ent_txt">
                                            <p>Essential barbering tips you need to know before you start</p>
                                        </div>
                                        <div className="entry_meta">
                                            <span>Nov 09, 2017</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="entry d-flex">
                                    <div className="foot_img">
                                        <a href="#">
                                            <img src={require('./image/foot2.jpg')}></img>
                                        </a>
                                    </div>
                                    <div className="entry_desc">
                                        <div className="ent_txt">
                                            <p>What are the 360 waves? and how you can get them</p>
                                        </div>
                                        <div className="entry_meta">
                                            <span>Oct 30, 2017</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="entry d-flex">
                                    <div className="foot_img">
                                        <a href="#">
                                            <img src={require('./image/foot3.jpg')}></img>
                                        </a>
                                    </div>
                                    <div className="entry_desc">
                                        <div className="ent_txt">
                                            <p>Discover what is the best haircut for your face shape?</p>
                                        </div>
                                        <div className="entry_meta">
                                            <span>Oct 19, 2017</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="footer_title">
                                <h5>Get In Touch</h5>
                            </div>
                            <div className="location">
                                <ul>
                                    <li className="d-flex">
                                        <i><FaLocationDot></FaLocationDot></i>
                                        <p> 1220 Petersham town, Wardll St New South Wales Australia PA 6550.</p>
                                    </li>
                                    <li className="d-flex">
                                        <i><FaPhoneAlt></FaPhoneAlt></i>
                                        <p>(04) 491 570 110</p>
                                    </li>
                                    <li className="d-flex">
                                        <i><HiOutlineMail></HiOutlineMail></i>
                                        <p>contact@zytheme.com</p>
                                    </li>
                                </ul>

                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer_line">
                <Container>
                    <Row>
                        <Col>
                            <div className="bottum_foot">
                                <span>© 2017, All rights reserved.</span>
                            </div>
                        </Col>
                        <Col>
                            <div className="foot_social">
                                <a href="#">
                                    <i><FaTwitter></FaTwitter></i>
                                </a>
                                 <a href="#">
                                    <i><FaFacebookF></FaFacebookF></i>
                                </a>
                                <a href="#">
                                    <i><FaLinkedinIn></FaLinkedinIn></i>
                                </a>
                                <a href="#">
                                    <i><FaInstagram></FaInstagram></i>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}
export default Footer
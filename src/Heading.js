import Footer from "./Footer"
import Header1 from "./Header1"
import { Container, Row, Col } from "react-bootstrap"

function Heading() {
    return (

        <div>

            {/* ============================================================================
                                            ** header **
            ================================================================================*/}

            <section>
                <Header1></Header1>
            </section>

            {/* ============================================================================
                                            ** slider **
            ================================================================================*/}


            <section>
                <div className="element_img">
                    <img src={require('./image/head.jpg')}></img>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <div className="element">
                                <div className="ele_hed">
                                    <h1>Heading</h1>
                                    <div className="clear flex">
                                        <p>Home / Element / </p>
                                        <p>heading</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ============================================================================
                                            ** headint1 **
            ================================================================================*/}

            {/* <section className="get_touch">
                <Container>
                    <Row>
                        <Col sm={12} xs={12}>
                            <div className="get_head">
                                <h2>Get In Touch</h2>
                                <div className="get_img">
                                    <img src={require('./image/line.png')}></img>
                                </div>
                                <p>
                                    Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint occaecat cupidatat non proident culpa.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}

            {/* ============================================================================
                                            ** headint2 **
            ================================================================================*/}

            {/* <section className="get_touch">
                <Container>
                    <Row>
                        <Col sm={12} xs={12}>
                            <div className="get_head">
                                <h2>Our Blog Posts</h2>
                                <p className="get_txt">
                                    Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint occaecat cupidatat non proident culpa.
                                </p>
                                <div className="get_img">
                                    <img src={require('./image/line.png')}></img>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}


            {/* ============================================================================
                                            ** heading tag **
            ==============================================================================*/}

            <section className="tag">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1 className="h_head">h1 headline</h1>
                            <p className="hp_head">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, eleifend sed turpis. Pellentesque cursus arcu id magna euismod in molestie. Curabitur pellentesque massa eu nulla consequat sed porttitor arcu porttitor. Quisque volutpat pharetra felis, eu cursus lorem molestie vitae. Nulla vehicula, lacus ut suscipit fermentum, turpis felis ultricies dui, ut rhoncus libero augue at libero. Morbi ut arcu dolor.
                            </p>
                        </Col>
                        <Col md={12}>
                            <h2  className="h_head">h2 headline</h2>
                            <p className="hp_head">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, eleifend sed turpis. Pellentesque cursus arcu id magna euismod in molestie. Curabitur pellentesque massa eu nulla consequat sed porttitor arcu porttitor. Quisque volutpat pharetra felis, eu cursus lorem molestie vitae. Nulla vehicula, lacus ut suscipit fermentum, turpis felis ultricies dui, ut rhoncus libero augue at libero. Morbi ut arcu dolor.
                            </p>
                        </Col>
                        <Col md={12}>
                            <h3 className="h_head">h3 headline</h3>
                            <p className="hp_head">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, eleifend sed turpis. Pellentesque cursus arcu id magna euismod in molestie. Curabitur pellentesque massa eu nulla consequat sed porttitor arcu porttitor. Quisque volutpat pharetra felis, eu cursus lorem molestie vitae. Nulla vehicula, lacus ut suscipit fermentum, turpis felis ultricies dui, ut rhoncus libero augue at libero. Morbi ut arcu dolor.
                            </p>
                        </Col>
                        <Col md={12}>
                            <h4 className="h_head">h4 headline</h4>
                            <p className="hp_head">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, eleifend sed turpis. Pellentesque cursus arcu id magna euismod in molestie. Curabitur pellentesque massa eu nulla consequat sed porttitor arcu porttitor. Quisque volutpat pharetra felis, eu cursus lorem molestie vitae. Nulla vehicula, lacus ut suscipit fermentum, turpis felis ultricies dui, ut rhoncus libero augue at libero. Morbi ut arcu dolor.
                            </p>
                        </Col>
                        <Col md={12}>
                            <h5 className="h_head">h5 headline</h5>
                            <p className="hp_head">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, eleifend sed turpis. Pellentesque cursus arcu id magna euismod in molestie. Curabitur pellentesque massa eu nulla consequat sed porttitor arcu porttitor. Quisque volutpat pharetra felis, eu cursus lorem molestie vitae. Nulla vehicula, lacus ut suscipit fermentum, turpis felis ultricies dui, ut rhoncus libero augue at libero. Morbi ut arcu dolor.
                            </p>
                        </Col>
                        <Col md={12}>
                            <h6 className="h_head">h6 headline</h6>
                            <p className="hp_head">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam, adipiscing condimentum tristique vel, eleifend sed turpis. Pellentesque cursus arcu id magna euismod in molestie. Curabitur pellentesque massa eu nulla consequat sed porttitor arcu porttitor. Quisque volutpat pharetra felis, eu cursus lorem molestie vitae. Nulla vehicula, lacus ut suscipit fermentum, turpis felis ultricies dui, ut rhoncus libero augue at libero. Morbi ut arcu dolor.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*=================================================================================
                                    ** footer **
            =================================================================================*/}

            <section>
                <Footer></Footer>
            </section>

        </div>

    )
}
export default Heading
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap"

function Services() {
    return (
        <section>
            <Container>
                <div class="what">
                    <div class="what_head">
                        <h2>What We Do?</h2>
                        <p>Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint
                            occaecat cupidatat non proident culpa.</p>
                        <div class="head_img">
                            <img src={require('./image/line.png')}></img>
                        </div>
                    </div>
                </div>
                <Row>
                    {/* <div class="panel"> */}
                        <Col md={6} lg={4} xs={12}>
                            <div class="panels">
                                <div class="ser_panel">
                                    <div class="ser_img">
                                        <img src={require('./image/p1.png')}></img>

                                    </div>
                                    <div class="ser_txt">
                                        <h3>Haircut Styles</h3>
                                        <p>Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore fugiat nulla.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4} xs={12}>
                            <div class="panels">
                                <div class="ser_panel">
                                    <div class="ser_img">
                                        <img src={require('./image/p2.png')}></img>
                                    </div>
                                    <div class="ser_txt">
                                        <h3>Beard Trim</h3>
                                        <p>Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore fugiat nulla.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4} xs={12}>
                            <div class="panels">
                                <div class="ser_panel">
                                    <div class="ser_img">
                                        <img src={require('./image/p3.png')}></img>
                                    </div>
                                    <div class="ser_txt">
                                        <h3>Hot Shave</h3>
                                        <p>Duis aute irure dolor in reprehenderit in volupte velit esse cillum dolore fugiat nulla.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    {/* </div> */}
                </Row>
            </Container>
        </section>
    )
}
export default Services
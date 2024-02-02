import Footer from "./Footer"
import Header1 from "./Header1"
import { Container, Row, Col } from "react-bootstrap"

function Shop() {
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
                    <img src={require('./image/shop.jpg')}></img>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <div className="element">
                                <div className="ele_hed">
                                    <h1>Titles</h1>
                                    <div className="clear flex">
                                        <p>Home / Element / </p>
                                        <p> Titles</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ============================================================================
                                            ** product **
            ================================================================================*/}

            <section className="product">
                <Container>
                    <Row>
                        <Col className="d-flex showing" md={12} sm={12} xs={12}>
                            <div className="s_product">
                                <h2>Showing 1 : 9 of 27 product</h2>
                            </div>
                            <div className="default">
                                <span>Sort by:</span>
                                <select>
                                    <option selected value="Default">Default Sorting</option>
                                    <option value="Larger">Newest Items</option>
                                    <option value="Larger">oldest Items</option>
                                    <option value="Larger">Hot Items</option>
                                    <option value="Small">Highest Price</option>
                                    <option value="Medium">Lowest Price</option>
                                </select>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="product_img">
                                <img src={require('./image/pp1.jpg')}></img>
                                <div className="product_hover">
                                    <div className="product_action">
                                        <a href="#">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3>Sharp Shear</h3>
                                <span>$35.00</span>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="product_img">
                                <img src={require('./image/pp2.jpg')}></img>
                                <div className="product_hover">
                                    <div className="product_action">
                                        <a href="#">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3>Flat Comb</h3>
                                <span>$5.00</span>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="product_img">
                                <img src={require('./image/pp3.jpg')}></img>
                                <div className="product_hover">
                                    <div className="product_action">
                                        <a href="#">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3>Fade Clipper</h3>
                                <span>$105.00</span>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="product_img">
                                <img src={require('./image/pp4.jpg')}></img>
                                <div className="product_hover">
                                    <div className="product_action">
                                        <a href="#">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3>Gel Cream</h3>
                                <span>$7.5</span>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="product_img">
                                <img src={require('./image/pp5.jpg')}></img>
                                <div className="product_hover">
                                    <div className="product_action">
                                        <a href="#">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3>Beard Razor</h3>
                                <span>$89.00</span>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="product_img">
                                <img src={require('./image/pp6.jpg')}></img>
                                <div className="product_hover">
                                    <div className="product_action">
                                        <a href="#">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3>Shaving Brush</h3>
                                <span>$19.00</span>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="product_img">
                                <img src={require('./image/pp7.jpg')}></img>
                                <div className="product_hover">
                                    <div className="product_action">
                                        <a href="#">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3>Shave Cream</h3>
                                <span>$24.00</span>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="product_img">
                                <img src={require('./image/pp8.jpg')}></img>
                                <div className="product_hover">
                                    <div className="product_action">
                                        <a href="#">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3>Hair Dryer</h3>
                                <span>$35.00</span>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="product_img">
                                <img src={require('./image/pp9.jpg')}></img>
                                <div className="product_hover">
                                    <div className="product_action">
                                        <a href="#">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product_content">
                                <h3>Pre Shave</h3>
                                <span>$30.00</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ============================================================================
                                            ** footer **
            ================================================================================*/}

            <section>
                <Footer></Footer>
            </section>

        </div>

    )
}
export default Shop
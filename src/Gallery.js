import Footer from "./Footer"
import Header1 from "./Header1"
import { Container, Row, Col } from "react-bootstrap"

function Gallery() {
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
                <div className="gallery_img">
                    <img src={require('./image/gallery.jpg')}></img>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <div className="element">
                                <div className="ele_hed">
                                    <h1>3 Columns</h1>
                                    <div className="clear flex">
                                        <p>Home / Gallery / </p>
                                        <p>3 Columns</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ============================================================================
                                            ** gallery **
            ================================================================================*/}

            <section className="g_all">
                <Container>
                    <Row>
                        <Col className="listing" md={12} sm={12} xs={12}>
                            <ul className="list_gallery d-flex">
                                <li><a href="#" className="active">all</a></li>
                                <li><a href="#">hairstyle</a></li>
                                <li><a href="#">beard</a></li>
                                <li><a href="#">lineup</a></li>
                                <li><a href="#">shave</a></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="gallery_all">
                        <Col className="gallery_inner" lg={4} md={6} sm={12} xs={12} >
                            <div className="g_img">
                                <img src={require('./image/g1.jpg')}></img>
                            </div>
                        </Col>
                        <Col className="gallery_inner" lg={4} md={6} sm={12} xs={12} >
                            <div className="g_img">
                                <img src={require('./image/g2.jpg')}></img>
                            </div>
                        </Col>
                        <Col className="gallery_inner" lg={4} md={6} sm={12} xs={12} >
                            <div className="g_img">
                                <img src={require('./image/g3.jpg')}></img>
                            </div>
                        </Col>
                        <Col className="gallery_inner" lg={4} md={6} sm={12} xs={12} >
                            <div className="g_img">
                                <img src={require('./image/g4.jpg')}></img>
                            </div>
                        </Col>
                        <Col className="gallery_inner" lg={4} md={6} sm={12} xs={12} >
                            <div className="g_img">
                                <img src={require('./image/g5.jpg')}></img>
                            </div>
                        </Col>
                        <Col className="gallery_inner" lg={4} md={6} sm={12} xs={12} >
                            <div className="g_img">
                                <img src={require('./image/g6.jpg')}></img>
                            </div>
                        </Col>
                        <Col className="gallery_inner" lg={4} md={6} sm={12} xs={12} >
                            <div className="g_img">
                                <img src={require('./image/g7.jpg')}></img>
                            </div>
                        </Col>
                        <Col className="gallery_inner" lg={4} md={6} sm={12} xs={12} >
                            <div className="g_img">
                                <img src={require('./image/g8.jpg')}></img>
                            </div>
                        </Col>
                        <Col className="gallery_inner" lg={4} md={6} sm={12} xs={12} >
                            <div className="g_img">
                                <img src={require('./image/g9.jpg')}></img>
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
export default Gallery
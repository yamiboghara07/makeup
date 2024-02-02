import Footer from "./Footer";
import Header1 from "./Header1";
import { Container, Row, Col } from "react-bootstrap"

function Contact() {
  return (

    <div>

      {/* =================================================================================
                                            ** header **
      ===================================================================================*/}

      <section>
        <Header1></Header1>
      </section>

      {/* =================================================================================
                                            ** slider **
      ===================================================================================*/}

      <section>
        <div className="element_img contact_us">
          <img src={require('./image/cont.jpg')}></img>
        </div>
        <Container>
          <Row>
            <Col>
              <div className="element">
                <div className="ele_hed">
                  <h1>Contact us</h1>
                  <div className="clear flex">
                    <p>Home / contact us </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =================================================================================
                                    ** get in touch **
      ===================================================================================*/}

      <section>
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
          <Row>
            <Col className="form" md={6} sm={12} xs={12}>
              <form>
                <Row>
                  <Col lg={6} md={12} sm={12}>
                    <input type="text" placeholder="Name:*" className="form_cont"></input>
                  </Col>
                  <Col lg={6} md={12} sm={12}>
                    <input className="email" placeholder="Email:*" className="form_cont"></input>
                  </Col>
                  <Col lg={12} md={12} sm={12}>
                    <input type="text" placeholder="Subject:" className="form_cont"></input>
                  </Col>
                  <Col lg={12} md={12} sm={12}>
                    <textarea placeholder="Messege:*" className="text_area"></textarea>
                  </Col>
                  <Col className="form_btn" lg={12} md={12} sm={12}>
                    <a href="#">send now</a>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =================================================================================
                                    ** went wrong **
      ===================================================================================*/}

      <section className="map">
        <Container>
          <Row>
            <Col>
              <div className="map_content">
                <div className="g_map">
                  <div className="map_icon">
                    <img src={require('./image/icon.png')}></img>
                  </div>
                  <h4>Oops! Something went wrong.</h4>
                  <p>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =================================================================================
                                    ** footer **
      ===================================================================================*/}

      <Footer></Footer>

    </div>

  )
}
export default Contact
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Carousel } from "react-bootstrap"
import Header1 from "./Header1";
import Services from "./Services";
import Footer from "./Footer";
import Blog from "./Blog";

const Option = {
  responsive: {
    0: {
      items: 1,
      dots: false,
      nav: false,
    },
    600: {
      items: 2,
      dots: false,
      nav: false,
    },
    1000: {
      items: 5,
      dots: false,
      nav: false,
    }
  }
}

const obj = {
  responsive: {
    0: {
      items: 1,
      dots: true,
      nav: false,
    },
    600: {
      items: 2,
      dots: true,
      nav: false,
    },
    1000: {
      items: 3,
      dots: true,
      nav: false,
    }
  }
}

function Home() {
  return (
    <div>

      {/* =================================================================================
                                            ** header **
      ===================================================================================*/}
      <Header1></Header1>

      {/* =================================================================================
                                            ** slider **
      ===================================================================================*/}

      <section className="slider">
        <Carousel>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <div className="image1 col-12">
              <img src={require('./image/s1.jpg')}></img>
            </div>
            <Carousel.Caption className="slider_data">
              <div className="slider_head col-xs-12 col-md-12 col-sm-12 ">
                <h3 className="slide--headline">We Will Make You Stylish</h3>
              </div>
              <div className="slider_txt col-xs-12 col-md-12 col-sm-12">
                <p>Preparing your money is a daunting challenge for today's investors and will give you a complete account of the system.</p>
                <div className="slider_btn">
                  <a href="#" className="read">Read More </a>
                  {/* <a href="#" className="get">Get Started</a> */}
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image1">
              <img src={require('./image/s2.jpg')}></img>
            </div>
            <Carousel.Caption className="slider_data">
              <div className="slider_head">
                <h3 className="slide--headline">We make amazing haircuts</h3>
              </div>
              <div className="slider_txt">
                <p>Preparing your money is a daunting challenge for today's investors and will give you a complete account of the system.</p>
                <div className="slider_btn">
                  <a href="#" className="read">Read More </a>
                  {/* <a href="#" className="get">Get Started</a> */}
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image1">
              <img src={require('./image/s3.jpg')}></img>
            </div>
            <Carousel.Caption className="slider_data">
              <div className="slider_head">
                <h3 className="slide--headline">our clients trust us</h3>
              </div>
              <div className="slider_txt">
                <p>Preparing your money is a daunting challenge for today's investors and will give you a complete account of the system.</p>
                <div className="slider_btn">
                  <a href="#" className="read">Read More </a>
                  {/* <a href="#" className="get">Get Started</a> */}
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </section>

      {/* =================================================================================
                                      ** what we do? **(service)
      ===================================================================================*/}

      <Services></Services>

      {/* =================================================================================
                                      ** working hourse **
      ===================================================================================*/}

      <section className="working_time">
        <Container>
          <Row>
            <Col>
              <div className="work_head">
                <div class="hour_head">
                  <h2>Working Hours</h2>
                  <p>Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint
                    occaecat cupidatat non proident culpa.</p>
                  <div class="head_img">
                    <img src={require('./image/line.png')}></img>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="timee">
            <Col  className="working" lg={2} md={4} sm={6} xs={6} >
              <div className="hours_planel">
                <h3>sun</h3>
                <ul>
                  <li>10.00 am</li>
                  <li>to</li>
                  <li>5.00 am</li>
                </ul>
              </div>
            </Col>
            <Col className="working" lg={2} md={4} sm={6} xs={6}>
              <div className="hours_planel">
                <h3>mon</h3>
                <ul>
                  <li>9.00 am</li>
                  <li>to</li>
                  <li>4.30 am</li>
                </ul>
              </div>
            </Col>
            <Col className="working" lg={2} md={4} sm={6} xs={6}>
              <div className="hours_planel">
                <h3>tue</h3>
                <ul>
                  <li>10.00 am</li>
                  <li>to</li>
                  <li>5.30 am</li>
                </ul>
              </div>
            </Col>
            <Col className="working" lg={2} md={4} sm={6} xs={6}>
              <div className="hours_planel">
                <h3>wed</h3>
                <ul>
                  <li>9.30 am</li>
                  <li>to</li>
                  <li>4.00 am</li>
                </ul>
              </div>
            </Col>
            <Col className="working" lg={2} md={4} sm={6} xs={6}>
              <div className="hours_planel">
                <h3>thu</h3>
                <ul>
                  <li>10.00 am</li>
                  <li>to</li>
                  <li>5.00 am</li>
                </ul>
              </div>
            </Col>
            <Col className="working"s lg={2} md={4} sm={6} xs={6}>
              <div className="hours_planel">
                <h3>fri</h3>
                <ul>
                  <li>9.00 am</li>
                  <li>to</li>
                  <li>4.30 am</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*=================================================================================
                                      ** our pricing **
      ===================================================================================*/}

      <section class="our_price">
        <div class="container">
          <Row>
            <Col>
              <div class="pricing">
                <div class="what_head">
                  <h2>Our Pricing</h2>
                  <p>Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint
                    occaecat cupidatat non proident culpa.</p>
                  <div class="head_img">
                    <img src={require('./image/line.png')}></img>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6} sm={6} xs={12}>
              <div class="price_content">
                <div class="price_panel flex">
                  <h4>Haircut</h4>
                  <div class="p_divider"></div>
                  <span>$20.00</span>
                </div>
                <p>Our stylist consults & delivers you a precision haircut.</p>
              </div>
            </Col>
            <Col  md={6} sm={6} xs={12} >
              <div class="price_content">
                <div class="price_panel flex">
                  <h4>Moustache Trim</h4>
                  <div class="p_divider"></div>
                  <span>$10.00</span>
                </div>
                <p>Our stylist consults & delivers you a precision haircut.</p>
              </div>
            </Col>
            <Col md={6} sm={6} xs={12} >
              <div class="price_content">
                <div class="price_panel flex">
                  <h4>Beard Trim</h4>
                  <div class="p_divider"></div>
                  <span>$15.00</span>
                </div>
                <p>Our stylist consults & delivers you a precision haircut.</p>
              </div>
            </Col>
            <Col md={6} sm={6} xs={12} >
              <div class="price_content">
                <div class="price_panel flex">
                  <h4>Hair Wash</h4>
                  <div class="p_divider"></div>
                  <span>$6.00</span>
                </div>
                <p>Our stylist consults & delivers you a precision haircut.</p>
              </div>
            </Col>
            <Col md={6} sm={6} xs={12} >
              <div class="price_content">
                <div class="price_panel flex">
                  <h4>Hair Color</h4>
                  <div class="p_divider"></div>
                  <span>$18.00</span>
                </div>
                <p>Our stylist consults & delivers you a precision haircut.</p>
              </div>
            </Col>
            <Col md={6} sm={6} xs={12} >
              <div class="price_content">
                <div class="price_panel flex">
                  <h4>Face Mask</h4>
                  <div class="p_divider"></div>
                  <span>$12.00</span>
                </div>
                <p>Our stylist consults & delivers you a precision haircut.</p>
              </div>
            </Col>
            <Col md={6} sm={6} xs={12} >
              <div class="price_content">
                <div class="price_panel flex">
                  <h4>Men’s Facial</h4>
                  <div class="p_divider"></div>
                  <span>$25.00</span>
                </div>
                <p>Our stylist consults & delivers you a precision haircut.</p>
              </div>
            </Col>
            <Col md={6} sm={6} xs={12} >
              <div class="price_content">
                <div class="price_panel flex">
                  <h4>Line Up</h4>
                  <div class="p_divider"></div>
                  <span>$13.00</span>
                </div>
                <p>Our stylist consults & delivers you a precision haircut.</p>
              </div>

            </Col>
          </Row>
        </div>
      </section>

      {/*=================================================================================
                                      ** client say **
      ===================================================================================*/}

      <section className="say">
        <Container>
          <div className="work_head">
            <div class="hour_head">
              <h2>Clients Say</h2>
              <p>Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint
                occaecat cupidatat non proident culpa.</p>
              <div class="head_img">
                <img src={require('./image/line.png')}></img>
              </div>
            </div>
          </div>
          <Row>
            <Col md={12} sm={12} xs={12}>
              <OwlCarousel className='owl-theme'  {...obj} loop margin={30} nav>
                <div class='item'>
                  <div className="testi_panel ">
                    <div className="t_panels">
                      <div className="testi_img">
                        <img src={require('./image/t1.png')}></img>
                      </div>
                      <div className="testi_desc">
                        <p>“Proin gravida nibh vel velit auctor aliquet aenean sollidin, lorem quis bibendum auctor nisi elit.”</p>
                      </div>
                      <div className="t_content">
                        <h4>Ryan Printz</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='item'>
                  <div className="testi_panel">
                    <div className="t_panels">
                      <div className="testi_img">
                        <img src={require('./image/t2.png')}></img>
                      </div>
                      <div className="testi_desc">
                        <p>“Proin gravida nibh vel velit auctor aliquet aenean sollidin, lorem quis bibendum auctor nisi elit.”</p>
                      </div>
                      <div className="t_content">
                        <h4>Mark Smith</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='item'>
                  <div className="testi_panel">
                    <div className="t_panels">
                      <div className="testi_img">
                        <img src={require('./image/t3.png')}></img>
                      </div>
                      <div className="testi_desc">
                        <p>“Proin gravida nibh vel velit auctor aliquet aenean sollidin, lorem quis bibendum auctor nisi elit.”</p>
                      </div>
                      <div className="t_content">
                        <h4>Steve Martin</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='item'>
                  <div className="testi_panel">
                    <div className="t_panels">
                      <div className="testi_img">
                        <img src={require('./image/t1.png')}></img>
                      </div>
                      <div className="testi_desc">
                        <p>“Proin gravida nibh vel velit auctor aliquet aenean sollidin, lorem quis bibendum auctor nisi elit.”</p>
                      </div>
                      <div className="t_content">
                        <h4>Ryan Printz</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='item'>
                  <div className="testi_panel">
                    <div className="t_panels">
                      <div className="testi_img">
                        <img src={require('./image/t2.png')}></img>
                      </div>
                      <div className="testi_desc">
                        <p>“Proin gravida nibh vel velit auctor aliquet aenean sollidin, lorem quis bibendum auctor nisi elit.”</p>
                      </div>
                      <div className="t_content">
                        <h4>Steve Martin</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='item'>
                  <div className="testi_panel">
                    <div className="t_panels">
                      <div className="testi_img">
                        <img src={require('./image/t3.png')}></img>
                      </div>
                      <div className="testi_desc">
                        <p>“Proin gravida nibh vel velit auctor aliquet aenean sollidin, lorem quis bibendum auctor nisi elit.”</p>
                      </div>
                      <div className="t_content">
                        <h4>Steve Martin</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>;
            </Col>
          </Row>
        </Container>
      </section>

      {/*=================================================================================
                                      ** Our Blog Posts **
      ===================================================================================*/}

      <Blog></Blog>

      {/*=================================================================================
                                      ** logo **
      ===================================================================================*/}

      <section className="owl_slider">
        <Container>
          <Row>
            <Col>
              <OwlCarousel className='owl-theme'{...Option} autoplay={1000} loop margin={10} nav>
                <div class='item item_image'>
                  <img src={require('./image/k1.png')}></img>
                </div>
                <div class='item item_image'>
                  <img src={require('./image/k2.png')}></img>
                </div>
                <div class='item item_image'>
                  <img src={require('./image/k3.png')}></img>
                </div>
                <div class='item item_image'>
                  <img src={require('./image/k4.png')}></img>
                </div>
                <div class='item item_image'>
                  <img src={require('./image/k5.png')}></img>
                </div>

              </OwlCarousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/*=================================================================================
                                      ** footer **
      ===================================================================================*/}

      <Footer></Footer>

    </div>
  )
}
export default Home;
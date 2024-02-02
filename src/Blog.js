import { Container, Row, Col,Navbar,Nav,NavDropdown } from "react-bootstrap"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";



function Blog() {
    return (
        <section>
            <div class="container">
                <Row>
                    <Col>
                        <div class="posts">
                            <div class="what">
                                <div class="what_head">
                                    <h2>our blog posts</h2>
                                    <p>Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat pariatursint
                                        occaecat cupidatat non proident culpa.</p>
                                    <div class="head_img">
                                        <img src={require('./image/line.png')}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={12} sm={12} xs={12}>
                        <div class="blogs">
                            <div class="entry_img">
                                <a href="#">
                                    <img src={require('./image/E1.jpg')}></img>
                                </a>
                            </div>
                            <div class="entry_desc">
                                <div class="date flex">
                                    <span>Oct 20, 2017</span>
                                    <p>/</p>
                                    <span>barbers</span>
                                </div>
                                <h4>Foil shaver versus clippers & trimmers</h4>
                                <p className="entry_txt">
                                    Are you a dedicated razor shaver? dude who hasn't really thought about trying a different..
                                </p>
                                <div class="entry_btn">
                                    <a href="#">read more
                                        <i><MdOutlineKeyboardDoubleArrowRight></MdOutlineKeyboardDoubleArrowRight></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} xs={12}>
                        <div class="blogs">
                            <div class="entry_img">
                                <a href="#">
                                    <img src={require('./image/E2.jpg')}></img>
                                </a>
                            </div>
                            <div class="entry_desc">
                                <div class="date flex">
                                    <span>Oct 15, 2017</span>
                                    <p>/</p>
                                    <span>Styles</span>
                                </div>
                                <h4>Men’s hairstyles for all face shapes</h4>
                                <p className="entry_txt">
                                    Most of the time, men don't know the haircuts that suit their face shape - but don't worry, we're here to..
                                </p>
                                <div class="entry_btn">
                                    <a href="#">read more
                                        <i><MdOutlineKeyboardDoubleArrowRight></MdOutlineKeyboardDoubleArrowRight></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} xs={12}>
                        <div class="blogs">
                            <div class="entry_img">
                                <a href="#">
                                    <img src={require('./image/E3.jpg')}></img>
                                </a>
                            </div>
                            <div class="entry_desc">
                                <div class="date flex">
                                    <span>Oct 25, 2017</span>
                                    <p>/</p>
                                    <span>Haircut</span>
                                </div>
                                <h4>Basic tips for styling men’s hair</h4>
                                <p className="entry_txt">
                                    he first tip is to choose a hairstyle that’s realistic for your lifestyle, hair type, and general image..
                                </p>
                                <div class="entry_btn">
                                    <a href="#">read more
                                        <i><MdOutlineKeyboardDoubleArrowRight></MdOutlineKeyboardDoubleArrowRight></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}
export default Blog
import {Carousel,Container} from 'react-bootstrap';
const Jumbotron = ({title}) =>{
    return(
        <section className="carousel-section">
        <Carousel>
                <Carousel.Item>
                    <img src="/vendor/images/bgimage.jpg" className="carousel-image d-block w-200" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            <Carousel.Item>
                    <img src="/vendor/images/bgimage.jpg" className="d-block w-200" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            <Carousel.Item>
                    <img src="/vendor/images/bgimage.jpg" className="d-block w-200" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>

    )
}
export default Jumbotron;
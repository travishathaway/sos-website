import * as React from "react"

import Carousel from 'react-bootstrap/Carousel';


const FrontPageCarousel = () => {
  return (
    <div className="front-page-carousel">
      <Carousel fade>
        <Carousel.Item>
          <div className="img-container">
            <picture className="img-fluid">
              <source srcset="https://placekitten.com/1440/587" media="(min-width: 1200px)" type="image/jpeg" />
              <source srcset="https://placekitten.com/768/515" media="(min-width: 768px)" type="image/jpeg" />
              <source srcset="https://placekitten.com/580/460" media="(min-width: 576px)" type="image/jpeg" sizes="100vw" />
              <source srcset="https://placekitten.com/540/760" type="image/jpeg" sizes="100vw" />
              <img src="https://placekitten.com/1800/600" alt="Kitten placeholder image" className="img-fluid" />
            </picture>
          </div>
          <Carousel.Caption className="front-page-carousel-caption">
            <h1 className="mt-3 mb-1">First feature title</h1>
            <p className="d-sm-none d-md-block">
              This is a short text that will briefly describe this feature.
            </p>
            <a href="#" title="read article" className="btn btn-primary">
              Read more &nbsp;<i className="bi bi-arrow-right-circle-fill"></i>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img-container">
            <picture className="img-fluid">
              <source srcset="https://placebear.com/1440/587" media="(min-width: 1200px)" type="image/jpeg" />
              <source srcset="https://placebear.com/768/515" media="(min-width: 768px)" type="image/jpeg" />
              <source srcset="https://placebear.com/580/460" media="(min-width: 576px)" type="image/jpeg" sizes="100vw" />
              <source srcset="https://placebear.com/540/760" type="image/jpeg" sizes="100vw" />
              <img src="https://placebear.com/1800/600" alt="Bear placeholder image" className="img-fluid" />
            </picture>
          </div>
          <Carousel.Caption className="front-page-carousel-caption">
            <h1 className="mt-3 mb-1">Longer title with more than just two or three words</h1>
            <p className="d-sm-none d-md-block">
              This is a short text that will briefly describe this feature.
            </p>
            <a href="#" title="read article" className="btn btn-primary">
              Read more &nbsp;<i className="bi bi-arrow-right-circle-fill"></i>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img-container">
            <picture className="img-fluid">
              <source srcset="https://picsum.photos/1440/587" media="(min-width: 1200px)" type="image/jpeg" />
              <source srcset="https://picsum.photos/768/515" media="(min-width: 768px)" type="image/jpeg" />
              <source srcset="https://picsum.photos/580/460" media="(min-width: 576px)" type="image/jpeg" sizes="100vw" />
              <source srcset="https://picsum.photos/540/760" type="image/jpeg" sizes="100vw" />
              <img src="https://picsum.photos/1800/600" alt="Bear placeholder image" className="img-fluid" />
            </picture>
          </div>
          <Carousel.Caption className="front-page-carousel-caption">
            <h1 className="mt-3 mb-1">An even longer title that has even more words than the previous title</h1>
            <p className="d-sm-none d-md-block">
              This is a short text that will briefly describe this feature.
            </p>
            <a href="#" title="read article" className="btn btn-primary">
              Read more &nbsp;<i className="bi bi-arrow-right-circle-fill"></i>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default FrontPageCarousel



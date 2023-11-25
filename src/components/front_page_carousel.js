import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Carousel from 'react-bootstrap/Carousel';


const FrontPageCarousel = (props) => {
  const {items} = props

  return (
    <div className="front-page-carousel">
      <Carousel fade>
        {items.map(item => {
          const featuredImage = getImage(item.frontmatter.featured_image.src)
          const featuredImageSmall = getImage(item.frontmatter.featured_image_small.src)
          const featuredImageMedium = getImage(item.frontmatter.featured_image_medium.src)
          const featuredImageAlt = item.frontmatter.featured_image.alt

          return (
            <Carousel.Item>
              <div className="img-container">
                <div className="d-none d-lg-block">
                  <GatsbyImage
                    image={featuredImage}
                    alt={featuredImageAlt}
                  />
                </div>
                <div className="d-none d-md-block d-lg-none">
                  <GatsbyImage
                    image={featuredImageMedium}
                    alt={featuredImageAlt}
                  />
                </div>
                <div className="d-block d-md-none">
                  <GatsbyImage
                    image={featuredImageSmall}
                    alt={featuredImageAlt}
                  />
                </div>
              </div>
              <Carousel.Caption className="front-page-carousel-caption">
                <h1 className="mt-3 mb-1">{item.frontmatter.title}</h1>
                <p className="">
                  {item.frontmatter.description}
                </p>
                <Link to={item.fields.slug} className="btn btn-primary">
                  Read more &nbsp;<i className="bi bi-arrow-right"></i>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default FrontPageCarousel



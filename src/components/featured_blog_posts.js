import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const FeaturedBlogPosts = (props) => {
  const {items} = props

  return (
    <div className="container">
      <h2 className="mt-5">Recent blog posts</h2>
      <div className="row mt-5">
        {items.map(post => {
          const featuredImage = getImage(post.frontmatter.featured_image.src)
          const featuredImageAlt = post.frontmatter.featured_image.alt
          const featuredImageNarrow = getImage(post.frontmatter.featured_image_narrow.src)

          return (
            <div className="col-12 mb-5">
              <div className="card m-3">
                <div className="row g-0">
                  <div className="col-md-4 col-lg-6 col-xl-4">
                    <div className="d-xs-block d-md-none d-lg-block">
                      <Link to={post.fields.slug} itemProp="url">
                        <GatsbyImage
                          image={featuredImage}
                          alt={featuredImageAlt}
                        />
                      </Link>
                    </div>
                    <div className="d-none d-md-block d-lg-none">
                      <Link to={post.fields.slug} itemProp="url">
                        <GatsbyImage
                          image={featuredImageNarrow}
                          alt={featuredImageAlt}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-8 col-lg-6 col-xl-8">
                    <div className="card-body">
                      <h3 className="card-title">
                        <Link to={post.fields.slug} itemProp="url">
                          {post.frontmatter.title}
                        </Link>
                      </h3>
                      <p className="card-text">{post.frontmatter.description}</p>
                      <p className="card-text"><small className="text-body-secondary">{post.frontmatter.date}</small></p>
                      <Link to={post.fields.slug} itemProps="url" className="btn btn-light">
                        Read more &nbsp;<i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedBlogPosts
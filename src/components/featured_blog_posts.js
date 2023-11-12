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
          const featured_image = getImage(post.frontmatter.featured_image.src)
          const featured_image_alt = post.frontmatter.featured_image.alt

          console.log(featured_image)

          return (
            <div className="col-6">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <GatsbyImage image={featured_image} alt={featured_image_alt} aspectRatio={2/1}/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title">
                        <Link to={post.fields.slug} itemProp="url">
                          {post.frontmatter.title}
                        </Link>
                      </h3>
                      <p className="card-text">{post.frontmatter.description}</p>
                      <p className="card-text"><small className="text-body-secondary">{post.frontmatter.date}</small></p>
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
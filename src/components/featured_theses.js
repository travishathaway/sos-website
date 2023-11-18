import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const FeaturedTheses = (props) => {
  const {items} = props

  return (
    <div className="container">
      <div className="row">
        <h2>Recent thesis additions</h2>
        {items.map(item => {
          return (
            <div className="col-4">
              <h3>
                <Link to={item.fields.slug} itemProp="url">
                  {item.frontmatter.title}
                </Link>
              </h3>
              
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedTheses
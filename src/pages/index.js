import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FrontPageCarousel from "../components/front_page_carousel"
import FeaturedBlogPosts from "../components/featured_blog_posts"
import FeaturedTheses from "../components/featured_theses"


const SiteIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const blogs = data.blogs.nodes
  const theses = data.theses.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <FrontPageCarousel />
      <FeaturedBlogPosts items={blogs} />
      <div className="container mt-5 mb-5">
        <hr />
      </div>
      <FeaturedTheses items={theses} />
    </Layout>
  )
}

export default SiteIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    blogs: allMarkdownRemark(
        sort: { frontmatter: { date: DESC } },
        filter: { fields: { content_type: { eq: "blog" } } }
        limit: 2
      ) 
    {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featured_image {
            src {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 0.65
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            alt
          }
        }
      }
    }
    theses:  allMarkdownRemark(
        sort: { frontmatter: { date: DESC } },
        filter: { fields: { content_type: { eq: "thesis" } } }
        limit: 3
      )
    {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

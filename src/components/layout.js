import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import SiteNav from "./site_nav"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const data = useStaticQuery(graphql`
    query SiteData {
      site {
        siteMetadata {
          title
        }
      }
    }`)

  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <>
      <SiteNav />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, School of Sustainability
        </footer>
      </div>
    </>
  )
}

export default Layout

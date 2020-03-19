import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Link} from "gatsby";

import {getPageTitle} from "../helpers/helper"

const MoviePage = (args) => {
    const { pageContext } = args;
    const node = pageContext.node;

    return (
      <Layout>
        <SEO title={getPageTitle(pageContext, node)} />
          <div>
              <h1>{node.displayName}</h1>
              <p>{node.data.abstract}</p>
              <img src={node.data.photos[0].url_w800} alt={node.data.photos[0].attachments[0].name} />
              <p><i>{node.data.subtitle}</i></p>
          </div>
          <p>
            <Link to={`${pageContext.listPageUrl}`}>Back to movies</Link>
          </p>
      </Layout>
    )
}

export default MoviePage

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Link} from "gatsby";
import {getPageTitle} from "../helpers/helper";

const PersonPage = (args) => {
    const { pageContext } = args
    const node = pageContext.node

    return (
      <Layout>
        <SEO  title={getPageTitle(pageContext, node)} />
          <div>
              <h1>{node.displayName}</h1>
              <p>{node.data.bio}</p>
              <img src={node.data.photos[0].imageUrl} alt={node.data.photos[0].attachments[0].altImageText}/>
          </div>
          <p>
            <Link to={`${pageContext.listPageUrl}`}>Back to persons</Link>
          </p>
      </Layout>
    )
}

export default PersonPage

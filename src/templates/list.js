import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Link} from "gatsby";
import {getPageTitle} from "../helpers/helper";

const _ = require(`lodash`)

const ListPage = (args) => {
    const { pageContext } = args
    return (
      <Layout>
        <SEO title={getPageTitle(pageContext)} />
        <h1>{pageContext.title}</h1>
          {
              pageContext.nodes.map(node => (
                <div key={node.id}>
                    {pageContext.detailsPageUrl && pageContext.detailsPageKey &&
                        <>
                            <Link to={`${pageContext.detailsPageUrl}/${_.kebabCase(node[pageContext.detailsPageKey])}`}>
                                {node.displayName}
                            </Link>
                            <br/>
                        </>
                    }
                    {!(pageContext.detailsPageUrl && pageContext.detailsPageKey) && <span>{node.displayName}</span>}
                </div>
          ))
          }<br/>
      </Layout>
    )
}

export default ListPage

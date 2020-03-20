import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello there!</h1>
    <p>Easily fetch data from Enonic XP via Headless API and render it with Gatsby.</p>
    <p>Click the links below to open pages automatically generated from data provided by Enonic Headless
    starter via GraphQL</p>
    <p>
        <ul>
            <li><Link to="/movies">Go to movies</Link></li>
            <li><Link to="/persons">Go to persons</Link></li>
        </ul>
    </p>
  </Layout>
)

export default IndexPage

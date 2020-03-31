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
    <Link to="/movies/">Open movies</Link><br/>
    <Link to="/persons/">Open persons</Link>

  </Layout>
)

export default IndexPage

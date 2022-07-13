import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { XpLogo } from "../components/xpLogo"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <XpLogo />
    </div>
    <div style={{ marginBottom: `1rem` }}>
      <Link to="/movies/">Open movies</Link><br/>
      <Link to="/persons/">Open persons</Link>
    </div>

  </Layout>
)

export default IndexPage

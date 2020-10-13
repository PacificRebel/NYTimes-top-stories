import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TopStories from "../components/TopStories"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>New York Times top stories</h1>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <TopStories />
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

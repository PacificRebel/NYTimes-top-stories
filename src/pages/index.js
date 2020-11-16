import React from "react"

import Layout from "../components/layout"
import TopStories from "../components/TopStories"

const IndexPage = () => (
  <Layout>
        <div class="container">
          <section class="cards">

              <div class="header">
                <p><h2> New York Times Top Stories </h2></p>
                <p><TopStories /></p>
              </div>

          </section>
        </div>
    </Layout>
)

export default IndexPage

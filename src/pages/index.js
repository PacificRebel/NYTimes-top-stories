import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TopStories from "../components/TopStories"

import { Column } from 'simple-flexbox';

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

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TopStories from "../components/TopStories"

import { Column } from 'simple-flexbox';

const IndexPage = () => (
  <Layout>
    <Column>

        <div class="container">
          <section class="cards">

            <article class="card">
              <div class="header">
                <p><h2> Top Stories </h2></p>
                <p><TopStories /></p>
              </div>
            </article>

            <article class="card">
              <div class="header">
                <Link to="/page-2/">Go to page 2</Link> <br />
              </div>
            </article>

            <article class="card">
              <div class="header">
                <Link to="/page-2/">Go to page 2</Link> <br />
              </div>
            </article>

            <article class="card">
              <div class="header">
                <Link to="/page-2/">Go to page 2</Link> <br />
              </div>
            </article>

            <article class="card">
              <div class="header">
                <Link to="/page-2/">Go to page 2</Link> <br />
              </div>
            </article>

          </section>
        </div>
      </Column>
    </Layout>
)

export default IndexPage

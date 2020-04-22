import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const skills = () => (
  <Layout>
    <SEO title="" />
    
    <header id="showcase">
      <h1>Kamiyab Asamadi</h1>
      <p>A Full Stack JavaScript Developer  </p>
      <div className="btngroup">
        <a href="/skills" class="button">Skills</a>
        <a href="#" class="button">Works</a>
        <a href="#" class="button">Conatct</a>
      </div>
    </header>
    
  </Layout>
)

export default skills

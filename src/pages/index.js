import React from "react"
import { Link } from 'gatsby'
import SEO from "../components/seo"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="" />
    <div class="content">
      <div class="card">
        <div class="firstinfo">
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQEItdNtDtzQSA/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=X1jG8uVKZ5Wz3ngdTdfp9p-AcJZtXqzzuG7oydhiFcA"/>
          <div class="profileinfo">
            <h1>Kamiyab Asamadi</h1>
            <h3>JavaScript Developer</h3>
            <p class="bio">JavaScript is ❤️</p>
          </div>
        </div>
      </div>
      <div class="badgescard"> 
        <a href="https://twitter.com/leancerrr" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://github.com/leancer" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/kamiyabasamadi" target="_blank"><i class="fab fa-linkedin"></i></a>
      </div>
    </div>
  </Layout>
)

export default IndexPage

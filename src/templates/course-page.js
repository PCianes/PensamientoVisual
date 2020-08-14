import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { RiArrowRightSLine } from 'react-icons/ri'

import Layout from '../components/layout'
import SEO from '../components/seo'

export const pageQuery = graphql`
  query CourseQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        tagline2
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`
const CoursePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.fluid
    : ''

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.tagline} />
      <div className="home-banner grids col-1 sm-2 blog-post-content">
        <div>
          <h1 class="title">{frontmatter.title}</h1>
          <p class="tagline">{frontmatter.tagline}</p>
          <div className="description">{frontmatter.tagline2}</div>
          <Link to={frontmatter.cta.ctaLink} className="button">
            {frontmatter.cta.ctaText}
            <span class="icon -right">
              <RiArrowRightSLine />
            </span>
          </Link>
        </div>
        <div>
          {Image ? (
            <Img
              fluid={Image}
              alt={frontmatter.title + ' - Featured image'}
              className="featured-image-course"
              style={{ maxWidth: '250px' }}
            />
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="blog-post-content">
        <article dangerouslySetInnerHTML={{ __html: html }} />
        <Link to={frontmatter.cta.ctaLink} className="button">
          {frontmatter.cta.ctaText}
          <span class="icon -right">
            <RiArrowRightSLine />
          </span>
        </Link>
      </div>
    </Layout>
  )
}

export default CoursePage

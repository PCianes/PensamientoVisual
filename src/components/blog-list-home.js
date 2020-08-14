import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { RiArrowDownLine, RiArrowRightSLine } from 'react-icons/ri'

import PostCard from './post-card'

const PostMaker = ({ data }) => (
  <section className="home-posts">
    <h2>
      Últimos artículos del <strong>Blog</strong>{' '}
      <span className="icon -right">
        <RiArrowDownLine />
      </span>
    </h2>
    <div className="grids col-1 sm-2 lg-3">{data}</div>
    <Link className="button" to="/blog">
      Ver todos
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>
  </section>
)

export default function BlogListHome() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { type: { eq: "post" } } }
            limit: 21
          ) {
            edges {
              node {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  slug
                  title
                  featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 540, maxHeight: 360, quality: 70) {
                        ...GatsbyImageSharpFluid
                        ...GatsbyImageSharpFluidLimitPresentationSize
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const posts = data.allMarkdownRemark.edges
          .filter(edge => !!edge.node.frontmatter.date)
          .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
        return <PostMaker data={posts} />
      }}
    />
  )
}

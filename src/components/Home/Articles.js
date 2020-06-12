import React from 'react'
import Article from './Article'
import Title from '../Globals/Title'
import { StaticQuery, graphql } from 'gatsby'

const getBlogPosts = graphql`
{
    blogPost:allContentfulHappyBlog {
      edges {
        node {
          id
          title
          description {
            description
          }
          image{
            fluid{
                src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default function BlogPosts() {
    return (
        <StaticQuery query={getBlogPosts} render={data => {
            return (
                <section>
                    <section className="py-5">
                        <div className="container">
                            <Title title="Articles" />
                            <div className="row">
                                {data.blogPost.edges.map(({ node: article }) => {
                                    return <Article key={article.id} article={article} />
                                })}
                            </div>
                        </div>
                    </section>
                </section>
            )
        }} />
    );
}


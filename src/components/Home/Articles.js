import React from 'react'
import Article from './Article'
import Title from '../Globals/Title'
import { StaticQuery, graphql } from 'gatsby'

const getBlogPosts = graphql`
{
    blog:allContentfulHappyBlog {
      edges {
        node {
          id
          title
          description {
            description
          }
          image {
            fixed {
              src
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
                                {data.blog.edges.map(() => {
                                    return <Article />
                                })}
                            </div>
                        </div>
                    </section>
                </section>
            )
        }} />
    );
}


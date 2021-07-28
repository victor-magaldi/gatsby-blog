import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import PostItem from '../components/PostItem'
import { useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
    const { allMarkdownRemark } = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark {
                    edges {
                        node {
                            frontmatter {
                                background
                                category
                                date(
                                    locale: "pt-br"
                                    formatString: "DD [de] MMMM [de] YYYY"
                                )
                                description
                                title
                            }
                            timeToRead
                        }
                    }
                }
            }
        `
    )
    const postList = allMarkdownRemark.edges

    return (
        <Layout>
            <Seo title="Home" />
            {postList.map(
                ({
                    node: {
                        frontmatter: {
                            background,
                            category,
                            date,
                            description,
                            title,
                        },
                        timeToRead,
                    },
                }) => (
                    <PostItem
                        slug="/about/"
                        background={background}
                        category={category}
                        date={date}
                        timeToRead={timeToRead}
                        title={title}
                        description={description}
                    />
                )
            )}
        </Layout>
    )
}

export default IndexPage

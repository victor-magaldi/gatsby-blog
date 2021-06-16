import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import img from 'gatsby-plugin-image'

const Avatar = () => {
    const { avatarImg } = useStaticQuery(
        graphql`
            query {
                avatarImg: file(relativePath: { eq: "avatar.png" }) {
                    childImageSharp {
                        fixed(maxWidth: 640, quality: 608) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    )
}

export default Avatar

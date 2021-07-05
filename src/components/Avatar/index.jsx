import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            {
                avatarImage: file(relativePath: { eq: "avatar.png" }) {
                    childImageSharp {
                        gatsbyImageData(
                            width: 60
                            height:60
                            placeholder: TRACED_SVG
                            layout: CONSTRAINED
                        )
                    }
                }
            }
        `
    )

    return <GatsbyImage image={avatarImage.childImageSharp.gatsbyImageData} />
}

export default Avatar

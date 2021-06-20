import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Avatar = () => {
    const data = useStaticQuery(
        graphql`
            {
                file(relativePath: { eq: "avatar.png" }) {
                    childImageSharp {
                        fixed {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    )
    console.info(data.file.childImageSharp.fixed)

    return (
        <GatsbyImage
            image={data.file.childImageSharp.fixed}
            src={data.file.childImageSharp.fixed.src}
            alt="test"
            height={33}
            width={33}
        />
    )
}

export default Avatar

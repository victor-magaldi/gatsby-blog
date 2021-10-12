import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            {
                avatarImage: file(relativePath: { eq: "avatar.png" }) {
                    childImageSharp {
                        gatsbyImageData(
                            width: 60
                            height: 60
                            placeholder: TRACED_SVG
                            layout: CONSTRAINED
                        )
                    }
                }
            }
        `
    )

    return (
        <S.AvatarWrapper
            image={avatarImage.childImageSharp.gatsbyImageData}
            alt="avatar"
        />
    )
}

export default Avatar

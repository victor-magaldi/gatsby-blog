import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'

// usando staticQuery
// import { StaticQuery, graphql } from 'gatsby'

const Profile = () => {
    const {
        site: {
            siteMetadata: { title, position, description },
        },
    } = useStaticQuery(graphql`
        query MySiteMetaData {
            site {
                siteMetadata {
                    title
                    position
                    description
                    author
                }
            }
        }
    `)

    return (
        <>
            <Avatar />
            <h1>{title}</h1>
            <h2>{position}</h2>
            <p>{description}</p>
        </>
    )
}
// usando StaticQuery
// const Profile = () => {
//     return (
//         <StaticQuery
//             query={graphql`
//                 query MySiteMetaData {
//                     site {
//                         siteMetadata {
//                             title
//                             position
//                             description
//                             author
//                         }
//                     }
//                 }
//             `}
//             render={(data) => (
//                 <div className="profile-wrapper">
//                     <h1>{data.site.siteMetadata.title}</h1>
//                     <h2>{data.site.siteMetadata.position}</h2>
//                     <p>{data.site.siteMetadata.description}</p>
//                 </div>
//             )}
//         />
//     )
// }
export default Profile

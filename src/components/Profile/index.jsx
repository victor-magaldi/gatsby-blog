import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Profile = () => {
    return (
        <StaticQuery
            query={graphql`
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
            `}
            render={(data) => (
                <div className="profile-wrapper">
                    <h1>{data.site.siteMetadata.title}</h1>
                    <h2>{data.site.siteMetadata.position}</h2>
                    <p>{data.site.siteMetadata.description}</p>
                </div>
            )}
        />
    )
}
export default Profile

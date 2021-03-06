const queries = require('./src/utils/algoliaQueries')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })

module.exports = {
    siteMetadata: {
        title: `My blog`,
        position: `Front End Developer`,
        description: `A blog about Front End development`,
        author: `@victor`,
        siteUrl: `https://victor-magaldi.dev`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        'gatsby-plugin-transition-link',
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `uploads`,
                path: `${__dirname}/static/assets/img`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/posts`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-relative-images',
                        options: {
                            name: 'uploads',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 960,
                            linkImagesToOriginal: false,
                        },
                    },
                    `gatsby-remark-lazy-load`,
                    `gatsby-remark-prismjs`,
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-algolia`,
            options: {
                appId: process.env.GATSBY_ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_ADMIN_KEY,
                indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
                queries,
                chunkSize: 10000, // default: 1000
                enablePartialUpdates: true,
                matchFields: ['date'],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Victor Dev Blog`,
                short_name: `blog dev`,
                start_url: `/`,
                background_color: `#283040`,
                theme_color: `#283040`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify-cms`,
    ],
}

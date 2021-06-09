import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout>
            <Seo title="about" />
            <h1>about</h1>
            <ul>
                <Link to="/" activeStyle={{ border: 'solid red 1px' }}>
                    Home
                </Link>
            </ul>
        </Layout>
    )
}
export default AboutPage

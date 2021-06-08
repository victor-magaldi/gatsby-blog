import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <h1>Hi blog aaassas</h1>
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/" activeStyle={{ border: 'solid red 1px' }}>
                    Home
                </Link>
            </li>
        </ul>

        <p>
            <Link to="/page-2/">Go to page 2</Link> <br />
        </p>
    </Layout>
)

export default IndexPage

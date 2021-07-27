import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import PostItem from '../components/PostItem'

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <h1>Home</h1>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <p>
            <Link to="/page-2/">Go to page 2</Link> <br />
        </p>
    </Layout>
)

export default IndexPage

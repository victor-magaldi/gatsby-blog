import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import PostItem from '../components/PostItem'

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <PostItem
            slug="/about/"
            category="Misc"
            background="blue"
            date="30 de Julho de 2019"
            timeToRead="5"
            title="Blog novo"
            description="Algumas razões para você ter sua própria plataforma ao invés de soluções como o Medium."
        />
    </Layout>
)

export default IndexPage

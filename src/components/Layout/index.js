import * as React from 'react'
import PropTypes from 'prop-types'

import GlobalStyles from '../../style/global'
import Sidebar from '../Sidebar'
import * as S from './styled'

const Layout = ({ children }) => {
    return (
        <S.LayoutWrapper>
            <GlobalStyles />
            <Sidebar />
            <S.LayoutMain>{children}</S.LayoutMain>
        </S.LayoutWrapper>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

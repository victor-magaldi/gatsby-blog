import * as React from 'react'
import PropTypes from 'prop-types'

import GlobalStyles from '../../style/global'
import Profile from '../Profile'
import * as S from './styled'

const Layout = ({ children }) => {
    return (
        <S.LayoutWrapper>
            <GlobalStyles />
            <aside>
                <Profile />
            </aside>
            <S.LayoutMain>{children}</S.LayoutMain>
        </S.LayoutWrapper>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

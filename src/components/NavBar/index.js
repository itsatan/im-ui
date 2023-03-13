import React from 'react'
import PropTypes from 'prop-types'
import StyledNavBar, { MenuIcon, StyleMenuItem } from './style'
import Badge from 'components/Badge'

function NavBar ({ children, ...rest }) {
    return (
        <StyledNavBar {...rest}>
            {children}
        </StyledNavBar>
    )
}

function MenuItem ({ icon, active, showBadge, ...rest }) {
    return (
        <StyleMenuItem active={active} {...rest}>
            <a href="https://www.baidu.com">
                <Badge show={showBadge}>
                    <MenuIcon active={active} icon={icon} />
                </Badge>
            </a>
        </StyleMenuItem>
    )
}

NavBar.propTypes = {
    children: PropTypes.any
}

export default NavBar
export { MenuItem }
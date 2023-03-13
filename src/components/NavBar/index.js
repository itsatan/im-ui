import React from 'react'
import StyledNavBar, { MenuIcon, MenuItems, StyleMenuItem } from './style'
import Badge from 'components/Badge'
import Avatar from 'components/Avatar'
import profileImage from 'assets/images/face-male-1.jpg'
import { faCog, faCommentDots, faEllipsisH, faFolder, faStickyNote, faUsers } from '@fortawesome/free-solid-svg-icons'
import "styled-components/macro"

function NavBar ({ ...rest }) {
    return (
        <StyledNavBar {...rest}>
            <Avatar src={profileImage} status="online" />
            <MenuItems>
                <MenuItem showBadge active icon={faCommentDots} />
                <MenuItem icon={faUsers} />
                <MenuItem icon={faFolder} />
                <MenuItem icon={faStickyNote} />
                <MenuItem icon={faEllipsisH} />
                <MenuItem icon={faCog} css={`align-self:end;`} />
            </MenuItems>
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

NavBar.propTypes = {}

export default NavBar
export { MenuItem }
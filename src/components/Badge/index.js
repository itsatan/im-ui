import React from 'react'
import PropTypes from 'prop-types'
import StyledBadge, { Count } from './style'

function Badge ({
    count = 0,
    show = false,
    showZero = false,
    children,
    ...rest
}) {
    return (
        <StyledBadge variant={children ? 'dot' : 'default'} count={count} show={show} showZero={showZero} {...rest}>
            {children || <Count>{count}</Count>}
        </StyledBadge>
    )
}

Badge.propTypes = {
    count: PropTypes.number,
    show: PropTypes.bool,
    showZero: PropTypes.bool,
    children: PropTypes.any
}

export default Badge
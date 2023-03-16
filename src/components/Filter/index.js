import React from 'react'
import PropTypes from 'prop-types'
import StyledFilter, { Action, Filters } from './style'
import Text from 'components/Text'

function Filter ({ children, ...rest }) {
    return (
        <StyledFilter {...rest}>
            {children}
        </StyledFilter>
    )
}

Filter.Filters = ({ children, label, ...rest }) => {
    return (
        <Filters {...rest}>
            <Text type='secondary'>{label}：</Text>
            {children}
        </Filters>
    )
}

Filter.Action = ({ children, label, ...rest }) => {
    return (
        <Action {...rest}>
            <Text type='secondary'>{label}</Text>
            {children}
        </Action>
    )
}

Filter.propTypes = {
    children: PropTypes.any
}

export default Filter
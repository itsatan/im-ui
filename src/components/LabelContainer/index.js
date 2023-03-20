import React from 'react'
import PropTypes from 'prop-types'
import StyledLabelContainer from './style'
import Text from 'components/Text'

function LabelContainer ({children,label,...rest}) {
    return (
        <StyledLabelContainer {...rest}>
            {label && <Text style={{ marginBottom: 8 }}>{label}:</Text>}
            {children}
        </StyledLabelContainer>
    )
}

LabelContainer.propTypes = {
    children: PropTypes.any,
    label:PropTypes.string,
}

export default LabelContainer
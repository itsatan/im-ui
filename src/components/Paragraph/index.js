import React from 'react'
import PropTypes from 'prop-types'
import StyledParagraph from './style'

function Paragraph ({ children, ellipsis, ...rest }) {
    return (
        // 在此处直接定义标签为 P
        <StyledParagraph as="p" ellipsis={ellipsis} {...rest}>
            {children}
        </StyledParagraph>
    )
}

Paragraph.propTypes = {
    children: PropTypes.any,
    ellipsis: PropTypes.bool,
    type: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    size: PropTypes.oneOf([
        'xxsmall',
        'xsmall',
        'small',
        'normal',
        'medium',
        'large',
        'xlarge',
        'xxlarge'
    ]),
    bold:PropTypes.bool,
}

export default Paragraph
import React from 'react'
import StyledSeperator from './style'

function Seperator ({children,...rest}) {
    return (
        <StyledSeperator {...rest}>
            {children}
        </StyledSeperator>
    )
}

Seperator.propTypes = {}

export default Seperator
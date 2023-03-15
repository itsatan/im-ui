import StyledText from 'components/Text/style'
import styled, { css } from 'styled-components'

// 使用Text组件定义的样式
const StyledParagraph = styled(StyledText)`
    ${({ ellipsis }) => ellipsis && css`
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    `}
`

export default StyledParagraph
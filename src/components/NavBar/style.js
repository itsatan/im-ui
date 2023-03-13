import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
import { activeBar } from 'utils/mixins'

const StyleMenuItem = styled.div`
    & > a {
        width: 100%;
        height: 74px;
        display: flex;
        justify-content: center;
        align-items: center;
        ${activeBar()}
        ${({ active }) => active ? "" : `&::before,&::after { height: 0}`}
    }
`

const MenuIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 24px;
    opacity: ${({ active }) => (active ? 1 : 0.3)};
`

const StyledNavBar = styled.div``;

export default StyledNavBar
export { StyleMenuItem, MenuIcon }
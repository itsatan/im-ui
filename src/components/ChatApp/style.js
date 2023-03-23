import styled from 'styled-components';

const Nav = styled.nav`
    flex-shrink: 0;
`;

const Sidebar = styled.aside`
    min-width: 344px;
    max-width: 448px;
    height: 100vh;
    flex: 1;
    background: ${({ theme }) => theme.gradientGray};
`;

const Content = styled.main`
    flex: 2;
    position: relative;
`;

const Drawer = styled.div`
    max-width: 310px;
    width: ${({ show }) => show ? '310px' : '0px'}
`;

const StyledChatApp = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

export default StyledChatApp
export { Nav, Sidebar, Content, Drawer }
import Conversation from 'components/Conversation'
import MessageList from 'components/MessageList'
import NavBar from 'components/NavBar'
import Profile from 'components/Profile'
import React from 'react'
import StyledChatApp, { Content, Drawer, Nav, Sidebar } from './style'

function ChatApp ({ ...rest }) {
    return (
        <StyledChatApp {...rest}>
            <Nav>
                <NavBar />
            </Nav>
            <Sidebar>
                <MessageList />
            </Sidebar>
            <Content>
                <Conversation />
            </Content>
            <Drawer>
                <Profile />
            </Drawer>
        </StyledChatApp>
    )
}

ChatApp.propTypes = {}

export default ChatApp
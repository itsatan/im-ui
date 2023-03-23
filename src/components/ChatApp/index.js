import ContactList from 'components/ContactList'
import Conversation from 'components/Conversation'
import EditProfile from 'components/EditProfile'
import FileList from 'components/FileList'
import MessageList from 'components/MessageList'
import NavBar from 'components/NavBar'
import NoteList from 'components/NoteList'
import Profile from 'components/Profile'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StyledChatApp, { Content, Drawer, Nav, Sidebar } from './style'

function ChatApp ({ ...rest }) {
    return (
        <StyledChatApp {...rest}>
            <Nav>
                <NavBar />
            </Nav>
            <Sidebar>
                <Routes>
                    <Route exact path='/' element={<MessageList />} />
                    <Route exact path='/contacts' element={<ContactList />} />
                    <Route exact path='/files' element={<FileList />} />
                    <Route exact path='/notes' element={<NoteList />} />
                    <Route path='/settings' element={<EditProfile />} />
                </Routes>
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
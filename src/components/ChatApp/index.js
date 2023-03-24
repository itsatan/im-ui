import BlockedList from 'components/BlockedList'
import ContactList from 'components/ContactList'
import Conversation from 'components/Conversation'
import EditProfile from 'components/EditProfile'
import FileList from 'components/FileList'
import MessageList from 'components/MessageList'
import NavBar from 'components/NavBar'
import NoteList from 'components/NoteList'
import Profile from 'components/Profile'
import Settings from 'components/Settings'
import VideoCall from 'components/VideoCall'
import React, { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useTransition } from 'react-spring'
import StyledChatApp, { Content, Drawer, Nav, Sidebar } from './style'
import {animated} from 'react-spring'

function ChatApp ({ ...rest }) {
    const [showDrawer, setShowDrawer] = useState(false)
    const [videoCalling, setVideoCalling] = useState(false)
    const location = useLocation()
    // params1 监听某个参数变化
    // params2 动画效果配置
    const transitions = useTransition(location, {
        form: { opacity: 0, transform: 'translate3d(-100px ,0 ,0)' },
        enter: { opacity: 1, transform: 'translate3d(0 ,0 ,0)' },
        leave: { opacity: 0, transform: 'translate3d(-100px ,0 ,1)' },
    })
    return (
        <StyledChatApp {...rest}>
            <Nav>
                <NavBar />
            </Nav>
            <Sidebar>
                {transitions(({ item, props }) => (
                    <animated.div style={props}>
                        <Routes location={item}>
                            <Route path='/' element={<MessageList />} />
                            <Route path='/contacts' element={<ContactList />} />
                            <Route path='/files' element={<FileList />} />
                            <Route path='/notes' element={<NoteList />} />
                            <Route path='/settings/*' element={<EditProfile />} />
                        </Routes>
                    </animated.div>
                ))}
            </Sidebar>
            <Content>
                {videoCalling && <VideoCall onHangOffClicked={() => setVideoCalling(false)} />}
                <Routes>
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/settings/blocked' element={<BlockedList />} />
                    <Route path='/' element={
                        (
                            <Conversation
                                onAvatarClick={() => setShowDrawer(true)}
                                onVideoClick={() => setVideoCalling(true)}
                            />
                        )
                    } />
                </Routes>
            </Content>
            <Drawer show={showDrawer}>
                <Profile onCloseClick={() => setShowDrawer(false)} />
            </Drawer>
        </StyledChatApp>
    )
}

ChatApp.propTypes = {}

export default ChatApp
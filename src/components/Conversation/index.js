import React from 'react'
import StyledConversation, { Conversations, MyChatBubble } from './style'
import TitleBar from 'components/TitleBar'
import ChatBubble from 'components/ChatBubble'
import VoiceMessage from 'components/VoiceMessage'
import Emoji from 'components/Emoji'
import face3 from 'assets/images/face-male-3.jpg'
import Footer from 'components/Footer'

function Conversation ({ children, onAvatarClick,onVideoClick, ...rest }) {
    return (
        <StyledConversation {...rest}>
            <TitleBar
                onAvatarClick={onAvatarClick}
                onVideoClick={onVideoClick}
                avatarSrc={face3}
                avatarStatus='online'
                userName='慕容天宇'
                userStatus='在线'
                time=' · 最后阅读：1分钟前'
            />
            <Conversations>
                <ChatBubble time='昨天 下午14:26'>Hi 小宇，忙什么呢？</ChatBubble>
                <MyChatBubble time='昨天 下午16:30'>
                    Hello 啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！
                </MyChatBubble>
                <ChatBubble time='昨天 下午17:15'>
                    <VoiceMessage time='01:24' />
                </ChatBubble>
                <MyChatBubble time='昨天 下午18:30'>
                    明天约一把王者荣耀，不连赢5把不罢休
                    <Emoji label='victory'>✌️</Emoji>
                </MyChatBubble>
            </Conversations>
            <Footer />
        </StyledConversation>
    )
}

Conversation.propTypes = {}

export default Conversation
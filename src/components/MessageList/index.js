import React from 'react'
import StyledMessageList, { ChatList } from './style'
import MessageCard from 'components/MessageCard'

import face1 from 'assets/images/face-male-1.jpg'
import FilterList from 'components/FilterList'

function MessageList ({...rest }) {
    return (
        <StyledMessageList {...rest}>
            <FilterList options={['最新消息优先', '在线好友优先']} actionLabel='创建会话'>
                <ChatList>
                    {[1, 2, 3, 4, 5, 6].map((_, index) => (
                        <MessageCard
                            key={index}
                            active={index === 3}
                            replied={index % 3 === 0}
                            avatarSrc={face1}
                            name='李铭浩'
                            avatarStatus='online'
                            statusText='在线'
                            time='3 小时之前'
                            message='即使爬到最高的山上，一次也只能脚踏实地'
                            unreadCount={2}
                        />
                    ))}
                </ChatList>
            </FilterList>
        </StyledMessageList>
    )
}

MessageList.propTypes = {}

export default MessageList
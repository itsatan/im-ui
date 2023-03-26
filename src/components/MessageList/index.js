import React from 'react'
import StyledMessageList, { ChatList } from './style'
import MessageCard from 'components/MessageCard'

import FilterList from 'components/FilterList'
import { animated } from 'react-spring'
import useStaggeredList from 'hooks/useStaggeredList'

import messageData from 'data/messages'

function MessageList ({ ...rest }) {
    const trailAnimes = useStaggeredList(6)
    return (
        <StyledMessageList {...rest}>
            <FilterList options={['最新消息优先', '在线好友优先']} actionLabel='创建会话'>
                <ChatList>
                    {messageData.map((message, index) => (
                        <animated.div key={message.id} style={trailAnimes[index]}>
                            <MessageCard
                                key={message.id}
                                active={index === 3}
                                replied={message.replied}
                                avatarSrc={message.avatarSrc}
                                name={message.name}
                                avatarStatus={message.status}
                                statusText={message.statusText}
                                time={message.time}
                                message={message.message}
                                unreadCount={message.unreadCount}
                            />
                        </animated.div>
                    ))}
                </ChatList>
            </FilterList>
        </StyledMessageList>
    )
}

MessageList.propTypes = {}

export default MessageList
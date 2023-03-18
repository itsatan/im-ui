import Emoji from 'components/Emoji'
import React from "react";
import ChatBubble from ".";

export default {
    title: "UI组件/ChatBubble",
    component: ChatBubble,
    decorators: [storyFn => <div style={{ padding: 24 }}>{storyFn()}</div>]
};

export const FromOthers = () => <ChatBubble time='昨天 下午14:26'>这是一条其他人发送的聊天信息</ChatBubble>

export const Mine = () => <ChatBubble type='mine' time='昨天 下午16:30'>这是一条我自己发送的聊天信息<Emoji label='smile'>😊</Emoji></ChatBubble>

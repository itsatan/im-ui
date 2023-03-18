import ChatBubble from 'components/ChatBubble'
import React from "react";
import VoiceMessage from ".";

export default {
    title: "UI组件/VoiceMessage",
    component: VoiceMessage
};

export const OtherVoiceMessage = () => (
    <ChatBubble time="昨天 下午18:30">
        <VoiceMessage time="01:25" />
    </ChatBubble>
);

export const MineVoiceMessage = () => (
    <ChatBubble type='mine' time="昨天 下午18:35">
        <VoiceMessage type='mine' time="01:25" />
    </ChatBubble>
);
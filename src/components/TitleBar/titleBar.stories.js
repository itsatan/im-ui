import React from "react"
import TitleBar from "."
import face3 from 'assets/images/face-male-3.jpg'

export default {
    title: "UI组件/TitleBar",
    component: TitleBar
}

export const OnlineTitleBar = () => (
    <TitleBar
        avatarSrc={face3}
        avatarStatus='online'
        userName='慕容天宇'
        userStatus='在线'
        time=' · 最后阅读：1分钟前'
    />
)

export const OfflineTitleBar = () => (
    <TitleBar
        avatarSrc={face3}
        avatarStatus='offline'
        userName='慕容天宇'
        userStatus='离线'
        time=' · 最后阅读：3小时前'
    />
)
import Icon from 'components/Icon'
import Paragraph from 'components/Paragraph'
import Seperator from 'components/Seperator'
import React from "react"
import Dropdown from "."
import { DropdownItem } from './style'
import { ReactComponent as OptionsIcon } from "assets/icons/options.svg"

export default {
    title: "UI组件/Dropdown",
    component: Dropdown
}

const dropdownContent = (
    <>
        <DropdownItem>
            <Paragraph>个人资料</Paragraph>
        </DropdownItem>
        <DropdownItem>
            <Paragraph>关闭会话</Paragraph>
        </DropdownItem>
        <Seperator />
        <DropdownItem>
            <Paragraph type='danger'>屏蔽此人</Paragraph>
        </DropdownItem>
    </>
)

export const Left = () => (
    <div style={{ height: '50vh' }}>
        <Paragraph>点击下方按钮</Paragraph>
        <Dropdown content={dropdownContent} align='left'>
            <Icon opacity={0.3} icon={OptionsIcon} />
        </Dropdown>
    </div>
)

export const Right = () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', height: '50vh' }}>
        <Paragraph>点击右侧按钮</Paragraph>
        <Dropdown content={dropdownContent} >
            <Icon opacity={0.3} icon={OptionsIcon} />
        </Dropdown>
    </div>
)
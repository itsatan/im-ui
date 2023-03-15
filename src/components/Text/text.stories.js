import React from "react"
import Text from "."

export default {
    title: "排版/Text",
    component: Text
}

export const Default = () => <Text>Default 默认</Text>

export const Secondary = () => <Text type='secondary'>Secondary 次要文本</Text>

export const Medium = () => <Text type='medium'>Medium 大小文本</Text>

export const LargeAndBold = () => <Text size='large' bold>LargeAndBold 大小文本，加粗</Text>

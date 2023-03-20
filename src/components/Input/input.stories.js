import React from "react"
import Input from "."
import Icon from 'components/Icon'
import { ReactComponent as ClipIcon } from "assets/icons/clip.svg"
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg"

export default {
    title: "UI组件/Input",
    component: Input
}

export const Default = () => <Input />

export const Search = () => <Input.Search />

export const PrefixSearch = () => <Input prefix={<Icon icon={ClipIcon} />} />

export const SuffixSearch = () => <Input suffix={<Icon icon={SmileIcon} />} />

export const WithAffix = () => (
    <Input
        prefix={<Icon icon={ClipIcon} color="#ccc" />}
        suffix={<Icon icon={SmileIcon} color="#ccc" />}
    />
)

export const InputTextWithLabel = () => <Input.Text label='昵称' />

export const InputTextWithoutLabel = () => <Input.Text />
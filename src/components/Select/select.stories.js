import Option from 'components/Option'
import React from "react";
import Select from ".";

export default {
    title: "UI组件/Select",
    component: Select
};

export const Default = () => (
    <Select>
        <Option>最新消息优先</Option>
        <Option>在线好友优先</Option>
    </Select>
)

export const FormSelect = () => (
    <Select type='form'>
        <Option>北京市</Option>
        <Option>河北省</Option>
    </Select>
)
import React from "react";
import Radio from ".";

export default {
    title: "UI组件/Radio",
    component: Radio
};

export const Default = () => <Radio>选项</Radio>

export const RadioGroup = () => (
    <Radio.Group label='请选择'>
        <Radio name='option'>选项 A</Radio>
        <Radio name='option'>选项 B</Radio>
        <Radio name='option'>选项 C</Radio>
        <Radio name='option'>选项 D</Radio>
    </Radio.Group>
)
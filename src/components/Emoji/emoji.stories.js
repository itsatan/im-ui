import React from "react";
import Emoji from ".";

export default {
    title: "UI组件/Emoji",
    component: Emoji
};

export const Default = () => (
    <div className='row-element'>
        <Emoji label='smile'>😊</Emoji>
        <Emoji label='tod o'>✅</Emoji>
        <Emoji label='clock'>⏰</Emoji>
    </div>
);
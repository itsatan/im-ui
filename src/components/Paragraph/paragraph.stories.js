import React from "react";
import Paragraph from ".";

export default {
    title: "排版/Paragraph",
    component: Paragraph
};

export const Default = () => (
    <>
        <Paragraph>京口瓜洲一水间，钟山只隔数重山。</Paragraph>
        <Paragraph>春风又绿江南岸，明月何时照我还。</Paragraph>
    </>
)

export const Ellipsis = () => (
    <>
        <Paragraph ellipsis>这是一个很长很长的段落这是一个很长很长的段落这是一个很长很长的段落这是一个很长很长的段落这是一个很长很长的段落这是一个很长很长的段落这是一个很长很长的段落这是一个很长很长的段落</Paragraph>
    </>
)

export const EllipsisSecondary = () => (
    <>
        <Paragraph ellipsis type="secondary">这是一个很长很长的段落这是一个很长很长的段落这是一个很长很长的段落这是一个很长很长的段落这是一个很长很长的段落这是一个很长很长的段落这是一个很长很长的段落这是一个很长很长的段落</Paragraph>
    </>
);

export const EllipsisBold = () => (
    <>
        <Paragraph ellipsis bold>这是一个很长很长的段落这是一个很长很长的段落这是一个很长很长的段落这是一个很长很长的段落这是一个很长很长的段落这是一个很长很长的段落这是一个很长很长的段落这是一个很长很长的段落</Paragraph>
    </>
);
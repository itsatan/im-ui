import React from "react";
import Heading from ".";

export default {
    title: "排版/Heading",
    component: Heading
};

export const H1 = () => <Heading level={1}>Heading H1</Heading>;

export const H2 = () => <Heading level={2}>Heading H2</Heading>;

export const H3 = () => <Heading level={3}>Heading H3</Heading>;

export const H4 = () => <Heading level={4}>Heading H4</Heading>;

export const H5 = () => <Heading level={5}>Heading H5</Heading>;

export const H6 = () => <Heading level={6}>Heading H6</Heading>;
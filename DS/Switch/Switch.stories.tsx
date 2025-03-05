import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SwitchWithIcons from "./Switch";

const meta: Meta = {
    title: "Example/SwitchWithIcons",
    component: SwitchWithIcons,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        onClick: { action: "clicked" },
    },
    args: {
        values: [
            { label: "valor1", icon: "icon1" },
            { label: "valor2", icon: "icon2" },
        ],
    },
};

export default meta;

const Template: StoryFn = (args: any) => <SwitchWithIcons {...args} />;

export const Default = Template.bind({});
Default.args = {};

import { Meta, StoryObj } from "@storybook/react";
import SwitchWithIcons from "./Switch";
import { fn } from "@storybook/test";

const meta = {
    title: "Example/design-system/SwitchWithIcons",
    component: SwitchWithIcons,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        onClick: { action: "clicked" },
    },
    args: {
        items: [
            { label: "valor1gsaf", icon: "icon1", value: "1" },
            { label: "valor2", icon: "icon2", value: "2" },
        ],
        onClick: fn(),
    },
} satisfies Meta<typeof SwitchWithIcons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Switch: Story = {
    args: {
        items: [
            { label: "valor1gsaf", icon: "icon1", value: "1" },
            { label: "valor2", icon: "icon2", value: "2" },
        ],
    },
};

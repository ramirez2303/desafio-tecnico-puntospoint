import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./Button";

const meta = {
    title: "Example/design-system/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["text", "outlined", "contained"],
        },
        color: { control: "select", options: ["primary", "secondary"] },
        disabled: { control: "boolean" },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
    args: {
        variant: "contained",
        color: "primary",
        children: "Contained Button",
    },
};

export const Outlined: Story = {
    args: {
        variant: "outlined",
        color: "primary",
        children: "Outlined Button",
    },
};

export const Text: Story = {
    args: {
        variant: "text",
        color: "primary",
        children: "Text Button",
    },
};

export const ContainedDisabled: Story = {
    args: {
        variant: "contained",
        disabled: true,
        children: "Contained Disabled Button",
    },
};

export const OutlinedDisabled: Story = {
    args: {
        variant: "outlined",
        disabled: true,
        children: "Outlined Disabled Button",
    },
};

export const TextDisabled: Story = {
    args: {
        variant: "text",
        disabled: true,
        children: "Text Disabled Button",
    },
};

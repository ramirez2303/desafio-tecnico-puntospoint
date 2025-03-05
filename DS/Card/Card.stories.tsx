import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta = {
    title: "Example/Card",
    component: Card,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {

    },
    args: {},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomCard: Story = {
};

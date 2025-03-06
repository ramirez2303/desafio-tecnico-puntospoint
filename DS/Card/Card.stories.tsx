import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta = {
    title: "Example/Card",
    component: Card,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomCard: Story = {
    args: {
        title: "Custom Card",
        items: [
            {
                label: "Item 1",
                value: "Value 1",
            },
            {
                label: "Item 2",
                value: "Value 2",
            },
            {
                label: "Item 3",
                value: "Value 3",
            },
            {
                label: "Item 4",
                value: "Value 4",
            },
            {
                label: "Item 5",
                value: "Value 5",
            },
        ],
    },
};

export const SubItemCard: Story = {
    args: {
        title: "Custom Card",
        items: [
            {
                label: "Item 1",
                value: "Value 1",
            },
            {
                label: "Item 2",
                value: "Value 2",
            },
            {
                label: "Item 3",
                value: "Value 3",
            },
        ],
        subtitle: "Subtitle",
        subItems: [
            {
                label: "SubItem 1",
                value: "Value 1",
            },
            {
                label: "SubItem 2",
                value: "Value 2",
            },
            {
                label: "SubItem 3",
                value: "Value 3",
            },
        ],
    },
};

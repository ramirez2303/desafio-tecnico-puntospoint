import { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";

const meta = {
    title: "Example/Table",
    component: Table,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomTable: Story = {
    args: {
        title: "Custom Table",
        headerItems: ["Header 1", "Header 2", "Header 3", "Header 4"],
        rows: [
            ["Row 1", "Row 1", "Row 1", "Row 1"],
            ["Row 2", "Row 2", "Row 2", "Row 2"],
            ["Row 3", "Row 3", "Row 3", "Row 3"],
        ],
    },
};

export const OneColumnTable: Story = {
    args: {
        title: "Custom Table",
        headerItems: ["Header 1"],
        rows: [["Row 1"], ["Row 2"], ["Row 3"]],
    },
};

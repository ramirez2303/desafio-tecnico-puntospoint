import { Meta, StoryObj } from "@storybook/react";
import GroupedTable from "./GroupedTable";

const meta = {
    title: "Example/ui/GroupedTable",
    component: GroupedTable,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof GroupedTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleGroupedTable: Story = {
    
};

import { Meta, StoryObj } from "@storybook/react";
import CardDropdown from "./CardDropdown";

const meta = {
    title: "Example/ui/CardDropdown",
    component: CardDropdown,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof CardDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleCardDropdown: Story = {
    args: {},
};

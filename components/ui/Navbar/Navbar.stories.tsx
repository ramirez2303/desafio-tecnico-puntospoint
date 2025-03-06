import { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";

const meta = {
    title: "Example/ui/Navbar",
    component: Navbar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleNavbar: Story = {
    args: {},
};

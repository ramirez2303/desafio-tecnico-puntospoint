import { Meta, StoryObj } from "@storybook/react";
import GraphicsHeader from "./GraphicsHeader";

const meta = {
    title: "Example/ui/GraphicsHeader",
    component: GraphicsHeader,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof GraphicsHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleGraphicsHeader: Story = {
    args: {},
};

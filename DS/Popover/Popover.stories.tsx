import { Meta, StoryObj } from "@storybook/react";
import Popover from "./Popover";

const meta = {
    title: "Example/design-system/Popover",
    component: Popover,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExamplePopover: Story = {
    args: {
        children: <button>Click</button>,
        content: (
            <div
                style={{
                    boxSizing: "border-box",
                    padding: "20px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "rgba(163, 122, 122, 0.9)",
                }}
            >
                Content
            </div>
        ),
    },
};

import { Meta, StoryObj } from "@storybook/react";
import Flexbox from "./Flexbox";

const meta = {
    title: "Example/elements/Flexbox",
    component: Flexbox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {
        children: <span>Hola</span>,
    },
} satisfies Meta<typeof Flexbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleFlexbox: Story = {
    args: {
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        children: (
            <>
                <div style={{ border: "1px solid #000" }}>Elemento 1</div>
                <div style={{ border: "1px solid #000" }}>Elemento 2</div>
            </>
        ),
    },
};

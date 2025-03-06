import { Meta, StoryObj } from "@storybook/react";
import CustomIcon from "./CustomIcon";

import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";

const meta = {
    title: "Example/elements/CustomIcon",
    component: CustomIcon,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof CustomIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleIcon1: Story = {
    args: {
        Icon: CheckIcon,
        size: 24,
    },
};

export const ExampleIcon2: Story = {
    args: {
        Icon: AddIcon,
        size: 24,
    },
};

export const ExampleIcon3: Story = {
    args: {
        Icon: HomeIcon,
        size: 24,
    },
};

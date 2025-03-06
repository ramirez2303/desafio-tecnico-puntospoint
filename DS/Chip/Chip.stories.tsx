import { Meta, StoryObj } from "@storybook/react";
import Chip from "./Chip";
import CheckIcon from '@mui/icons-material/Check';

const meta = {
    title: "Example/design-system/Chip",
    component: Chip,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FilledChip: Story = {
    args: {
        label: "Filled Chip",
        variant: "filled",
        onClick: () => console.log("Clicked"),
    },
};

export const OutlinedChip: Story = {
    args: {
        label: "Outlined Chip",
        variant: "outlined",
        onClick: () => console.log("Clicked"),
    },
};

export const ChipWithIcon: Story = {
    args: {
        label: "Chip with Icon",
        variant: "filled",
        icon: <CheckIcon />,
        onClick: () => console.log("Clicked"),
    },
};

export const ChipWithDelete: Story = {
    args: {
        label: "Chip with Delete",
        variant: "filled",
        onClick: () => console.log("Clicked"),
        onDelete: () => console.log("Deleted"),
    },
};

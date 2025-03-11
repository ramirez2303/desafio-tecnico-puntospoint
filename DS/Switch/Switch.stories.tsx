import { Meta, StoryObj } from "@storybook/react";
import SwitchWithIcons from "./Switch";
import { fn } from "@storybook/test";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import StarIcon from "@mui/icons-material/Star";

const meta = {
    title: "Example/design-system/SwitchWithIcons",
    component: SwitchWithIcons,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        onClick: { action: "clicked" },
    },
    args: {
        items: [
            { label: "valor1gsaf", Icon: LeaderboardIcon, value: "1" },
            { label: "valor2", Icon: StarIcon, value: "2" },
        ],
        onClick: fn(),
    },
} satisfies Meta<typeof SwitchWithIcons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Switch: Story = {
    args: {
        items: [
            { label: "valor1gsaf", Icon: LeaderboardIcon, value: "1" },
            { label: "valor2", Icon: StarIcon, value: "2" },
        ],
    },
};

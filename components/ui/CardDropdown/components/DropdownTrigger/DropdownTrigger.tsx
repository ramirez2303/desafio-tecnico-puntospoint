import React from "react";
import Flexbox from "../../../../elements/Flexbox";
import Switch from "../../../../../DS/Switch";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import StarIcon from "@mui/icons-material/Star";
import CustomIcon from "../../../../elements/CustomIcon";

type DropdownTriggerProps = {
    isDropdownOpen: boolean;
    toggleDropdown: () => void;
};

const DropdownTrigger = ({
    isDropdownOpen,
    toggleDropdown,
}: DropdownTriggerProps) => {
    return (
        <Flexbox
            width="100%"
            justifyContent="space-between"
            alignItems="center"
        >
            <Switch
                items={[
                    {
                        label: "Grafico",
                        value: "Value 1",
                        Icon: LeaderboardIcon,
                    },
                    {
                        label: "Pulso",
                        value: "Value 2",
                        Icon: StarIcon,
                    },
                ]}
                onClick={() => {}}
            />
            <Flexbox
                onClick={toggleDropdown}
                sx={{
                    cursor: "pointer",
                    transform: isDropdownOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    transition: "all 300ms ease-in-out",
                }}
            >
                <CustomIcon Icon={KeyboardArrowDownIcon} size={40} />
            </Flexbox>
        </Flexbox>
    );
};

export default DropdownTrigger;

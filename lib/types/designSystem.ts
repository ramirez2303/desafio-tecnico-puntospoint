import { SvgIconProps } from "@mui/material";
import { ComponentType } from "react";

export type SwitchItem = {
    label: string;
    value: string;
    Icon?: ComponentType<SvgIconProps>;
};

export type CardItem = {
    label: string;
    value: string;
};

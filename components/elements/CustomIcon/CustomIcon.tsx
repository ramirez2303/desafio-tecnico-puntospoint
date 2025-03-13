import { SvgIconProps } from "@mui/material";
import React, { ComponentType } from "react";

type CustomIconProps = {
    Icon: ComponentType<SvgIconProps>;
    size?: number;
    color?: string;
};

const CustomIcon = ({ Icon, size = 24, color }: CustomIconProps) => {
    return <Icon sx={{ fontSize: size, color: color }} />;
};

export default CustomIcon;

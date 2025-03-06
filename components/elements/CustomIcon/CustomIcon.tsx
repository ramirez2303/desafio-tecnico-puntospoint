import { SvgIconProps } from "@mui/material";
import React, { ComponentType } from "react";

type CustomIconProps = {
    Icon: ComponentType<SvgIconProps>;
    size?: number;
};

const CustomIcon = ({ Icon, size = 24 }: CustomIconProps) => {
    return <Icon sx={{ fontSize: size }} />;
};

export default CustomIcon;

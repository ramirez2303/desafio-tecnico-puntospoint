import { Button as MUIButton } from "@mui/material";
import React, { ReactNode } from "react";

type ButtonProps = {
    variant?: "text" | "outlined" | "contained";
    color?: "primary" | "secondary";
    disabled?: boolean;
    onClick?: () => void;
    icon?: ReactNode;
    children?: ReactNode;
    padding?: string;
};

const Button = ({
    variant,
    color,
    disabled,
    onClick,
    icon,
    children,
    padding,
}: ButtonProps) => {
    return (
        <MUIButton
            variant={variant}
            color={color}
            disabled={disabled}
            onClick={onClick}
            sx={{
                whiteSpace: "nowrap",
                boxSizing: "border-box",
                padding: padding,
            }}
        >
            {icon}
            {children}
        </MUIButton>
    );
};

export default Button;

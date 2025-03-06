import { Button as MUIButton } from "@mui/material";
import React, { ReactNode } from "react";

type ButtonProps = {
    variant?: "text" | "outlined" | "contained";
    color?: "primary" | "secondary";
    disabled?: boolean;
    onClick?: () => void;
    icon?: ReactNode;
    children?: ReactNode;
};

const Button = ({
    variant,
    color,
    disabled,
    onClick,
    icon,
    children,
}: ButtonProps) => {
    return (
        <MUIButton
            variant={variant}
            color={color}
            disabled={disabled}
            onClick={onClick}
        >
            {icon}
            {children}
        </MUIButton>
    );
};

export default Button;

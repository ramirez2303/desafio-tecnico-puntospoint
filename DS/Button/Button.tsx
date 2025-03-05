import { Button as MUIButton } from "@mui/material";
import React, { ReactNode } from "react";

type ButtonProps = {
    variant?: "text" | "outlined" | "contained";
    color?: "primary" | "secondary";
    disabled?: boolean;
    onClick?: () => void;
    children?: ReactNode;
};

const Button = ({
    variant,
    color,
    disabled,
    onClick,
    children,
}: ButtonProps) => {
    return (
        <MUIButton
            variant={variant}
            color={color}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </MUIButton>
    );
};

export default Button;

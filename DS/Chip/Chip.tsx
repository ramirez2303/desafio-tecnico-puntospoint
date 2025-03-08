import React, { ReactElement, useState } from "react";
import MUIChip from "@mui/material/Chip";
import CloseIcon from "@mui/icons-material/Close";

type ChipProps = {
    label: string;
    variant: "filled" | "outlined" | "text";
    icon?: ReactElement;
    onClick: () => void;
    onDelete?: () => void;
};

const Chip = ({ label, variant, icon, onClick, onDelete }: ChipProps) => {
    return (
        <MUIChip
            label={label}
            variant={variant === "text" ? "filled" : variant}
            icon={icon}
            onClick={onClick}
            deleteIcon={<CloseIcon />}
            onDelete={onDelete}
            sx={{
                backgroundColor: variant === "text" ? "transparent" : "",
            }}
        />
    );
};

export default Chip;

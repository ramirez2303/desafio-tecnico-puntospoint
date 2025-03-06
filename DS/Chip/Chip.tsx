import React, { ReactElement, useState } from "react";
import MUIChip from "@mui/material/Chip";
import CloseIcon from "@mui/icons-material/Close";

type ChipProps = {
    label: string;
    variant: "filled" | "outlined";
    icon?: ReactElement;
    onClick: () => void;
    onDelete?: () => void;
};

const Chip = ({ label, variant, icon, onClick, onDelete }: ChipProps) => {
    const [isSelected, setIsSelected] = useState(false);
    const handleClick = () => {
        setIsSelected(!isSelected);
        onClick();
    };

    return (
        <MUIChip
            label={label}
            variant={variant}
            icon={isSelected ? icon : undefined}
            onClick={handleClick}
            deleteIcon={<CloseIcon />}
            onDelete={onDelete}
        />
    );
};

export default Chip;

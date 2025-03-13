import React, { useState, MouseEvent, ReactNode } from "react";
import Flexbox from "../../components/elements/Flexbox";
import MUIPopover from "@mui/material/Popover";

type PopoverProps = {
    children: ReactNode;
    content: ReactNode;
};

const Popover = ({ children, content }: PopoverProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <>
            <Flexbox onClick={handleClick}>{children}</Flexbox>
            <MUIPopover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                sx={{
                    top: "20px",
                }}
            >
                {content}
            </MUIPopover>
        </>
    );
};

export default Popover;

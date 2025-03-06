import React, { ReactElement, ReactNode } from "react";
import MUITooltip, {
    TooltipProps as MUITooltipProps,
    tooltipClasses,
} from "@mui/material/Tooltip";
import { styled } from "@mui/material";

const CustomTooltip = styled(({ className, ...props }: MUITooltipProps) => (
    <MUITooltip {...props} classes={{ popper: className }} />
))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#313033",
        color: "#fff",
        fontSize: "12px",
        fontWeight: "400",
    },
}));

type TooltipProps = {
    content: string | ReactNode;
    placement?: MUITooltipProps["placement"];
    children: ReactElement;
    disabled?: boolean;
};

const Tooltip = ({ content, placement, children, disabled }: TooltipProps) => {
    return (
        <CustomTooltip
            title={content}
            placement={placement}
            disableHoverListener={disabled}
        >
            {children}
        </CustomTooltip>
    );
};

export default Tooltip;

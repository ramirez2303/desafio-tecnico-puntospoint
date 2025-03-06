import { Box, BoxProps, SxProps } from "@mui/material";
import React, { ReactNode } from "react";

type FlexboxProps = BoxProps & {
    direction?: "row" | "column" | "row-reverse" | "column-reverse";
    sx?: SxProps;
    children: ReactNode;
};
const Flexbox = ({ direction, sx, children, ...props }: FlexboxProps) => {
    return (
        <Box display="flex" flexDirection={direction} {...props} sx={{ ...sx }}>
            {children}
        </Box>
    );
};

export default Flexbox;

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

type SwitchProps = {
    values: { label: string; icon?: string }[];
    onClick: (isActive: boolean) => void;
};

const Switch = ({ values, onClick }: SwitchProps) => {
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!active);
        onClick(active);
    };

    return (
        <Box
            onClick={handleToggle}
            sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: 60,
                border: "1px solid #644BBA",
                borderRadius: "30px",
                backgroundColor: "#FFFFFF",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
                position: "relative",
                boxSizing: "border-box",
                padding: "5px",
            }}
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                position="relative"
                zIndex={2}
                gap="15px"
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap="3px"
                    width="96px"
                    boxSizing="border-box"
                    padding="8px 10px"
                >
                    <div
                        style={{
                            width: "14px",
                            height: "14px",
                            backgroundColor: active ? "#644BBA" : "white",
                            transition: "all 300ms ease-in-out",
                        }}
                    />
                    <Typography
                        variant="body1"
                        color={active ? "#644BBA" : "white"}
                    >
                        {values[0].label}
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                    gap="3px"
                    width="96px"
                    boxSizing="border-box"
                    padding="8px 10px"
                >
                    <div
                        style={{
                            width: "14px",
                            height: "14px",
                            backgroundColor: active ? "white" : "#644BBA",
                            transition: "all 300ms ease-in-out",
                        }}
                    />
                    <Typography
                        variant="body1"
                        color={active ? "white" : "#644BBA"}
                    >
                        {values[1].label}
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: active ? "calc(50% - 3px)" : "5px",
                    transform: "translateY(-50%)",
                    transition: "left 0.3s ease-in-out",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "30px",
                    backgroundColor: "#644BBA",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    zIndex: 0,
                    width: "96px",
                    height: "38px",
                }}
            />
        </Box>
    );
};

export default Switch;

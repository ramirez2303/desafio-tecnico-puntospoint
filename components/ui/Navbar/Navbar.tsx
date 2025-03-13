import React from "react";
import Flexbox from "../../elements/Flexbox";
import Button from "../../../DS/Button";
import { Typography } from "@mui/material";
import CustomIcon from "../../elements/CustomIcon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Popover from "../../../DS/Popover";
import ProfileContent from "../ProfileContent";

const Navbar = () => {
    const navbarData = [
        {
            label: "Dashboard",
            url: "/",
        },
        {
            label: "Clientes",
            url: "/",
        },
        {
            label: "Reglas de acumulación",
            url: "/",
        },
    ];

    return (
        <Flexbox
            width="100%"
            height="60px"
            bgcolor="#FFFFFF"
            justifyContent="center"
            alignItems="center"
            boxShadow="0px 4px 10px 0px #0000001A"
            boxSizing="border-box"
            padding="12px 60px"
        >
            <Flexbox
                width={{ md: "100%", lg: "100%", xl: "80vw" }}
                justifyContent="space-between"
                alignItems="center"
            >
                <Flexbox
                    width={{ md: "150px", lg: "250px" }}
                    sx={{ opacity: 0 }}
                >
                    <div></div>
                </Flexbox>
                <nav>
                    <Flexbox gap="25px">
                        {navbarData.map((item, ix) => (
                            <Button
                                key={ix}
                                variant={ix === 0 ? "contained" : "text"}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Flexbox>
                </nav>
                <Flexbox
                    gap="20px"
                    sx={{
                        cursor: "pointer",
                    }}
                >
                    <Popover content={<ProfileContent />}>
                        <Typography
                            variant="body1"
                            maxWidth={{ md: "100px", lg: "150px", xl: "100%" }}
                            whiteSpace="nowrap"
                            sx={{
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                            }}
                        >
                            Pamela Rojas Gonzalez
                        </Typography>
                        <CustomIcon Icon={KeyboardArrowDownIcon} size={24} />
                    </Popover>
                </Flexbox>
            </Flexbox>
        </Flexbox>
    );
};

export default Navbar;

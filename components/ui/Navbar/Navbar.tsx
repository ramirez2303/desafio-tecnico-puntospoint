import React from "react";
import Flexbox from "../../elements/Flexbox";
import Button from "../../../DS/Button";
import { Typography } from "@mui/material";
import CustomIcon from "../../elements/CustomIcon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
            width="80vw"
            height="60px"
            bgcolor="#FFFFFF"
            justifyContent="space-between"
            alignItems="center"
            boxShadow="0px 4px 10px 0px #0000001A"
            boxSizing="border-box"
            padding="12px 60px"
        >
            <Flexbox sx={{ width: "250px", opacity: 0 }}>
                <div></div>
            </Flexbox>
            <Flexbox gap="25px">
                {navbarData.map((item, ix) => (
                    <Button key={ix} variant={ix === 0 ? "contained" : "text"}>
                        {item.label}
                    </Button>
                ))}
            </Flexbox>
            <Flexbox gap="20px">
                <Typography variant="body1">Pamela Rojas Gonzalez</Typography>
                <CustomIcon Icon={KeyboardArrowDownIcon} size={24} />
            </Flexbox>
        </Flexbox>
    );
};

export default Navbar;

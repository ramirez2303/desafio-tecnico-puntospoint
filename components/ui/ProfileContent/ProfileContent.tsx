import React from "react";
import Flexbox from "../../elements/Flexbox";
import { Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import CustomIcon from "../../elements/CustomIcon";

const ProfileContent = () => {
    return (
        <Flexbox
            width="100%"
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            boxSizing="border-box"
            padding="8px 0px"
            borderRadius="4px"
        >
            <Flexbox
                width="100%"
                boxSizing="border-box"
                padding="16px 12px"
                sx={{
                    cursor: "pointer",
                    "&:hover": {
                        backgroundColor: "#F0F0F0",
                    },
                }}
            >
                <Typography variant="body1" fontSize="16px">
                    Editar perfil
                </Typography>
            </Flexbox>
            <Flexbox
                width="100%"
                alignItems="center"
                boxSizing="border-box"
                padding="16px 12px"
                gap="10px"
                sx={{
                    cursor: "pointer",
                    transition: "300ms ease-in-out",
                    "&:hover": {
                        backgroundColor: "#F0F0F0",
                    },
                }}
            >
                <CustomIcon Icon={LogoutIcon} size={24} color="#79757F" />
                <Typography variant="body1" fontSize="16px">
                    Cerrar sesión
                </Typography>
            </Flexbox>
        </Flexbox>
    );
};

export default ProfileContent;

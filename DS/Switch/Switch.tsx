import React, { useState, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { SwitchItem } from "../../lib/types/designSystem";

type SwitchProps = {
    items: SwitchItem[];
    onClick: (isActive: boolean) => void;
};

const Switch = ({ items, onClick }: SwitchProps) => {
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!active);
        onClick(!active);
    };

    // Calcula el ancho del item flotante basado en el texto más largo
    const maxWidth = useMemo(() => {
        const maxTextWidth = Math.max(
            ...items.map((item) => item.label.length * 6 + 24) // 8px aprox por caracter
        );
        return maxTextWidth + 40; // 40px de padding e íconos
    }, [items]);

    return (
        <Box
            width="auto"
            height={48}
            minWidth={maxWidth * 2 + 20} // Tamaño total + margen
            display="flex"
            alignItems="center"
            border="1px solid #644BBA"
            borderRadius="30px"
            bgcolor="#ffffff"
            position="relative"
            padding="0px 7px"
            onClick={handleToggle}
            sx={{
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
            }}
        >
            {items.map(({ label, Icon }, index) => (
                <Box
                    key={index}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap="5px"
                    width={`${maxWidth}px`} // 📌 Tamaño dinámico basado en el texto
                    boxSizing="border-box"
                    padding="8px 10px"
                    position="relative"
                    zIndex={2}
                >
                    {Icon && (
                        <Icon
                            style={{
                                width: "24px",
                                height: "24px",
                                color:
                                    active !== (index === 1)
                                        ? "#644BBA"
                                        : "white",
                                transition: "all 300ms ease-in-out",
                            }}
                        />
                    )}
                    <Typography
                        variant="body1"
                        color={active !== (index === 1) ? "#644BBA" : "white"}
                        fontSize="16px"
                        fontWeight="500"
                    >
                        {label}
                    </Typography>
                </Box>
            ))}

            {/* Item flotante animado */}
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: active ? `calc(50% + 0px)` : "5px",
                    transform: "translateY(-50%)",
                    transition: "left 0.3s ease-in-out, width 0.3s ease-in-out",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "30px",
                    backgroundColor: "#644BBA",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    zIndex: 0,
                    width: `${maxWidth}px`, // Tamaño dinámico
                    height: "38px",
                }}
            />
        </Box>
    );
};

export default Switch;

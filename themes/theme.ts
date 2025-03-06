import { createTheme } from "@mui/material";

// Theme customization
const theme = createTheme({
    palette: {
        primary: {
            main: "#644BBA",
        },
        secondary: {
            main: "#E7DFF8",
        },
        background: {
            default: "#FAFAFE",
        },
    },
    typography: {
        fontFamily: "'Roboto', sans-serif",
        button: {
            textTransform: "none", // Evitar que los botones sean mayúsculas
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "100px",
                    boxSizing: "border-box",
                    padding: "10px 16px",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "20px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    gap: "8px",

                    "&:disabled": {
                        opacity: 0.8,
                    },
                },
                contained: {
                    color: "#ffffff",
                    boxShadow:
                        "0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004D",
                    "&:hover": {
                        opacity: 0.8,
                        filter: "brightness(1.1)",
                        backgroundColor: "#644BBA",
                        transition: "all 300ms",
                    },
                },
                outlined: {
                    color: "#644BBA",
                    border: "1px solid #79757F",
                    "&:hover": {
                        backgroundColor: "#644BBA14",
                        transition: "all 300ms",
                    },
                },
                text: {
                    color: "#644BBA",
                    "&:hover": {
                        backgroundColor: "#644BBA14",
                        transition: "all 300ms",
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    padding: "6px 12px",
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: 500,
                },
                filled: {
                    backgroundColor: "#E7DFF8",
                    color: "#1D192B",
                    transition: "all 300ms ease-in-out",

                    "&:hover": {
                        backgroundColor: "#E7DFF8",
                        filter: "brightness(0.95)",
                        boxShadow: "0px 1px 3px 1px #00000026",
                    },

                    "&:active": {
                        backgroundColor: "#E7DFF8",
                        boxShadow:
                            "0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004D",
                    },
                },
                outlined: {
                    backgroundColor: "transparent",
                    color: "#48454E",
                    border: "1px solid #79757F",
                    transition: "all 300ms ease-in-out",

                    "&:hover": {
                        backgroundColor: "#48454E14",
                        transition: "all 300ms",
                    },

                    "&:active": {
                        backgroundColor: "#48454E1F",
                        boxShadow:
                            "0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004D",
                    },
                },
                deleteIcon: {
                    color: "rgba(0, 0, 0, 0.54)",
                    transition: "all 300ms ease-in-out",

                    "&:hover": {
                        color: "rgba(0, 0, 0, 0.75)",
                    },

                    "&:active": {
                        color: "rgba(0, 0, 0, 0.7)",
                        transition: "all 100ms ease-in-out",
                        transform: "scale(0.95)",
                    },
                },
            },
        },
    },
});

export default theme;

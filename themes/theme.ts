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
    },
});

export default theme;

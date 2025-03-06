import React, { useState } from "react";
import MUITable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import MUITableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Typography } from "@mui/material";
import Tooltip from "../Tooltip";

const CustomTableCell = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<"" | "hovered" | "selected">("");
    return (
        <Tooltip content="Click to select" placement="top">
            <MUITableCell
                align="center"
                onMouseEnter={() => state !== "selected" && setState("hovered")}
                onMouseLeave={() => state === "hovered" && setState("")}
                onClick={() =>
                    state === "selected" ? setState("") : setState("selected")
                }
                sx={{
                    backgroundColor:
                        state === "selected"
                            ? "#644BBA"
                            : state === "hovered"
                            ? "#1C1B1E14"
                            : "",
                    transition: "background-color 0.3s ease-in-out",
                }}
            >
                {children}
            </MUITableCell>
        </Tooltip>
    );
};

type TableProps = {
    title: string;
    headerItems: string[];
    rows: string[][];
};

const Table = ({ title, headerItems, rows }: TableProps) => {
    return (
        <Box
            justifyContent="center"
            alignItems="center"
            bgcolor="#E6E1E6"
            borderRadius="15px"
            boxSizing="border-box"
            padding="15px"
        >
            <Typography
                variant="h6"
                fontSize="14px"
                fontWeight="500"
                textAlign="center"
            >
                {title}
            </Typography>
            <MUITable aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {headerItems.map((item) => (
                            <CustomTableCell>{item}</CustomTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, ix) => (
                        <TableRow
                            key={ix}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            {row.map((item) => (
                                <CustomTableCell>{item}</CustomTableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </MUITable>
        </Box>
    );
};

export default Table;

import React from "react";
import Table from "../../../../../DS/Table";
import { useTableData } from "../../../../../hooks/useTableData";

const DateTable = () => {
    const { states } = useTableData();

    return (
        <Table
            title={states?.dateData?.title ?? ""}
            headerItems={states?.dateData?.headerItems ?? []}
            rows={states?.dateData?.rows ?? []}
        />
    );
};

export default DateTable;

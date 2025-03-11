import React from "react";
import Table from "../../../../../DS/Table";
import { DateTableData } from "../../../../../lib/data/table";
import { useDashboardStore } from "../../../../../lib/store/useDashboardStore";

const DateTable = () => {
    const { dateSelected } = useDashboardStore();
    const dateDataToShow = DateTableData[dateSelected.date];

    return (
        <Table
            title={dateDataToShow?.title ?? ""}
            headerItems={dateDataToShow?.headerItems ?? []}
            rows={dateDataToShow?.rows ?? []}
        />
    );
};

export default DateTable;

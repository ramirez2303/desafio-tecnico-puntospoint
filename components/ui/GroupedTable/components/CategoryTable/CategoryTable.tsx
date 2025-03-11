import React from "react";
import Table from "../../../../../DS/Table";
import { useDashboardStore } from "../../../../../lib/store/useDashboardStore";
import { CategoryTableData } from "../../../../../lib/data/table";

const CategoryTable = () => {
    const { viewSelected } = useDashboardStore();
    const categoryDataToShow =
        viewSelected?.chartCategory !== undefined
            ? CategoryTableData?.[viewSelected.chartCategory]
            : undefined;

    if (!!categoryDataToShow)
        return (
            <Table
                title={categoryDataToShow?.title ?? ""}
                headerItems={categoryDataToShow?.headerItems ?? []}
                rows={categoryDataToShow?.rows ?? []}
            />
        );
};

export default CategoryTable;

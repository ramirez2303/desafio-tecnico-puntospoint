import React from "react";
import Table from "../../../../../DS/Table";
import Flexbox from "../../../../elements/Flexbox";
import { useTableData } from "../../../../../hooks/useTableData";

const CategoryTable = () => {
    const { states } = useTableData();

    return (
        <Flexbox
            sx={{
                opacity: !!states?.categoryData ? 1 : 0,
                pointerEvents: !!states?.categoryData ? "all" : "none",
                transition: "all 300ms ease-in-out",
            }}
        >
            <Table
                title={states?.categoryData?.title ?? ""}
                headerItems={states?.categoryData?.headerItems ?? []}
                rows={states?.categoryData?.rows ?? []}
            />
        </Flexbox>
    );
};

export default CategoryTable;

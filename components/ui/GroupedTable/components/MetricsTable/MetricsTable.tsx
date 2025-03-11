import React from "react";
import Table from "../../../../../DS/Table";
import Flexbox from "../../../../elements/Flexbox";
import { useTableData } from "../../../../../hooks/useTableData";

const MetricsTable = () => {
    const { states } = useTableData();

    return (
        <Flexbox
            sx={{
                opacity: !!states?.metricsData ? 1 : 0,
                pointerEvents: !!states?.metricsData ? "all" : "none",
                transition: "all 300ms ease-in-out",
            }}
        >
            <Table
                title={states?.metricsData?.title ?? ""}
                headerItems={states?.metricsData?.headerItems ?? []}
                rows={states?.metricsData?.rows ?? []}
            />
        </Flexbox>
    );
};

export default MetricsTable;

import React from "react";
import { useDashboardStore } from "../../../../../lib/store/useDashboardStore";
import Table from "../../../../../DS/Table";
import { MetricsTableData } from "../../../../../lib/data/table";

const MetricsTable = () => {
    const { viewSelected } = useDashboardStore();
    const metricsDataToShow =
        viewSelected.chartMetric !== undefined
            ? MetricsTableData?.[viewSelected.chartMetric]
            : undefined;

    if (!!metricsDataToShow)
        return (
            <Table
                title={metricsDataToShow?.title ?? ""}
                headerItems={metricsDataToShow?.headerItems ?? []}
                rows={metricsDataToShow?.rows ?? []}
            />
        );
};

export default MetricsTable;

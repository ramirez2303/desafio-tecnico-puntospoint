import { useEffect, useState } from "react";
import { useDashboardStore } from "../lib/store/useDashboardStore";
import { DataTableType } from "../lib/types";
import {
    CategoryTableData,
    DateTableData,
    MetricsTableData,
} from "../lib/data/table";

export const useTableData = () => {
    const { dateSelected, viewSelected } = useDashboardStore();
    const [states, setStates] = useState<
        | {
              dateData?: DataTableType;
              categoryData?: DataTableType;
              metricsData?: DataTableType;
          }
        | undefined
    >(undefined);

    useEffect(() => {
        const dateDataToShow = DateTableData[dateSelected.date];
        const categoryDataToShow =
            viewSelected?.chartCategory !== undefined
                ? CategoryTableData?.[viewSelected?.chartCategory]
                : undefined;
        const metricsDataToShow =
            viewSelected.chartMetric !== undefined
                ? MetricsTableData?.[viewSelected.chartMetric]
                : undefined;

        if (dateDataToShow || categoryDataToShow || metricsDataToShow) {
            setStates({
                dateData: dateDataToShow,
                categoryData: categoryDataToShow,
                metricsData: metricsDataToShow,
            });
        }
    }, [dateSelected, viewSelected]);

    return { states };
};

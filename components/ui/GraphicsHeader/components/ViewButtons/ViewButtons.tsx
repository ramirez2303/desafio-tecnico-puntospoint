import React from "react";
import Flexbox from "../../../../elements/Flexbox";
import Chip from "../../../../../DS/Chip";
import CheckIcon from "@mui/icons-material/Check";
import { useDashboardStore } from "../../../../../lib/store/useDashboardStore";
import {
    ChartCategoryType,
    ChartMetricType,
} from "../../../../../lib/types/views";
import { categorys, metrics } from "../../../../../lib/data";

const ViewButtons = () => {
    const { viewSelected, setViewSelected } = useDashboardStore();

    const handleSelectChip = (
        data: Partial<ChartCategoryType | ChartMetricType>,
        view: "chartCategory" | "chartMetric"
    ) => {
        if (
            viewSelected?.chartCategory?.includes(data as ChartCategoryType) ||
            viewSelected?.chartMetric?.includes(data as ChartMetricType)
        ) {
            if (
                !viewSelected[
                    view === "chartCategory" ? "chartMetric" : "chartCategory"
                ]
            ) {
                setViewSelected({
                    chartCategory: "client",
                    chartMetric: undefined,
                });
            } else {
                setViewSelected({
                    ...viewSelected,
                    [view]: undefined,
                });
            }
        } else {
            setViewSelected({
                ...viewSelected,
                [view]: data,
            });
        }
    };

    return (
        <Flexbox
            width="100%"
            justifyContent="space-between"
            alignItems="center"
        >
            <Flexbox justifyContent="flex-start" alignItems="center" gap="4px">
                {categorys.map((data, ix) => (
                    <Chip
                        key={data.value + ix}
                        label={data.label}
                        variant={
                            viewSelected.chartCategory === data.value
                                ? "filled"
                                : "outlined"
                        }
                        icon={
                            viewSelected.chartCategory === data.value ? (
                                <CheckIcon />
                            ) : undefined
                        }
                        onClick={() =>
                            handleSelectChip(data.value, "chartCategory")
                        }
                    />
                ))}
            </Flexbox>
            <Flexbox justifyContent="flex-start" alignItems="center" gap="4px">
                {metrics.map((data, ix) => (
                    <Chip
                        key={data.value + ix}
                        label={data.label}
                        variant={
                            viewSelected.chartMetric === data.value
                                ? "filled"
                                : "outlined"
                        }
                        icon={
                            viewSelected.chartMetric === data.value ? (
                                <CheckIcon />
                            ) : undefined
                        }
                        onClick={() =>
                            handleSelectChip(data.value, "chartMetric")
                        }
                    />
                ))}
            </Flexbox>
        </Flexbox>
    );
};

export default ViewButtons;

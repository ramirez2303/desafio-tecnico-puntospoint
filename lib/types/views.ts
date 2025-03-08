export type DateValueType =
    | "today"
    | "7days"
    | "thisMonth"
    | "6months"
    | "YTD"
    | "1year"
    | "max";

export type DateDataType = {
    value: DateValueType;
    label: string;
};

export type DaysValueType =
    | "all"
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday";

export type DaysDataType = {
    value: DaysValueType;
    label: string;
};

export type DateType = {
    date: DateValueType;
    day: DaysValueType;
};

export type ChartCategoryType = "client" | "transaction";

export type ChartMetricType = "money" | "cashback";

export type ChartCategoryDataType = {
    value: ChartCategoryType;
    label: string;
};

export type ChartMetricDataType = {
    value: ChartMetricType;
    label: string;
};

export type ViewType = {
    chartCategory: ChartCategoryType | undefined;
    chartMetric: ChartMetricType | undefined;
};

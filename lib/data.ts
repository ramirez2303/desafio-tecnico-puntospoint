import {
    ChartCategoryDataType,
    ChartMetricDataType,
    DateDataType,
    DaysDataType,
} from "./types/views";

export const dates: DateDataType[] = [
    {
        value: "today",
        label: "HOY",
    },
    {
        value: "7days",
        label: "7D",
    },
    {
        value: "thisMonth",
        label: "Este mes",
    },
    {
        value: "6months",
        label: "6M",
    },
    {
        value: "YTD",
        label: "YTD / YTG",
    },
    {
        value: "1year",
        label: "1A",
    },
    {
        value: "max",
        label: "MAX",
    },
];

export const days: DaysDataType[] = [
    { value: "all", label: "Todo" },
    { value: "monday", label: "Lunes" },
    { value: "tuesday", label: "Martes" },
    { value: "wednesday", label: "Miercoles" },
    { value: "thursday", label: "Jueves" },
    { value: "friday", label: "Viernes" },
    { value: "saturday", label: "Sabado" },
    { value: "sunday", label: "Domingo" },
];

export const categorys: ChartCategoryDataType[] = [
    {
        value: "client",
        label: "Clientes",
    },
    {
        value: "transaction",
        label: "Transacciones",
    },
];

export const metrics: ChartMetricDataType[] = [
    {
        value: "money",
        label: "Dinero",
    },
    {
        value: "cashback",
        label: "Cashback",
    },
];

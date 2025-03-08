import {
    ChartCategoryDataType,
    ChartMetricDataType,
    DateDataType,
    DaysDataType,
    MonthDataType,
    MonthValueType,
} from "./types/views";
import { getLastSixMonths, getLastSixYears } from "./utils";

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

export const lastSixMonths: MonthDataType[] = [
    { value: "all", label: "Todo" },
    ...getLastSixMonths().map((item, ix) => {
        return {
            value: item as MonthValueType,
            label: getLastSixMonths("es")[ix],
        };
    }),
];

export const months: MonthDataType[] = [
    { value: "all", label: "Todo" },
    { value: "january", label: "Enero" },
    { value: "february", label: "Febrero" },
    { value: "march", label: "Marzo" },
    { value: "april", label: "Abril" },
    { value: "may", label: "Mayo" },
    { value: "june", label: "Junio" },
    { value: "july", label: "Julio" },
    { value: "august", label: "Agosto" },
    { value: "september", label: "Septiembre" },
    { value: "october", label: "Octubre" },
    { value: "november", label: "Noviembre" },
    { value: "december", label: "Diciembre" },
];

export const lastSixYears = [
    { value: "all", label: "Todo" },
    ...getLastSixYears().map((year) => ({
        value: year.toString(),
        label: year.toString(),
    })),
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

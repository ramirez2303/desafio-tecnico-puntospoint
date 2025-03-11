import { DataTableType, DateValueType } from "../types";
import { getLastSixMonths, getLastSixYears } from "../utils";

export const todayTable: DataTableType = {
    key: "today",
    title: "Hoy",
    headerItems: ["Horas"],
    rows: [
        ["00:00 - 04:00"],
        ["04:00 - 08:00"],
        ["08:00 - 12:00"],
        ["12:00 - 16:00"],
        ["16:00 - 20:00"],
        ["20:00 - 00:00"],
        ["Total"],
    ],
};

export const sevenDaysTable: DataTableType = {
    key: "7days",
    title: "7 Dias",
    headerItems: ["Semana"],
    rows: [
        ["Lunes"],
        ["Martes"],
        ["Miércoles"],
        ["Jueves"],
        ["Viernes"],
        ["Sábado"],
        ["Domingo"],
        ["Total"],
    ],
};

export const thisMonthTable: DataTableType = {
    key: "thisMonth",
    title: "Este Mes",
    headerItems: ["Días"],
    rows: [
        ["1"],
        ["2"],
        ["3"],
        ["4"],
        ["5"],
        ["6"],
        ["7"],
        ["8"],
        ["9"],
        ["10"],
        ["11"],
        ["12"],
        ["13"],
        ["14"],
        ["15"],
        ["16"],
        ["17"],
        ["18"],
        ["19"],
        ["20"],
        ["21"],
        ["22"],
        ["23"],
        ["24"],
        ["25"],
        ["26"],
        ["27"],
        ["28"],
        ["29"],
        ["30"],
        ["31"],
    ],
};

export const lastSixMonthTable: DataTableType = {
    key: "6months",
    title: "6 Meses",
    headerItems: ["Meses"],
    rows: getLastSixMonths("es")
        .map((month) => [month])
        .concat([["Total"]]),
};

export const yearTable: DataTableType = {
    key: "1year",
    title: "1 Año",
    headerItems: ["Meses"],
    rows: [
        ["Enero"],
        ["Febrero"],
        ["Marzo"],
        ["Abril"],
        ["Mayo"],
        ["Junio"],
        ["Julio"],
        ["Agosto"],
        ["Septiembre"],
        ["Octubre"],
        ["Noviembre"],
        ["Diciembre"],
        ["Total"],
    ],
};

export const maxTable: DataTableType = {
    key: "max",
    title: "MÁX",
    headerItems: ["Años"],
    rows: getLastSixYears()
        .map((year) => [year.toString()])
        .concat([["Total"]]),
};

type DateTableDataType = { [key in DateValueType]: DataTableType | undefined };

export const DateTableData: DateTableDataType = {
    today: todayTable,
    "7days": sevenDaysTable,
    thisMonth: thisMonthTable,
    "6months": lastSixMonthTable,
    YTD: undefined,
    "1year": yearTable,
    max: maxTable,
};

export const CategoryClientsData: DataTableType = {
    key: "client",
    title: "Clientes",
    headerItems: ["Column 1", "Column 2", "Column 3", "Total"],
    rows: Array.from({ length: 7 }, () => {
        const col1 = Math.floor(Math.random() * 500);
        const col2 = Math.floor(Math.random() * 500);
        const col3 = Math.floor(Math.random() * 500);
        const total = col1 + col2 + col3;
        return [
            col1.toString(),
            col2.toString(),
            col3.toString(),
            total.toString(),
        ];
    }),
};

export const CategoryTransactionData: DataTableType = {
    key: "transaction",
    title: "Transacciones",
    headerItems: ["Total"],
    rows: Array.from({ length: 7 }, () => {
        const total = Math.floor(Math.random() * 500);
        return [total.toString()];
    }),
};

export const CategoryTableData: { [key: string]: DataTableType } = {
    client: CategoryClientsData,
    transaction: CategoryTransactionData,
};

export const MetricMoneyData: DataTableType = {
    key: "money",
    title: "Dinero",
    headerItems: ["Column 1", "Column 2", "Total"],
    rows: Array.from({ length: 7 }, () => {
        const col1 = Math.floor(Math.random() * 500);
        const col2 = Math.floor(Math.random() * 500);
        const total = col1 + col2;
        return [col1.toString(), col2.toString(), total.toString()];
    }),
};

export const MetricCashbackData: DataTableType = {
    key: "cashback",
    title: "Cashback",
    headerItems: ["Column 1", "Column 2"],
    rows: Array.from({ length: 7 }, () => {
        const col1 = Math.floor(Math.random() * 500);
        const col2 = Math.floor(Math.random() * 500);
        return [col1.toString(), col2.toString()];
    }),
};

export const MetricsTableData: { [key: string]: DataTableType } = {
    money: MetricMoneyData,
    cashback: MetricCashbackData,
};

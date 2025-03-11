import { create } from "zustand";
import { DateType, ViewType } from "../types";

type DashBoardState = {
    typeSelected: "graph" | "pulse";
    setTypeSelected: (type: "graph" | "pulse") => void;

    dateSelected: DateType;
    setDateSelected: (date: DateType) => void;

    viewSelected: ViewType;
    setViewSelected: (view: ViewType) => void;
};

export const useDashboardStore = create<DashBoardState>((set) => ({
    typeSelected: "graph",
    setTypeSelected: (type: "graph" | "pulse") => set({ typeSelected: type }),

    dateSelected: {
        date: "today",
        day: "all",
        month: "all",
        lastSixMonth: "all",
        lastSixYears: "all",
    },
    setDateSelected: (date: DateType) => set({ dateSelected: date }),

    viewSelected: {
        chartCategory: "client",
        chartMetric: undefined,
    },
    setViewSelected: (view: ViewType) => set({ viewSelected: view }),
}));

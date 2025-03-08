import { create } from "zustand";
import { DateType, ViewType } from "../types/views";

type AppState = {
    dateSelected: DateType;
    setDateSelected: (date: DateType) => void;

    viewSelected: ViewType;
    setViewSelected: (view: ViewType) => void;
};

export const useDashboardStore = create<AppState>((set) => ({
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

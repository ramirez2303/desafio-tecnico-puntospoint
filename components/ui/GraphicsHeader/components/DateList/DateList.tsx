import React from "react";
import Flexbox from "../../../../elements/Flexbox";
import Chip from "../../../../../DS/Chip";
import Button from "../../../../../DS/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
    DateValueType,
    DaysValueType,
    MonthValueType,
} from "../../../../../lib/types/views";
import { useDashboardStore } from "../../../../../lib/store/useDashboardStore";
import {
    dates,
    days,
    lastSixMonths,
    lastSixYears,
    months,
} from "../../../../../lib/data";

const DateList = () => {
    const { dateSelected, setDateSelected } = useDashboardStore();
    const showList =
        dateSelected.date === "max" ||
        dateSelected.date === "1year" ||
        dateSelected.date === "7days" ||
        dateSelected.date === "6months";
    const listToShow =
        dateSelected.date === "max"
            ? lastSixYears
            : dateSelected.date === "1year"
            ? months
            : dateSelected.date === "6months"
            ? lastSixMonths
            : days;

    const handleSelect = (
        data: Partial<DateValueType | DaysValueType | MonthValueType>,
        type: "date" | "day" | "month" | "lastSixMonth"
    ) => {
        // if (type === "day" && dateSelected.day === data) {
        //     setDateSelected({
        //         ...dateSelected,
        //         day: "all",
        //     });
        // } else {
        // }
        if (type === "date" && dateSelected.date !== data) {
            setDateSelected({
                date: data as DateValueType,
                day: "all",
                month: "all",
                lastSixMonth: "all",
            });
        } else {
            setDateSelected({
                ...dateSelected,
                [type]: data,
            });
        }
    };

    return (
        <Flexbox
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            gap="30px"
        >
            <Flexbox
                width="100%"
                justifyContent="space-between"
                alignItems="center"
            >
                <Flexbox
                    justifyContent="flex-start"
                    alignItems="center"
                    gap="10px"
                >
                    {dates.map((date, ix) => (
                        <Chip
                            key={date.value + ix}
                            label={date.label}
                            variant={
                                date.value !== dateSelected.date
                                    ? "text"
                                    : "filled"
                            }
                            onClick={handleSelect.bind(
                                null,
                                date.value,
                                "date"
                            )}
                        />
                    ))}
                </Flexbox>
                <Flexbox>
                    <Button variant="text" icon={<VisibilityIcon />}>
                        Ver detalle
                    </Button>
                </Flexbox>
            </Flexbox>
            <Flexbox
                justifyContent="flex-start"
                alignItems="center"
                flexWrap="wrap"
                gap="10px"
                style={{
                    position: "relative",
                    top: showList ? "0" : "-20px",
                    opacity: showList ? 1 : 0,
                    pointerEvents: showList ? "all" : "none",
                    transition: "250ms ease-in-out",
                }}
            >
                {listToShow.map((item, ix) => (
                    <Chip
                        key={item.value + ix}
                        label={item.label}
                        variant={
                            (
                                dateSelected.date === "1year"
                                    ? item.value === dateSelected.month
                                    : dateSelected.date === "6months"
                                    ? item.value === dateSelected.lastSixMonth
                                    : item.value === dateSelected.day
                            )
                                ? "filled"
                                : "text"
                        }
                        onClick={handleSelect.bind(
                            null,
                            item.value as Partial<
                                DateValueType | DaysValueType | MonthValueType
                            >,

                            dateSelected.date === "1year"
                                ? "month"
                                : dateSelected.date === "6months"
                                ? "lastSixMonth"
                                : "day"
                        )}
                    />
                ))}
            </Flexbox>
        </Flexbox>
    );
};

export default DateList;

import React from "react";
import Flexbox from "../../../../elements/Flexbox";
import Chip from "../../../../../DS/Chip";
import Button from "../../../../../DS/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DateValueType, DaysValueType } from "../../../../../lib/types/views";
import { useDashboardStore } from "../../../../../lib/store/useDashboardStore";
import { dates, days } from "../../../../../lib/data";

const DateList = () => {
    const { dateSelected, setDateSelected } = useDashboardStore();

    const handleSelect = (
        data: Partial<DateValueType | DaysValueType>,
        type: "date" | "day"
    ) => {
        if (type === "day" && dateSelected.day === data) {
            setDateSelected({
                ...dateSelected,
                day: "all",
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
                gap="10px"
                style={{
                    position: "relative",
                    top: dateSelected.date === "7days" ? "0" : "-20px",
                    opacity: dateSelected.date === "7days" ? 1 : 0,
                    pointerEvents:
                        dateSelected.date === "7days" ? "all" : "none",
                    transition: "250ms ease-in-out",
                }}
            >
                {days.map((day, ix) => (
                    <Chip
                        key={day.value + ix}
                        label={day.label}
                        variant={
                            day.value !== dateSelected.day ? "text" : "filled"
                        }
                        onClick={handleSelect.bind(null, day.value, "day")}
                    />
                ))}
            </Flexbox>
        </Flexbox>
    );
};

export default DateList;

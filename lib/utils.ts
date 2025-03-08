export const getSixLastMonths = () => {
    const months = [];
    const date = new Date();
    for (let i = 0; i < 6; i++) {
        date.setMonth(date.getMonth() - 1);
        months.push(date.toLocaleString("default", { month: "long" }));
    }
    return months;
};

export const getSixLastYears = () => {
    const years = [];
    const date = new Date();
    for (let i = 0; i < 6; i++) {
        date.setFullYear(date.getFullYear() - 1);
        years.push(date.getFullYear());
    }
    return years;
};

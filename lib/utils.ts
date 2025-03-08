export const getLastSixMonths = (language: string = "en") => {
    const months = [];
    const date = new Date();
    for (let i = 0; i < 6; i++) {
        date.setMonth(date.getMonth() - 1);
        months.push(date.toLocaleString(language, { month: "long" }));
    }
    return language === "en"
        ? months.map((item) => item.toLowerCase())
        : months.map((item) => item.charAt(0).toUpperCase() + item.slice(1));
};

export const getLastSixYears = () => {
    const years = [];
    const date = new Date();
    for (let i = 0; i < 6; i++) {
        date.setFullYear(date.getFullYear() - 1);
        years.push(date.getFullYear());
    }
    return years;
};

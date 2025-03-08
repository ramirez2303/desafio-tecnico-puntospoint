import { Meta, StoryObj } from "@storybook/react";
import BiaxialChart from "./BiaxialChart";
import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const meta = {
    title: "Example/graphics/BiaxialChart",
    component: BiaxialChart,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {},
} satisfies Meta<typeof BiaxialChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleBiaxialChart: Story = {
    render: () => {
        const chartRef = useRef(null);

        useEffect(() => {
            if (!chartRef.current) return;
            const chart = echarts.init(chartRef.current);

            // 🔹 Generar datos cada hora entre los días con consistencia creciente
            const generateConsistentHourlyData = (
                startDate: any,
                initialValue: number
            ) => {
                const result = [];
                const date = new Date(startDate);
                let value = initialValue;
                for (let i = 0; i < 24; i++) {
                    date.setHours(i);
                    result.push([date.toISOString(), value]);
                    value += Math.floor(Math.random() * 10); // Incremento aleatorio para mantener consistencia creciente
                }
                return result;
            };

            const data = {
                bars: [
                    { date: "2024-03-04", value: 2000 },
                    { date: "2024-03-05", value: 2100 },
                    { date: "2024-03-06", value: 2200 },
                    { date: "2024-03-07", value: 2300 },
                    { date: "2024-03-08", value: 2400 },
                    { date: "2024-03-09", value: 2500 },
                    { date: "2024-03-10", value: 2600 },
                ],
                lines: [
                    ...generateConsistentHourlyData("2024-03-04", 2000),
                    ...generateConsistentHourlyData("2024-03-05", 2100),
                    ...generateConsistentHourlyData("2024-03-06", 2200),
                    ...generateConsistentHourlyData("2024-03-07", 2300),
                    ...generateConsistentHourlyData("2024-03-08", 2400),
                    ...generateConsistentHourlyData("2024-03-09", 2500),
                    ...generateConsistentHourlyData("2024-03-10", 2600),
                ],
            };

            const option = {
                xAxis: {
                    type: "time",
                    min: new Date("2024-03-04T00:00:00").getTime(),
                    max: new Date("2024-03-09T23:59:59").getTime(),
                    axisLabel: {
                        formatter: (value: any) =>
                            new Date(value).toLocaleDateString("es-ES", {
                                weekday: "long",
                            }),
                    },
                    splitLine: { show: false },
                    boundaryGap: false,
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "line",
                        snap: true,
                        label: {
                            formatter: (params: any) => {
                                const date = new Date(
                                    params.value
                                ).toLocaleString("es-ES", {
                                    weekday: "long",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                });

                                return date;
                            },
                        },
                    },
                },
                yAxis: [{ type: "value", name: "Clientes" }],
                series: [
                    {
                        name: "Clientes Totales",
                        type: "bar",
                        data: data.bars.map((d) => [
                            new Date(d.date).getTime(),
                            d.value,
                        ]),
                        itemStyle: { color: "#4285F4" },
                        barWidth: "40%",
                    },
                    {
                        name: "Visitas por Hora",
                        type: "line",
                        data: data.lines.map((d) => [
                            new Date(d[0]).getTime(),
                            d[1],
                        ]),
                        itemStyle: { color: "#D50000" },
                        smooth: true,
                        symbolSize: 6,
                        showSymbol: false,
                    },
                ],
            };

            chart.setOption(option);
            return () => chart.dispose();
        }, []);

        return (
            <div ref={chartRef} style={{ width: "1200px", height: "400px" }} />
        );
    },
    args: {},
};

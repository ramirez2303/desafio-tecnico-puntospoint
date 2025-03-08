import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const BiaxialChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (!chartRef.current) return;
        const chart = echarts.init(chartRef.current);

        // 🔹 Generar datos cada hora entre los días
        const generateHourlyData = (startDate: any) => {
            const result = [];
            const date = new Date(startDate);
            for (let i = 0; i < 24; i++) {
                date.setHours(i);
                result.push([
                    date.toISOString(),
                    Math.floor(Math.random() * 1000),
                ]);
            }
            return result;
        };

        const data = {
            bars: [
                { date: "2024-03-04", value: 2000 },
                { date: "2024-03-05", value: 1500 },
                { date: "2024-03-06", value: 1800 },
                { date: "2024-03-07", value: 2100 },
                { date: "2024-03-08", value: 1700 },
                { date: "2024-03-09", value: 1400 },
                { date: "2024-03-10", value: 1200 },
            ],
            lines: [
                ...generateHourlyData("2024-03-04"),
                ...generateHourlyData("2024-03-05"),
                ...generateHourlyData("2024-03-06"),
                ...generateHourlyData("2024-03-07"),
                ...generateHourlyData("2024-03-08"),
                ...generateHourlyData("2024-03-09"),
                ...generateHourlyData("2024-03-10"),
            ],
        };

        const option = {
            xAxis: {
                type: "time",
                min: new Date("2024-03-04T00:00:00").getTime(), // 👈 Ajustar para que inicie en lunes (ejemplo)
                max: new Date("2024-03-09T23:59:59").getTime(), // 👈 Ajustar para que termine en domingo
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
                    type: "line", // 🔹 Expande el área de hover en toda la barra
                    snap: true, // 🔹 Hace que el tooltip se "pegue" a la barra en cualquier parte
                    // label: {
                    //     formatter: (params: any) => {
                    //         const date = new Date(params.value);
                    //         return `${date.toLocaleDateString("es-ES", {
                    //             weekday: "long",
                    //         })} ${date.getHours()}:00`; // 🔹 Muestra la hora correctamente
                    //     },
                    // },
                },
                formatter: (params: any) => {
                    let tooltipText = "";
                    let dateLabel = new Date(
                        params[0].axisValue
                    ).toLocaleString("es-ES", {
                        weekday: "long",
                        hour: "2-digit",
                        minute: "2-digit",
                    });

                    tooltipText += `<b>${dateLabel}</b><br/>`;

                    params.forEach((item: any) => {
                        tooltipText += `
                        <span style="display:inline-block;width:10px;height:10px;background:${item.color};border-radius:50%;margin-right:5px;"></span> 
                        ${item.seriesName}: <b>${item.value}</b><br/>
                    `;
                    });

                    return tooltipText;
                },
            },
            yAxis: [{ type: "value", name: "Clientes" }],
            series: [
                {
                    name: "Clientes Totales",
                    type: "bar",
                    data: data.bars.map((d) => [d.date, d.value]),
                    itemStyle: { color: "#4285F4" },
                    barWidth: "40%",
                },
                {
                    name: "Visitas por Hora",
                    type: "line",
                    data: data.lines,
                    itemStyle: { color: "#D50000" },
                    smooth: true,
                    symbolSize: 6,
                },
            ],
        };

        chart.setOption(option);
        return () => chart.dispose();
    }, []);

    return <div ref={chartRef} style={{ width: "1200px", height: "400px" }} />;
};

export default BiaxialChart;

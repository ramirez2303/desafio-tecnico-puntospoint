import React from "react";
import Flexbox from "../../elements/Flexbox";
import DateTable from "./components/DateTable";
import CategoryTable from "./components/CategoryTable";
import MetricsTable from "./components/MetricsTable";

const GroupedTable = () => {
    return (
        <Flexbox
            width="100%"
            justifyContent="center"
            alignItems="center"
            gap="10px"
        >
            <DateTable />
            <CategoryTable />
            <MetricsTable />
        </Flexbox>
    );
};

export default GroupedTable;

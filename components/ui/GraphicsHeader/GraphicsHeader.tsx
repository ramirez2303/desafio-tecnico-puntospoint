import React from "react";
import Flexbox from "../../elements/Flexbox";
import DateList from "./components/DateList";
import ViewButtons from "./components/ViewButtons";

const GraphicsHeader = () => {
    return (
        <Flexbox direction="column" width="100%" gap="30px">
            <DateList />
            <ViewButtons />
        </Flexbox>
    );
};

export default GraphicsHeader;

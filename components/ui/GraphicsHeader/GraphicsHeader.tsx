import React, { useState } from "react";
import Flexbox from "../../elements/Flexbox";
import DateList from "./components/DateList";
import ViewButtons from "./components/ViewButtons";

const GraphicsHeader = () => {
    return (
        <Flexbox direction="column" width="60vw" gap="30px">
            <DateList />
            <ViewButtons />
        </Flexbox>
    );
};

export default GraphicsHeader;

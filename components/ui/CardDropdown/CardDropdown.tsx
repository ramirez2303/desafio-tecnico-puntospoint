import React, { useState } from "react";
import Flexbox from "../../elements/Flexbox";
import DropdownTrigger from "./components/DropdownTrigger";
import CardsAccordion from "./components/CardsAccordion";

const CardDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(true);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <Flexbox
            width="100%"
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            gap="20px"
        >
            <DropdownTrigger
                isDropdownOpen={isDropdownOpen}
                toggleDropdown={toggleDropdown}
            />
            <CardsAccordion isDropdownOpen={isDropdownOpen} />
        </Flexbox>
    );
};

export default CardDropdown;

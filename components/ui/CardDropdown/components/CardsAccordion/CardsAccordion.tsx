import React from "react";
import Flexbox from "../../../../elements/Flexbox";
import Card from "../../../../../DS/Card";

type DropdownCardsAccordion = {
    isDropdownOpen: boolean;
};

const CardsAccordion = ({ isDropdownOpen }: DropdownCardsAccordion) => {
    return (
        <Flexbox
            width="100%"
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
        >
            {Array(3)
                .fill({})
                .map((item, ix) => (
                    <Flexbox
                        width="100%"
                        marginTop={
                            ix === 0 ? "" : isDropdownOpen ? "15px" : "-50%"
                        }
                        sx={{ transition: "all 300ms ease-in-out" }}
                    >
                        <Card
                            width="100%"
                            title="Card Title"
                            items={[
                                { label: "Label 1", value: "Value 1" },
                                { label: "Label 2", value: "Value 2" },
                                { label: "Label 3", value: "Value 3" },
                            ]}
                            subtitle="Subtitle"
                            subItems={[
                                {
                                    label: "SubItem 1",
                                    value: "Value 1",
                                },
                                {
                                    label: "SubItem 2",
                                    value: "Value 2",
                                },
                                {
                                    label: "SubItem 3",
                                    value: "Value 3",
                                },
                                {
                                    label: "SubItem 4",
                                    value: "Value 4",
                                },
                            ]}
                        />
                    </Flexbox>
                ))}
        </Flexbox>
    );
};

export default CardsAccordion;

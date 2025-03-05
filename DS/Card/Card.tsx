import React, { Fragment } from "react";
import Flexbox from "../Flexbox";
import { CardItem } from "../../lib/types/designSystem";

type CardProps = {
    title: string;
    items: CardItem[];
    subtitle?: string;
    subItems?: CardItem[];
};

const Card = ({ title, items, subtitle, subItems }: CardProps) => {
    return (
        <Flexbox
            width="320px"
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            gap="8px"
            borderRadius="20px"
            boxShadow="0px 0px 7px 0px #00000026"
            boxSizing="border-box"
            padding="10px 20px 20px"
        >
            <span>{title}</span>
            {items.map((item) => (
                <Flexbox width="100%" justifyContent="space-between">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                </Flexbox>
            ))}
            {subtitle && subItems && (
                <Fragment>
                    <Flexbox width="100%" justifyContent="flex-start">
                        <span>{subtitle}</span>
                    </Flexbox>
                    {subItems?.map((item) => (
                        <Flexbox width="100%" justifyContent="space-between">
                            <span>{item.label}</span>
                            <span>{item.value}</span>
                        </Flexbox>
                    ))}
                </Fragment>
            )}
        </Flexbox>
    );
};

export default Card;

import React, { Fragment } from "react";
import Flexbox from "../Flexbox";
import { CardItem } from "../../lib/types/designSystem";
import { Typography } from "@mui/material";

type CardProps = {
    width?: string;
    title: string;
    items: CardItem[];
    subtitle?: string;
    subItems?: CardItem[];
};

const Card = ({
    width = "320px",
    title,
    items,
    subtitle,
    subItems,
}: CardProps) => {
    return (
        <Flexbox
            width={width}
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            gap="8px"
            borderRadius="20px"
            boxShadow="0px 0px 7px 0px #00000026"
            boxSizing="border-box"
            padding="10px 20px 20px"
        >
            <Typography variant="h6" fontSize="16px" fontWeight="600">
                {title}
            </Typography>
            {items.map((item) => (
                <Flexbox width="100%" justifyContent="space-between">
                    <Typography
                        variant="body2"
                        fontSize="14px"
                        fontWeight="400"
                    >
                        {item.label}
                    </Typography>
                    <Typography
                        variant="body2"
                        fontSize="14px"
                        fontWeight="400"
                    >
                        {item.value}
                    </Typography>
                </Flexbox>
            ))}
            {subtitle && subItems && (
                <Fragment>
                    <Flexbox width="100%" justifyContent="flex-start">
                        <Typography
                            variant="h6"
                            fontSize="16px"
                            fontWeight="600"
                        >
                            {subtitle}
                        </Typography>
                    </Flexbox>
                    {subItems?.map((item) => (
                        <Flexbox width="100%" justifyContent="space-between">
                            <Typography
                                variant="body2"
                                fontSize="14px"
                                fontWeight="400"
                            >
                                {item.label}
                            </Typography>
                            <Typography
                                variant="body2"
                                fontSize="14px"
                                fontWeight="400"
                            >
                                {item.value}
                            </Typography>
                        </Flexbox>
                    ))}
                </Fragment>
            )}
        </Flexbox>
    );
};

export default Card;

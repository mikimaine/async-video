import * as React from "react";
import { Select } from "../component";
import { ComponentMeta } from "@storybook/react";

// // // //

export default {
    title: "Components/Select",
    component: Select,
} as ComponentMeta<typeof Select>;

const people = [
    { id: 1, name: "Wade Cooper" },
    { id: 2, name: "Arlene Mccoy" },
    { id: 3, name: "Devon Webb" },
    { id: 4, name: "Tom Cook" },
];

export const Render = (): React.ReactElement => {
    const [selected, setSelected] = React.useState(people[3]);
    return (
        <Select options={people} onChange={setSelected} selected={selected} />
    );
};

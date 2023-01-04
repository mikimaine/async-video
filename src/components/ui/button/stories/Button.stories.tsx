import * as React from "react";
import { Button } from "../component";
import { ComponentMeta } from "@storybook/react";

// // // //

export default {
    title: "Components/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

export const Render = (): React.ReactElement => (
    <Button intent={"primary"} size="medium" />
);

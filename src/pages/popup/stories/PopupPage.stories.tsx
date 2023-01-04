import { ComponentMeta } from "@storybook/react";
import * as React from "react";
import { PopupPage } from "../component";

// // // //

export default {
    title: "Components/PopupPage",
    component: PopupPage,
} as ComponentMeta<typeof PopupPage>;

export const Render = (): JSX.Element => <PopupPage />;

import { cva, VariantProps } from "class-variance-authority";
import React, { ReactElement } from "react";

export type ButtonProps = VariantProps<typeof button> & { children: string };
export const button = cva(["font-semibold", "border", "rounded"], {
    variants: {
        intent: {
            primary: [
                "bg-blue-500",
                "text-white",
                "border-transparent",
                "hover:bg-blue-600",
            ],
            secondary: [
                "bg-white",
                "text-gray-800",
                "border-gray-400",
                "hover:bg-gray-100",
            ],
        },
        size: {
            small: ["text-sm", "py-1", "px-2"],
            medium: ["text-base", "py-2", "px-4"],
        },
    },
    compoundVariants: [
        {
            intent: "primary",
            size: "medium",
            className: "uppercase",
        },
    ],
    defaultVariants: {
        intent: "primary",
        size: "medium",
    },
});

export function Button(props: ButtonProps): ReactElement {
    return <button className={button(props)}>{props.children}</button>;
}

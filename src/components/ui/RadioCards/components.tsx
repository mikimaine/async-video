import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { classNames } from "@src/util";
import React from "react";

export type RadioCardsProps = {
    options: { id: number; title: string; description: string; icon: any }[];
    selected: { id: number; title: string; description: string };
    label?: string;
    onChange?: (props: {
        id: number;
        title: string;
        description: string;
    }) => void;
};

export function RadioCards(props: RadioCardsProps): JSX.Element {
    const { selected, onChange, options, label } = props;
    return (
        <RadioGroup value={selected} onChange={onChange}>
            {label && (
                <RadioGroup.Label className="text-base font-medium text-gray-900">
                    {label}
                </RadioGroup.Label>
            )}

            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-2">
                {options.map((option) => (
                    <RadioGroup.Option
                        key={option.id}
                        value={option}
                        className={({ checked, active }) =>
                            classNames(
                                checked
                                    ? "border-transparent"
                                    : "border-gray-300",
                                active
                                    ? "border-indigo-500 ring-2 ring-indigo-500"
                                    : "",
                                "relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none",
                            )
                        }
                    >
                        {({ checked, active }) => (
                            <>
                                <span className="flex items-center gap-2">
                                {option.icon}
                                    <span className="flex flex-col">
                                        
                                        <RadioGroup.Label
                                            as="span"
                                            className="block text-sm font-medium text-gray-900"
                                        >
                                            {option.title}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description
                                            as="span"
                                            className="mt-1 flex items-center text-sm text-gray-500"
                                        >
                                            {option.description}
                                        </RadioGroup.Description>
                                    </span>
                                    
                                </span>
                               
                                <CheckCircleIcon
                                    className={classNames(
                                        !checked ? "invisible" : "",
                                        "h-5 w-5 text-indigo-600",
                                    )}
                                    aria-hidden="true"
                                />
                                 
                                <span
                                    className={classNames(
                                        active ? "border" : "border-2",
                                        checked
                                            ? "border-indigo-500"
                                            : "border-transparent",
                                        "pointer-events-none absolute -inset-px rounded-lg",
                                    )}
                                    aria-hidden="true"
                                />
                            </>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    );
}

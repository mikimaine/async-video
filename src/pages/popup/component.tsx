import {
    BellIcon,
    ComputerDesktopIcon,
    DocumentIcon,
    MicrophoneIcon,
    VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { Button } from "@src/components/ui/button";
import { RadioCards } from "@src/components/ui/RadioCards";
import { Select } from "@src/components/ui/select";
import React from "react";

///
export function PopupPage(): JSX.Element {
    return (
        <div className="flex flex-col max-w-sm gap-8 bg-white p-4 rounded-md shadow-sm">
            <div className="flex flex-row w-full justify-between">
                <div className="flex gap-2 items-center">
                    <VideoCameraIcon className="h-11 w-11 text-blue-500" />
                    <p className="text-2xl font-semibold">AV</p>
                </div>
                <div className="flex flex-row gap-2">
                    <BellIcon className="h-6 w-6 text-blue-500" />
                    <EllipsisHorizontalIcon className="h-6 w-6 text-blue-500" />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <Select
                        options={[{ id: 0, name: "Screen and camera" }, { id: 1, name: "Screen only" }]}
                        selected={{ id: 0, name: "Screen and camera" }}
                    />
                </div>
                <div className="flex justify-between">
                    <RadioCards
                        label="What do you want to record?"
                        options={[
                            {
                                id: 1,
                                title: "Full Desktop",
                                description: "Record your entire screen",
                                icon: <ComputerDesktopIcon className="h-10 w-10"></ComputerDesktopIcon>
                            },
                            {
                                id: 2,
                                title: "Custom Tab",
                                description: "Record a selected tab",
                                icon: <DocumentIcon className="h-10 w-10"></DocumentIcon>
                            },
                        ]}
                        selected={{
                            id: 1,
                            title: "Full Desktop",
                            description: "Record your entire screen",
                        }}
                    />
                </div>
                <div>
                    <p  className=""> Recording Settings </p>
                </div>
                <hr />
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-2 w-full items-center">
                        <MicrophoneIcon className="h-6 w-6 text-blue-500" />
                        <div className="flex-grow">
                            <Select
                                options={[
                                    {
                                        id: 0,
                                        name: "Default MacBook Pro",
                                    },
                                    {
                                        id: 1,
                                        name: "Random",
                                    }
                                ]}
                                selected={{
                                    id: 0,
                                    name: "Default MacBook Pro",
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 w-full items-center">
                        <VideoCameraIcon className="h-6 w-6 text-blue-500" />
                        <div className="flex-grow">
                            <Select
                                options={[{
                                    id: 0,
                                    name: "FaceTime HD Camera",
                                },
                                {
                                    id: 0,
                                    name: "Another HD Camera",
                                }]}
                                selected={{
                                    id: 0,
                                    name: "FaceTime HD Camera",
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <p  className="text-right text-sm underline decoration-dashed cursor-pointer"> Advanced options </p>
                    <div>

                    </div>
                </div>
            </div>

            <div className="m-auto">
                <Button intent={"primary"}>Start Recording</Button>
            </div>
        </div>
    );
}

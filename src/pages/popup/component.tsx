import {
    BellIcon,
    MicrophoneIcon,
    VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { Button } from "@src/components/ui/button";
import { Select } from "@src/components/ui/select";
import React from "react";

///
export function PopupPage(): JSX.Element {
    return (
        <div className="flex flex-col max-w-sm gap-8 bg-white p-4 rounded-md shadow-sm">
            <div className="flex flex-row w-full justify-between">
                <div>Logo</div>
                <div className="flex flex-row">
                    <BellIcon className="h-6 w-6 text-blue-500" />
                    <EllipsisHorizontalIcon className="h-6 w-6 text-blue-500" />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <Select
                        options={[]}
                        selected={{ id: 0, name: "Screen and camera" }}
                    />
                </div>
                <div className="flex justify-between">
                    <div> Full Desktop</div>
                    <div> Custom Tab</div>
                </div>
                <p> Recording Settings </p>
                <hr />
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-2 w-full items-center">
                        <MicrophoneIcon className="h-6 w-6 text-blue-500" />
                        <div className="flex-grow">
                            <Select
                                options={[]}
                                selected={{
                                    id: 0,
                                    name: "Screen and camera",
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 w-full items-center">
                        <VideoCameraIcon className="h-6 w-6 text-blue-500" />
                        <div className="flex-grow">
                            <Select
                                options={[]}
                                selected={{
                                    id: 0,
                                    name: "Screen and camera",
                                }}
                            />
                        </div>
                    </div>
                </div>
                Advanced options <br />
            </div>

            <div className="m-auto">
                <Button intent={"primary"}>Start Recording</Button>
            </div>
        </div>
    );
}

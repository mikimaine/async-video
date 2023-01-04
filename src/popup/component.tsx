import React from "react";
import { Hello } from "@src/components/hello";
import browser, { Tabs } from "webextension-polyfill";
import { Scroller } from "@src/components/scroller";
import css from "./styles.module.css";
import { Button } from "@src/components/ui/button";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import {
    BellIcon,
    MicrophoneIcon,
    VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { Select } from "@src/components/ui/select";
import { auth } from "@src/config/firebase";
import { useAuthUser } from "@react-query-firebase/auth";
import { SignIn } from "@src/pages";
// // // //

// Scripts to execute in current tab
const scrollToTopPosition = 0;
const scrollToBottomPosition = 9999999;

function scrollWindow(position: number) {
    window.scroll(0, position);
}

/**
 * Executes a string of Javascript on the current tab
 * @param code The string of code to execute on the current tab
 */
function executeScript(position: number): void {
    // Query for the active tab in the current window
    browser.tabs
        .query({ active: true, currentWindow: true })
        .then((tabs: Tabs.Tab[]) => {
            // Pulls current tab from browser.tabs.query response
            const currentTab: Tabs.Tab | number = tabs[0];

            // Short circuits function execution is current tab isn't found
            if (!currentTab) {
                return;
            }
            const currentTabId: number = currentTab.id as number;

            // Executes the script in the current tab
            browser.scripting
                .executeScript({
                    target: {
                        tabId: currentTabId,
                    },
                    func: scrollWindow,
                    args: [position],
                })
                .then(() => {
                    console.log("Done Scrolling");
                });
        });
}

// // // //

export function Popup() {
    // Sends the `popupMounted` event
    React.useEffect(() => {
        browser.runtime.sendMessage({ popupMounted: true });
    }, []);

    const user = useAuthUser(["user"], auth);

    if (user.isLoading) {
        return <div> loading</div>;
    }

    if (user.data) {
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

    return (
        <div className=" max-w-sm gap-8 h-full bg-gray-50rounded-md shadow-sm">
            <SignIn />
        </div>
    );
}

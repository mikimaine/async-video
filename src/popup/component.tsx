import { useAuthUser } from "@react-query-firebase/auth";
import { auth } from "@src/config/firebase";
import { SignIn } from "@src/pages";
import { PopupPage } from "@src/pages/popup";
import React from "react";

// // // //

export function Popup(): JSX.Element {
    const user = useAuthUser(["user"], auth);

    if (user.isLoading) {
        return <div> loading</div>;
    }

    if (user.data) {
        return <PopupPage />;
    }

    return (
        <div className="max-w-sm gap-8 h-full bg-gray-50rounded-md shadow-sm">
            <SignIn />
        </div>
    );
}

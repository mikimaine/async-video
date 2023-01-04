import * as React from "react";
import * as ReactDOM from "react-dom";
import browser from "webextension-polyfill";
import { Popup } from "./component";
import "../css/app.css";
import { QueryClient, QueryClientProvider } from "react-query";

// // // //

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="popupContainer">
                <Popup />
            </div>
        </QueryClientProvider>
    );
};

browser.tabs.query({ active: true, currentWindow: true }).then(() => {
    ReactDOM.render(
        <div id="popup">
            <App />{" "}
        </div>,
        document.getElementById("popup"),
    );
});

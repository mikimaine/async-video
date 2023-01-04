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
            <Popup />
        </QueryClientProvider>
    );
};

browser.tabs.query({ active: true, currentWindow: true }).then(() => {
    ReactDOM.render(<App />, document.getElementById("popup"));
});

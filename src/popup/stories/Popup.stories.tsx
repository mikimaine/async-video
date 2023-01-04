import * as React from "react";
import { Popup } from "../component";
import { ComponentMeta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";

// // // //

export default {
    title: "Components/Popup",
    component: Popup,
} as ComponentMeta<typeof Popup>;

const queryClient = new QueryClient();

export const Render = () => (
    <GoogleOAuthProvider clientId="115371525420-02pqbh6n82rf5m9puckm3q2aiopc4acn.apps.googleusercontent.com">
        <QueryClientProvider client={queryClient}>
            <Popup />
        </QueryClientProvider>
    </GoogleOAuthProvider>
);

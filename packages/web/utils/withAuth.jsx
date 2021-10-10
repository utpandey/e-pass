import React from "react";
import { useRouter } from "next/router";
import { store } from "../store/store";

const withAuth = (WrappedComponent) => {
    const state = store.getState();
    const isAuthenticated = state.auth.isAuthenticated;
    const token = state.auth.user.access_token;
    console.log(state);
    return (props) => {
        // checks whether we are on client / browser or server.
        if (typeof window !== "undefined") {
            const Router = useRouter();

            // If there is no access token we redirect to "/login" page.
            if (!isAuthenticated) {
                Router.replace("/login");
                return null;
            }

            // If this is an accessToken we just render the component that was passed with all its props
            return <WrappedComponent {...props }
            />;
        }

        // If we are on server, return null
        return null;
    };
};

export default withAuth;
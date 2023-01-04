import { GoogleLogin } from "@react-oauth/google";
import { auth } from "@src/config/firebase";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import React from "react";
/////

export function SignIn(): JSX.Element {
    return (
        <>
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{" "}
                        <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            start your 14-day free trial
                        </a>
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <div>
                            <GoogleLogin
                                onSuccess={async (credentialResponse) => {
                                    if (credentialResponse.credential) {
                                        const credential =
                                            GoogleAuthProvider.credential(
                                                credentialResponse.credential,
                                            );
                                        await signInWithCredential(
                                            auth,
                                            credential,
                                        );
                                        console.log(credentialResponse);
                                    }
                                }}
                                onError={() => {
                                    console.log("Login Failed");
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

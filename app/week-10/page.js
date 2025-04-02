"use client";

import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push("week-10/shopping-list"); 
        }
    }, [user, router]);

    const login = async () => {
        await gitHubSignIn();
    };

    const logout = async () => {
        await firebaseSignOut();
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full text-center">
                {user ? (
                    <>
                        <h1 className="text-2xl font-bold mb-4">Hello, {user.displayName}</h1>
                        <button 
                            onClick={logout} 
                            className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold mb-4">Log in</h1>
                        <button 
                            onClick={login} 
                            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Log in
                        </button>
                    </>
                )}
            </div>
        </main>
    );
}

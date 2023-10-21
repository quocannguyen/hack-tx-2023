"use client"

import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { User } from "@prisma/client";

/**
 * 
 * Usage: const appContext = useContext(AppContext)
 */

type AppContextType = {
    //
    currentUser: User | null,
    setCurrentUser: Dispatch<SetStateAction<User | null>>,
}

export const AppContext = createContext<AppContextType | null>(null)

export function AppContextProvider(
    { user, children } : { user: User | null, children: ReactNode }
) {
    // 
    const [currentUserState, setCurrentUserState] = useState<User | null>(user)

    const context: AppContextType = {
        // 
        currentUser: currentUserState,
        setCurrentUser: setCurrentUserState,
    }
    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}
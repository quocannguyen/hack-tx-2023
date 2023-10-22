'use client'

import { recommendSongs } from "@/app/actions/recommendSongs"
import { AppContext } from "@/context/appcontext"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { useContext } from "react"

export default function Navbar() {
    const appContext = useContext(AppContext)

    function signOutHandler() {
        signOut()
        appContext?.setCurrentUser(null)
    }

    return (
        <header>
            <nav className="bg-black flex justify-between px-4 py-6 shadow-xl">
                <div>{appContext?.currentUser?.email}</div>
                <div className="flex gap-4">
                    <Link href="/">Home</Link>
                    {
                        appContext?.currentUser ? <button onClick={signOutHandler}>Sign Out</button>
                        : <Link href="/signup">Sign Up</Link>
                    }
                </div>
            </nav>
        </header>
    )
}
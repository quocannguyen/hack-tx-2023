'use client'

import { AppContext } from "@/context/appcontext"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { useContext } from "react"
import styles from "./styles.module.css"

export default function Navbar() {
    const appContext = useContext(AppContext)

    function signOutHandler() {
        signOut()
        appContext?.setCurrentUser(null)
    }

    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.linkContainer}>
                    <Link href="/" className={styles.navbar_home}>Home
                    </Link>
                    <span className={styles.separator}>|</span>
                    {
                        appContext?.currentUser ? 
                        <button onClick={signOutHandler}>Sign Out</button>
                        :
                        <Link href="/signup" className={styles.navbar_signup}>
                            Sign Up
                        </Link>
                    }
                </div>
            </nav>
        </header>
    )
}

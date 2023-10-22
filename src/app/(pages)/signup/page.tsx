'use client'

import { signUp } from "@/app/actions/userActions";
import InputForm from "@/components/input/inputform";
import { initialCredentials } from "@/models/credentials.model";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import styles from "./styles.module.css"
import cart from "@/assets/cart.png"

export default function Page() {
    const [credentialsState, setCredentialsState] = useState(initialCredentials)
    const router = useRouter()

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCredentialsState({
            ...credentialsState,
            [event.target.name]: event.target.value
        })
    }

    function onSubmit(event: FormEvent) {
        event.preventDefault() // Prevent refreshing when submitting
        signUp(credentialsState).then(() => {
            router.push("/signin")
        }).catch((error: Error) => {
            console.log(error)
        })
    }

    return (
        <div className={styles.container}>
            <h4>Create an account with Temp</h4>
            <div className={styles.card}>
                <div className={styles.title}>
                   <img src={cart.src}/> 
                </div>
                <input
                    type="email"
                    value={credentialsState.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="EMAIL"
                    className={styles.input}
                />
                <input
                    type="password"
                    value={credentialsState.password}
                    onChange={handleChange}
                    name="password"
                    placeholder="PASSWORD"
                    className={styles.input}
                />
                <button onClick={onSubmit} className={styles.button}>
                    CREATE ACCOUNT
                </button>
                <div className={styles.link}>
                    Already have an account? <Link href="/signin">Log in</Link>
                </div>
            </div>
        </div>
    );
}

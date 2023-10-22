'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { InvalidCredentialsError } from "@/lib/exceptions";
import { signIn } from "next-auth/react"
import { initialCredentials } from "@/models/credentials.model";
// import InputForm from "@/components/input/inputform";
import styles from './styles.module.css'

import cart from '@/assets/cart.png'

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
        signIn("credentials", {
            ...credentialsState,
            redirect: false
        }).then(async (callback) => {
            // if (callback?.ok) {
            //     router.push("/")
            //     router.refresh()
            // }
            if (callback?.error) {
                throw new InvalidCredentialsError()
            }
        }).then(() => {
            router.refresh()
        }).then(() => {
            router.push("/")
        })
    }

return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <img src={cart.src}  alt="cart"/>
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
                    LOGIN
                </button>
                <div className={styles.link}>
                    <a href="#">Forgot password?</a>
                </div>
            </div>
        </div>
    );

}
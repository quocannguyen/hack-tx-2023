'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { InvalidCredentialsError } from "@/lib/exceptions";
import { signIn } from "next-auth/react"
import { initialCredentials } from "@/models/credentials.model";
import InputForm from "@/components/input/inputform";

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
        <section>
            <InputForm
                onSubmit={onSubmit}
                onChange={handleChange}
                inputs={[
                    {
                        id: "email",
                        value: credentialsState.email
                    },
                    {
                        id: "password",
                        value: credentialsState.password
                    }
                ]} />
            <section>
                Haven't got an account? <Link href="/signup">Sign Up</Link>
            </section>
        </section>
    )
}
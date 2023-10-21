'use client'

import { signUp } from "@/app/actions/userActions";
import InputForm from "@/components/input/inputform";
import { initialCredentials } from "@/models/credentials.model";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

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
                Have an account? <Link href="/signin">Sign in</Link>
            </section>
        </section>
    )
}
import { CredentialsProps } from "@/models/credentials.model";
import axios from "axios";

export async function signUp(credentialsProps: CredentialsProps) {
    return axios.post(
        "/api/signup", {
            credentialsProps
        }
    ).then((response) => response.data)
}
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import prisma from "@/lib/prismadb"
import { CredentialsProps } from "@/models/credentials.model"

export async function POST(request: Request) {
    const body = await request.json()
    const { credentialsProps } = body as { credentialsProps: CredentialsProps }
    const hashedPassword = await bcrypt.hash(credentialsProps.password, 12)
    const user = await prisma.user.create({
        data: {
            email: credentialsProps.email,
            hashedPassword
        }
    })
    return NextResponse.json(user)
}
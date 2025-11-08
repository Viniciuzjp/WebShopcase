'use client'

import {Button} from "@av-digital/components";
import '@av-digital/components/styles'
import Input from "@/components/Input/InputForm";
import Link from "next/link";
import { useState } from "react";

export default function Login() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleSetUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

     const handleSendUser = async () => {
        try{
            const response = await fetch('http://localhost:3003/login', {
                method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user)
            })
            const data = await response.json()
            console.log(data)
        }
        catch(err) {
            console.log(err)
        }
    }
    return (
        <>
        <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-auto w-[40%] max-xl:w-[70%] max-sm:w-full shadow-2xl p-10 rounded-md gap-3 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center text-2xl font-bold text-neutral-800">
            <h1>Login</h1>
          </div>
          <div className="flex flex-col w-full">
            <label className="text-gray-500 mb-1" htmlFor="password">
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              onChange={handleSetUser}
              placeholder="informe seu E-mail"
              className="h-10 w-full"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-gray-500 mb-1" htmlFor="password">
              Senha
            </label>
            <Input
              id="password"
              type="password"
              name="password"
              onChange={handleSetUser}
              placeholder="Insira sua senha"
              className="h-10 w-full"
            />
          </div>
          <Button onClick={handleSendUser} variant="primary" className="w-full">
            Login
          </Button>
          <Link href="/register">
            <Button>Não tem uma conta?</Button>
          </Link>
        </div>
      </div>
        </>
    )
}
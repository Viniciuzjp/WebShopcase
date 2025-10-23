"use client";

import Button from "@/components/button/Button";
import Card from "@/components/card/card";
import Input from "@mui/material/Input";
import Link from "next/link";
import { useEffect, useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [data, setData] = useState({});
  const handleSubmitUser = () => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3003/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user)
        });
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  };
  console.log(data)

  const handleSetUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-auto w-[500px] max-md:w-[500px] shadow-2xl p-10 rounded-md gap-3 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center text-2xl font-bold text-neutral-800">
            <h1>Registrar</h1>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-500 mb-1" htmlFor="email">
              Nome
            </label>
            <Input
              id="name"
              type="name"
              name="name"
              onChange={handleSetUser}
              placeholder="Digite seu nome"
              className="h-10 w-100"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-500 mb-1" htmlFor="password">
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              onChange={handleSetUser}
              placeholder="informe seu E-mail"
              className="h-10 w-100"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-500 mb-1" htmlFor="password">
              Senha
            </label>
            <Input
              id="password"
              type="password"
              name="password"
              onChange={handleSetUser}
              placeholder="Insira sua senha"
              className="h-10 w-100"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-500 mb-1" htmlFor="password">
              Confirmar senha
            </label>
            <Input
              id="password2"
              type="password2"
              name="password2"
              onChange={handleSetUser}
              placeholder="Confirme sua senha"
              className="h-10 w-100"
            />
          </div>
          <Button onClick={handleSubmitUser} className="w-full">
            Registrar
          </Button>
          <Link href="/register">
            <Button>Não tem uma conta?</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    const data = {
      email,
      password,
    } 

    console.log(data)

  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input type="email" value={email} id="" onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} id="" onChange={e => setPassword(e.target.value)}/>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Home;

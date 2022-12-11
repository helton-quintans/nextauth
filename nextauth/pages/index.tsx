import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <form className={styles.container}>
      <input type="email" value={email} id="" onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} id="" onChange={e => setPassword(e.target.value)}/>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Home;

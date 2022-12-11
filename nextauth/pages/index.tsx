import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className={styles.container}>
      <input type="email" name="" id="" />
      <input type="password" name="" id="" />
    </div>
  );
};

export default Home;

import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Header from "../components/Header";
import style from "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

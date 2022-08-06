import type { NextPage } from "next";
import Head from "next/head";
import HomeIndex from "../components/Pages/IndexIndex/HomeIndex";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | JekaConnect</title>
      </Head>

      <HomeIndex />
    </>
  );
};

export default Home;

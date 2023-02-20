import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import MiddleSection from "./components/MiddleSection";
import LastSection from "./components/LastSection";

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Sport-Healthy</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="mx-auto">
          <Hero></Hero>
          <Section2></Section2>
          <MiddleSection></MiddleSection>
          <LastSection></LastSection>
        </main>
      </Layout>
    </div>
  );
}

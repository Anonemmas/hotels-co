/* eslint-disable @typescript-eslint/no-unused-vars */

import { Inter } from "@next/font/google";
import Head from "next/head";

import RoomsLayout from "components/RoomsLayout";
import AppLayout from "layouts/AppLayout";

import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hotels&Co</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/hotelsco.ico" />
      </Head>
      <AppLayout>
        <RoomsLayout />
      </AppLayout>
    </>
  );
}

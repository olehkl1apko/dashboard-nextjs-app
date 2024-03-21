import Head from "next/head";
import { useSession } from "next-auth/react";

import Dashboard from "@/pages/dashboard";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import Login from "@/components/Login";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        {session && (
          <>
            <SideMenu />
            <Dashboard />
          </>
        )}
        <Login />
      </main>
    </>
  );
}

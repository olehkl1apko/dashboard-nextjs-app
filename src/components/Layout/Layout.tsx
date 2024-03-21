import { ReactNode } from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";

import SideMenu from "@/components/SideMenu";
import Footer from "@/components/Footer";
import scss from "./Layout.module.scss";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>DataSoft - Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={scss.layout}
        style={{
          padding: session ? "60px 24px 140px 80px" : "60px 0 0 0",
        }}
      >
        {session && <SideMenu />}
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;

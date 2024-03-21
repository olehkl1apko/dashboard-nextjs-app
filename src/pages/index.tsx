import { FC } from "react";
import { useSession } from "next-auth/react";

import Dashboard from "@/pages/dashboard";
import Login from "@/components/Login";
import scss from "../components/Layout/Layout.module.scss";

const Home: FC = () => {
  const { data: session } = useSession();

  return (
    <main className={scss.main}>
      {session && <Dashboard />}
      {!session && <Login />}
    </main>
  );
};

export default Home;

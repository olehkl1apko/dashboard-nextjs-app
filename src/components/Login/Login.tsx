import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Sign in as {session?.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <h2>Please log in</h2> <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Login;

// import { useSession, signIn, signOut } from "next-auth/react";
// import Button from "@mui/material/Button";

// const Login = () => {
//   const { data: session } = useSession();

//   if (session) {
//     return (
//       <>
//         <Button variant={"contained"} color={"error"} onClick={() => signOut()}>
//           Sign out
//         </Button>
//       </>
//     );
//   }
//   return (
//     <>
//       <h2>Please log in</h2> <br />
//       <Button variant={"contained"} color={"success"} onClick={() => signIn()}>
//         Sign in
//       </Button>
//     </>
//   );
// };

// export default Login;
